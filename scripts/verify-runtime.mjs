import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import { chromium } from "playwright-core";
import { PNG } from "pngjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const reportsDir = path.join(root, "reports");

const viewports = [
  { name: "desktop", width: 1280, height: 720 },
  { name: "mobile", width: 390, height: 844 }
];

function chromePath() {
  const candidates = [
    process.env.CHROME_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    path.join(process.env.LOCALAPPDATA || "", "Google\\Chrome\\Application\\chrome.exe")
  ].filter(Boolean);

  const found = candidates.find((candidate) => existsSync(candidate));
  if (!found) {
    throw new Error("Chrome executable not found. Set CHROME_PATH to run runtime verification.");
  }
  return found;
}

function countNonSnowPixels(buffer) {
  const png = PNG.sync.read(buffer);
  let nonSnow = 0;
  for (let offset = 0; offset < png.data.length; offset += 4) {
    const r = png.data[offset];
    const g = png.data[offset + 1];
    const b = png.data[offset + 2];
    const a = png.data[offset + 3];
    if (a > 0 && !(r > 235 && g > 235 && b > 230)) {
      nonSnow += 1;
    }
  }
  return {
    nonSnow,
    total: png.width * png.height,
    ratio: nonSnow / (png.width * png.height)
  };
}

async function inspectPage(page, viewportName) {
  await page.waitForSelector("#load-card", { state: "attached", timeout: 15000 });
  await page.waitForFunction(() => document.querySelector("#load-card")?.hidden === true, null, { timeout: 15000 });
  await page.waitForTimeout(800);

  const state = await page.evaluate(() => {
    const canvas = document.querySelector("#game");
    const hud = document.querySelector("#hud");
    const loadCard = document.querySelector("#load-card");
    const pauseCard = document.querySelector("#pause-card");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    const canvasRect = canvas.getBoundingClientRect();
    const hudRect = hud.getBoundingClientRect();
    const pixel = new Uint8Array(4);
    if (gl) {
      gl.readPixels(
        Math.floor(canvas.width * 0.5),
        Math.floor(canvas.height * 0.5),
        1,
        1,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        pixel
      );
    }
    return {
      title: document.title,
      ready: loadCard.hidden === true,
      paused: pauseCard.hidden === false,
      hudText: hud.innerText,
      canvas: {
        cssWidth: canvasRect.width,
        cssHeight: canvasRect.height,
        width: canvas.width,
        height: canvas.height,
        simulationFps: canvas.dataset.simulationFps
      },
      hud: {
        left: hudRect.left,
        right: hudRect.right,
        top: hudRect.top,
        bottom: hudRect.bottom
      },
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      webgl: Boolean(gl),
      centerPixel: Array.from(pixel)
    };
  });

  if (!state.ready) throw new Error(`${viewportName}: loader did not finish`);
  if (!state.webgl) throw new Error(`${viewportName}: WebGL context missing`);
  if (state.canvas.simulationFps !== "60") {
    throw new Error(`${viewportName}: expected 60 FPS simulation, got ${state.canvas.simulationFps}`);
  }
  if (!state.hudText.includes("Time:") || !state.hudText.includes("Style:")) {
    throw new Error(`${viewportName}: HUD text missing expected status rows`);
  }
  if (state.hud.right > state.viewport.width || state.hud.bottom > state.viewport.height) {
    throw new Error(`${viewportName}: HUD overflows viewport`);
  }

  return state;
}

async function verifyControls(page) {
  await page.keyboard.press("F3");
  await page.waitForFunction(() => document.title.startsWith("Ski Paused"), null, { timeout: 3000 });
  const pausedVisible = await page.locator("#pause-card").isVisible();
  if (!pausedVisible) throw new Error("pause card was not visible after F3");

  await page.keyboard.press("F3");
  await page.waitForFunction(() => document.title === "SkiFree", null, { timeout: 3000 });

  await page.evaluate(() => {
    window.skiFreeGame.restart();
    window.skiFreeGame.input.pointerActive = false;
  });
  await page.keyboard.press("ArrowLeft");
  const leftState = await page.locator("#game").getAttribute("data-player-state");
  if (leftState !== "4") throw new Error(`ArrowLeft mapped to state ${leftState}, expected 4`);

  await page.evaluate(() => {
    window.skiFreeGame.restart();
    window.skiFreeGame.input.pointerActive = false;
  });
  await page.keyboard.press("ArrowRight");
  const rightState = await page.locator("#game").getAttribute("data-player-state");
  if (rightState !== "1") throw new Error(`ArrowRight mapped to state ${rightState}, expected 1`);

  await page.keyboard.press("Space");
  await page.waitForFunction(() => {
    const game = document.querySelector("#game");
    return game?.dataset.playerMode === "1" && Number(game.dataset.playerActionTimer) > 0;
  }, null, { timeout: 3000 });
  await page.waitForFunction(() => {
    const game = document.querySelector("#game");
    return game?.dataset.playerMode === "0" && game.dataset.playerState === "0";
  }, null, { timeout: 3000 });

  await page.mouse.click(640, 360);
  await page.waitForFunction(() => {
    const game = document.querySelector("#game");
    return game?.dataset.playerMode === "1" && Number(game.dataset.playerActionTimer) > 0;
  }, null, { timeout: 3000 });
  await page.waitForFunction(() => {
    const game = document.querySelector("#game");
    return game?.dataset.playerMode === "0" && game.dataset.playerState === "0";
  }, null, { timeout: 3000 });

  await page.waitForTimeout(500);
  const before = await page.locator("#distance-value").innerText();
  await page.keyboard.press("F2");
  await page.waitForTimeout(500);
  const after = await page.locator("#distance-value").innerText();
  if (before === after) {
    throw new Error("F2 restart did not update distance display");
  }
}

async function verifyCourseModes(page) {
  const result = await page.evaluate(() => {
    const game = window.skiFreeGame;
    const tick = () => {
      game.update(0.04);
      game.render();
    };

    game.restart();
    game.player.x = 0;
    game.player.y = 638;
    game.player.speed = 4;
    tick();
    const freestyleStarted = game.courseModes.freestyle.active;
    game.launchTrick(14);
    const freestyleStyle = game.styleScore;
    game.player.y = game.courseModes.freestyle.finishY - 2;
    game.player.speed = 4;
    tick();
    const freestyleFinished = game.courseModes.freestyle.finished;

    game.restart();
    game.player.x = game.courseModes.race.signX;
    game.player.y = 638;
    game.player.speed = 4;
    tick();
    const raceStarted = game.courseModes.race.active;
    const firstGate = game.courseModes.race.gates[0];
    game.player.x = firstGate.left - 120;
    game.player.y = firstGate.y - 2;
    game.player.speed = 4;
    tick();
    const raceMissedGates = game.courseModes.race.missedGates;
    const racePenaltyMs = game.courseModes.race.penaltyMs;
    game.player.x = game.courseModes.race.signX;
    game.player.y = game.courseModes.race.finishY - 2;
    game.player.speed = 4;
    tick();
    const raceFinished = game.courseModes.race.finished;

    return {
      freestyleStarted,
      freestyleStyle,
      freestyleFinished,
      raceStarted,
      raceMissedGates,
      racePenaltyMs,
      raceFinished,
      dataset: {
        courseMode: game.canvas.dataset.courseMode,
        courseFinished: game.canvas.dataset.courseFinished,
        courseMissedGates: game.canvas.dataset.courseMissedGates,
        coursePenaltyMs: game.canvas.dataset.coursePenaltyMs
      }
    };
  });

  if (!result.freestyleStarted) throw new Error("freestyle mode did not start in center lane");
  if (result.freestyleStyle <= 0) throw new Error("freestyle mode did not award style points");
  if (!result.freestyleFinished) throw new Error("freestyle mode did not finish at long-course finish");
  if (!result.raceStarted) throw new Error("race mode did not start in left lane");
  if (result.raceMissedGates !== 1) throw new Error(`race gate miss count was ${result.raceMissedGates}, expected 1`);
  if (result.racePenaltyMs !== 5000) throw new Error(`race penalty was ${result.racePenaltyMs}, expected 5000`);
  if (!result.raceFinished) throw new Error("race mode did not finish at race finish");
}

async function verifyYetiAttack(page) {
  const result = await page.evaluate(() => {
    const game = window.skiFreeGame;
    game.restart();
    game.player.x = 0;
    game.player.y = 2200;
    game.player.speed = 0;
    game.monster = game.addObject({
      kind: 3,
      spriteId: 68,
      x: 0,
      y: 2200,
      collidable: true,
      radius: 20
    });
    game.checkCollisions();
    const started = game.yetiAttack.active;
    const playerHidden = game.player.sprite.visible === false;
    const firstFrame = game.monster.spriteId;
    for (let i = 0; i < 12; i += 1) {
      game.update(0.2);
    }
    return {
      started,
      playerHidden,
      firstFrame,
      finished: game.yetiAttack.finished,
      gameOver: game.gameOver,
      finalFrame: game.monster.spriteId,
      messageVisible: !document.querySelector("#pause-card").hidden,
      message: document.querySelector("#pause-card").textContent,
      dataset: {
        active: game.canvas.dataset.yetiAttackActive,
        finished: game.canvas.dataset.yetiAttackFinished,
        gameOver: game.canvas.dataset.gameOver,
        playerState: game.canvas.dataset.playerState
      }
    };
  });

  if (!result.started) throw new Error("yeti attack did not start on monster collision");
  if (!result.playerHidden) throw new Error("player sprite stayed visible during yeti attack");
  if (result.firstFrame !== 76) throw new Error(`yeti attack started on sprite ${result.firstFrame}, expected 76`);
  if (!result.finished || !result.gameOver) throw new Error("yeti attack did not finish into game over");
  if (result.finalFrame !== 81) throw new Error(`yeti attack ended on sprite ${result.finalFrame}, expected 81`);
  if (!result.messageVisible || !result.message.includes("yeti")) {
    throw new Error("yeti caught message was not visible after attack");
  }
  if (result.dataset.finished !== "1" || result.dataset.gameOver !== "1" || result.dataset.playerState !== "17") {
    throw new Error(`unexpected yeti dataset state: ${JSON.stringify(result.dataset)}`);
  }
}

async function verifyYetiChase(page) {
  const result = await page.evaluate(() => {
    const game = window.skiFreeGame;
    const dt = 1 / 60;
    game.restart();
    const chaseDistance = Number(game.canvas.dataset.yetiChaseDistancePx);
    for (const object of game.objects) game.removeSprite(object);
    game.objects = [];
    game.monster = null;
    game.input.pointerActive = false;
    game.player.x = 0;
    game.player.y = chaseDistance - 2;
    game.player.vx = 0;
    game.player.speed = 3.85;
    game.player.turnVelocity = 0;
    game.setPlayerState(0);
    game.updateCourseObjects(dt);
    const spawnedBeforeThreshold = Boolean(game.monster);

    let spawned = false;
    let spawnedAtSeconds = 0;
    let closestDistance = Number.POSITIVE_INFINITY;
    const runSprites = new Set();
    for (let tick = 0; tick < 20 * 60; tick += 1) {
      game.player.y += game.player.speed * dt * 60;
      game.updateCourseObjects(dt);
      if (game.monster && !game.yetiAttack.active && !game.yetiAttack.finished) {
        runSprites.add(game.monster.spriteId);
      }
      game.checkCollisions();

      if (game.monster) {
        if (!spawned) {
          spawned = true;
          spawnedAtSeconds = tick * dt;
        }
        closestDistance = Math.min(
          closestDistance,
          Math.hypot(game.monster.x - game.player.x, game.monster.y - game.player.y)
        );
      }
      if (game.yetiAttack.active || game.yetiAttack.finished) break;
    }

    return {
      chaseDistance,
      spawnedBeforeThreshold,
      spawned,
      spawnedAtSeconds,
      closestDistance,
      runSprites: Array.from(runSprites),
      attackStarted: game.yetiAttack.active || game.yetiAttack.finished,
      playerY: game.player.y,
      monsterY: game.monster?.y || null
    };
  });

  if (result.spawnedBeforeThreshold) {
    throw new Error(`yeti spawned before chase distance ${result.chaseDistance}`);
  }
  if (!result.spawned) throw new Error("yeti did not spawn after crossing the chase distance");
  if (result.runSprites.some((spriteId) => spriteId < 68 || spriteId > 75)) {
    throw new Error(`yeti run animation used non-run sprites: ${JSON.stringify(result.runSprites)}`);
  }
  if (!result.attackStarted) {
    throw new Error(`yeti spawned but did not catch the skier: ${JSON.stringify(result)}`);
  }
}

async function main() {
  await mkdir(reportsDir, { recursive: true });

  const server = await createServer({
    root,
    logLevel: "silent",
    server: { host: "127.0.0.1", port: 5174 }
  });
  await server.listen();
  const url = server.resolvedUrls?.local?.[0] || "http://127.0.0.1:5174/";

  const browser = await chromium.launch({
    executablePath: chromePath(),
    headless: true
  });

  const results = [];
  try {
    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        deviceScaleFactor: 1
      });
      const page = await context.newPage();
      const consoleErrors = [];
      const failedRequests = [];
      page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });
      page.on("pageerror", (error) => consoleErrors.push(error.message));
      page.on("requestfailed", (request) => failedRequests.push(request.url()));

      await page.goto(url, { waitUntil: "load" });
      const state = await inspectPage(page, viewport.name);
      if (viewport.name === "desktop") {
        await verifyControls(page);
        await verifyCourseModes(page);
        await verifyYetiChase(page);
        await verifyYetiAttack(page);
      }

      const screenshot = await page.screenshot({
        path: path.join(reportsDir, `${viewport.name}.png`),
        fullPage: false
      });
      const pixels = countNonSnowPixels(screenshot);
      if (pixels.ratio < 0.001) {
        throw new Error(`${viewport.name}: screenshot looks blank (${pixels.nonSnow} non-snow pixels)`);
      }
      if (consoleErrors.length > 0) {
        throw new Error(`${viewport.name}: console errors: ${consoleErrors.join(" | ")}`);
      }
      if (failedRequests.length > 0) {
        throw new Error(`${viewport.name}: failed requests: ${failedRequests.join(" | ")}`);
      }

      results.push({ viewport, state, pixels });
      await context.close();
    }
  } finally {
    await browser.close();
    await server.close();
  }

  await writeFile(
    path.join(reportsDir, "verify-runtime.json"),
    `${JSON.stringify({ url, results }, null, 2)}\n`,
    "utf8"
  );

  console.log(`Verified ${results.length} viewport(s). Reports written to ${path.relative(root, reportsDir)}.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
