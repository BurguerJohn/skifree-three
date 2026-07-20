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
      effects: {
        cameraPerspective: window.skiFreeGame?.camera?.isPerspectiveCamera === true,
        cameraOrthographic: window.skiFreeGame?.camera?.isOrthographicCamera === true,
        cameraMode: canvas.dataset.cameraMode,
        cameraDepthRange: Number(canvas.dataset.cameraDepthRange || 0),
        snowParticles: window.skiFreeGame?.snow?.count || Number(canvas.dataset.snowParticles || 0),
        snowFieldWidth: window.skiFreeGame?.snow?.fieldWidth || Number(canvas.dataset.snowFieldWidth || 0),
        snowFieldHeight: window.skiFreeGame?.snow?.fieldHeight || Number(canvas.dataset.snowFieldHeight || 0),
        skiTrackMaxSegments: Number(canvas.dataset.skiTrackMaxSegments || 0)
      },
      centerPixel: Array.from(pixel)
    };
  });

  if (!state.ready) throw new Error(`${viewportName}: loader did not finish`);
  if (!state.webgl) throw new Error(`${viewportName}: WebGL context missing`);
  if (state.canvas.simulationFps !== "60") {
    throw new Error(`${viewportName}: expected 60 FPS simulation, got ${state.canvas.simulationFps}`);
  }
  if (!state.effects.cameraOrthographic || state.effects.cameraMode !== "orthographic-2d") {
    throw new Error(`${viewportName}: source-faithful orthographic camera is not active`);
  }
  if (state.effects.cameraDepthRange !== 0) {
    throw new Error(`${viewportName}: unexpected camera depth range`);
  }
  if (state.effects.snowParticles < 300
    || state.effects.snowFieldWidth < state.viewport.width
    || state.effects.snowFieldHeight < state.viewport.height) {
    throw new Error(`${viewportName}: snow field does not cover the viewport`);
  }
  if (!state.hudText.includes("Tempo:") || !state.hudText.includes("Estilo:")) {
    throw new Error(`${viewportName}: HUD text missing expected status rows`);
  }
  if (state.hud.right > state.viewport.width || state.hud.bottom > state.viewport.height) {
    throw new Error(`${viewportName}: HUD overflows viewport`);
  }

  return state;
}

async function verifyControls(page) {
  await page.keyboard.press("F3");
  await page.waitForFunction(() => document.title.startsWith("Ski pausado"), null, { timeout: 3000 });
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
  if (leftState !== "1") throw new Error(`ArrowLeft mapped to state ${leftState}, expected 1`);

  await page.evaluate(() => {
    window.skiFreeGame.restart();
    window.skiFreeGame.input.pointerActive = false;
  });
  await page.keyboard.press("ArrowRight");
  const rightState = await page.locator("#game").getAttribute("data-player-state");
  if (rightState !== "4") throw new Error(`ArrowRight mapped to state ${rightState}, expected 4`);

  const braking = await page.evaluate(() => {
    const game = window.skiFreeGame;
    game.restart();
    game.input.pointerActive = false;
    game.setPlayerState(3);
    for (let i = 0; i < 240; i += 1) game.integratePlayer(1 / 60);
    return { speed: game.player.speed, vx: game.player.vx };
  });
  if (braking.speed > 0.05 || Math.abs(braking.vx) > 0.1) {
    throw new Error(`hard turn did not brake both motion axes: ${JSON.stringify(braking)}`);
  }

  const mouseAxes = await page.evaluate(() => {
    const game = window.skiFreeGame;
    game.restart();
    const anchorX = game.viewport.width / 2;
    const anchorY = game.viewport.height / 3;
    game.input.pointerActive = true;
    game.input.pointerX = anchorX;
    game.input.pointerY = anchorY + 100;
    game.applyPointerState();
    const below = game.player.state;
    game.input.pointerX = anchorX - 100;
    game.input.pointerY = anchorY;
    game.applyPointerState();
    const left = game.player.state;
    game.input.pointerX = anchorX + 100;
    game.applyPointerState();
    const right = game.player.state;

    game.launchTrick(15);
    game.input.pointerX = anchorX;
    game.input.pointerY = anchorY + 100;
    game.applyNavigationKey({ code: "Space" });
    game.applyPointerState();
    return {
      below,
      left,
      right,
      airState: game.player.state,
      airMode: game.player.mode,
      actionTimer: game.player.actionTimer,
      manualTrickTimer: game.player.manualTrickTimer
    };
  });
  if (
    mouseAxes.below !== 0 || mouseAxes.left !== 3 || mouseAxes.right !== 6
    || mouseAxes.airState !== 18 || mouseAxes.airMode <= 0
    || mouseAxes.actionTimer <= 0 || mouseAxes.manualTrickTimer <= 0
  ) throw new Error(`mouse axes or airborne tricks are incorrect: ${JSON.stringify(mouseAxes)}`);

  await page.evaluate(() => {
    window.skiFreeGame.restart();
    window.skiFreeGame.input.pointerActive = false;
  });

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

async function verifyModernEffects(page) {
  const result = await page.evaluate(() => {
    const game = window.skiFreeGame;
    game.restart();
    game.input.pointerActive = false;

    const acrobat = game.spawnTopAcrobat();
    const acrobatOffset = acrobat.y - game.player.y;

    for (let i = 0; i < 45; i += 1) {
      game.player.y += 6;
      game.updateSkiTracks();
    }
    const groundedSegments = game.skiTracks.segments;
    game.player.actionTimer = 0.5;
    game.player.airHeight = 18;
    game.player.y += 30;
    game.updateSkiTracks();
    const airborneSegments = game.skiTracks.segments;

    game.courseModes.freestyle.active = true;
    const styleBefore = game.styleScore;
    game.addStyleScore(9, "Trick");
    game.updatePlayerShadow();
    game.syncPlayerDataset();

    return {
      acrobatOffset,
      viewportHeight: game.viewport.height,
      groundedSegments,
      airborneSegments,
      trackDrawCount: game.skiTracks.geometry.drawRange.count,
      snowCount: game.snow.count,
      snowFieldWidth: game.snow.fieldWidth,
      snowFieldHeight: game.snow.fieldHeight,
      styleBefore,
      styleAfter: game.styleScore,
      popupText: document.querySelector(".style-popup")?.textContent || "",
      popupCount: Number(game.canvas.dataset.styleEffectCount || 0),
      shadowOpacity: game.playerShadow.material.opacity
    };
  });

  if (result.acrobatOffset >= -result.viewportHeight * 0.35) {
    throw new Error(`acrobat did not spawn beyond the top edge: ${JSON.stringify(result)}`);
  }
  if (result.groundedSegments < 30 || result.trackDrawCount !== result.groundedSegments * 4) {
    throw new Error(`ski tracks were not recorded correctly: ${JSON.stringify(result)}`);
  }
  if (result.airborneSegments !== result.groundedSegments) {
    throw new Error(`ski tracks continued while airborne: ${JSON.stringify(result)}`);
  }
  if (result.snowCount < 300 || result.snowFieldWidth < 800 || result.snowFieldHeight < 600) {
    throw new Error(`snow system is undersized: ${JSON.stringify(result)}`);
  }
  if (result.styleAfter !== result.styleBefore + 9 || !result.popupText.includes("+9") || result.popupCount < 1) {
    throw new Error(`style feedback did not appear: ${JSON.stringify(result)}`);
  }
  if (!(result.shadowOpacity > 0 && result.shadowOpacity < 0.2)) {
    throw new Error(`airborne shadow did not react to jump height: ${JSON.stringify(result)}`);
  }
}

async function verifyPlayerRivals(page) {
  const result = await page.evaluate(() => {
    const game = window.skiFreeGame;
    game.restart();
    game.input.pointerActive = false;
    const rivals = game.objects.filter((object) => object.kind === "rival-player");
    const rival = rivals[0];
    const initialGap = -game.viewport.height * 0.9;
    rival.y = game.player.y + initialGap;
    for (let i = 0; i < 240; i += 1) {
      game.player.y += game.player.speed;
      game.elapsedMs += 1000 / 60;
      game.updatePlayerRival(rival, 1 / 60);
    }
    const recoveredGap = rival.y - game.player.y;
    const scoreBefore = rival.styleScore;
    game.startRivalTrick(rival, true);
    const airborneState = rival.state;
    for (let i = 0; i < 60; i += 1) game.updatePlayerRival(rival, 1 / 60);
    game.syncPlayerDataset();
    return {
      count: rivals.length,
      allNamed: rivals.every((item) => item.name && item.nameSprite && item.nameCanvas),
      initialGap,
      recoveredGap,
      speed: rival.speed,
      airborneState,
      scoreBefore,
      scoreAfter: rival.styleScore,
      tagTextHasScore: rival.nameCanvas.getContext("2d").getImageData(0, 0, rival.nameCanvas.width, rival.nameCanvas.height).data.some((value) => value !== 0),
      datasetCount: Number(game.canvas.dataset.rivalCount || 0),
      datasetScores: game.canvas.dataset.rivalScores
    };
  });

  if (result.count !== 3 || result.datasetCount !== 3 || !result.allNamed || !result.tagTextHasScore) {
    throw new Error(`player-clone rivals or nametags are missing: ${JSON.stringify(result)}`);
  }
  if (Math.abs(result.recoveredGap) >= Math.abs(result.initialGap) * 0.5) {
    throw new Error(`rival rubberband did not recover the gap: ${JSON.stringify(result)}`);
  }
  if (result.airborneState < 13 || result.scoreAfter <= result.scoreBefore || !result.datasetScores) {
    throw new Error(`rival aerial trick/style score failed: ${JSON.stringify(result)}`);
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
    game.player.x = firstGate.flagX + 120;
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

async function verifyCourseContent(page) {
  const result = await page.evaluate(() => {
    const game = window.skiFreeGame;
    game.restart();

    const modes = [game.courseModes.race, game.courseModes.treeSlalom];
    const flagChecks = modes.flatMap((mode) => mode.gates.map((gate, index) => {
      const markers = game.objects.filter((object) => (
        object.kind === 4
        && (object.spriteId === 23 || object.spriteId === 24)
        && Math.abs(object.y - gate.y) < 0.1
      ));
      const expectedLeft = index % 2 === 0;
      return {
        index,
        count: markers.length,
        spriteId: markers[0]?.spriteId || 0,
        x: markers[0]?.x || 0,
        expectedSpriteId: expectedLeft ? 23 : 24,
        expectedX: expectedLeft ? gate.left : gate.right
      };
    }));

    for (const object of game.objects) game.removeSprite(object);
    game.objects = [];
    game.spawnChunk(960);
    game.spawnChunk(1200);
    game.spawnChunk(1440);
    const spawned = {
      ramps: game.objects.filter((object) => object.kind === 14 && object.spriteId === 52).length,
      badRampSprites: game.objects.filter((object) => object.kind === 14 && object.spriteId !== 52).map((object) => object.spriteId),
      npcs: game.objects.filter((object) => object.kind === 1 && object.spriteId >= 28 && object.spriteId <= 30).length,
      towers: game.objects.filter((object) => object.kind === 18 && object.spriteId === 64).length
    };

    for (const object of game.objects) game.removeSprite(object);
    game.objects = [];
    game.spawnChunk(2160);
    game.spawnChunk(2200);
    game.spawnChunk(2280);
    const earlyFinishSigns = game.objects
      .filter((object) => object.kind === 15 && (object.spriteId === 59 || object.spriteId === 60) && object.y < game.courseModes.race.finishY)
      .map((object) => ({ spriteId: object.spriteId, x: object.x, y: object.y }));

    game.restart();
    const styleBefore = game.styleScore;
    game.addStyleScore(7);
    const styleAfterManual = game.styleScore;
    game.launchTrick(14);
    const styleAfterRamp = game.styleScore;
    game.updateHud();
    const hudStyle = document.querySelector("#style-value").textContent;

    game.restart();
    for (const object of game.objects) game.removeSprite(object);
    game.objects = [];
    game.player.x = 0;
    game.player.y = 900;
    game.player.speed = 4;
    const ramp = game.addRamp(0, 900);
    const styleBeforeRampCollision = game.styleScore;
    game.checkCollisions();
    const rampCollision = {
      hit: ramp.hit === true,
      spriteId: ramp.spriteId,
      playerMode: game.player.mode,
      playerActionTimer: game.player.actionTimer,
      playerState: game.player.state,
      styleBefore: styleBeforeRampCollision,
      styleAfter: game.styleScore
    };

    game.restart();
    game.input.pointerActive = false;
    game.player.x = game.courseModes.race.signX;
    game.player.y = 638;
    game.player.speed = 4;
    game.update(0.04);
    const firstGate = game.courseModes.race.gates[0];
    const gateStyleBefore = game.styleScore;
    const gateEffectsBefore = game.gateEffects.length;
    game.player.x = (firstGate.left + firstGate.right) / 2;
    game.player.y = firstGate.y - 2;
    game.player.speed = 4;
    game.update(0.04);
    const gatePass = {
      passed: firstGate.passed,
      missed: firstGate.missed,
      styleAwarded: firstGate.styleAwarded,
      styleBefore: gateStyleBefore,
      styleAfter: game.styleScore,
      effectCountBefore: gateEffectsBefore,
      effectCountAfter: game.gateEffects.length,
      gatePassCount: game.gatePassCount,
      lastGateStyleAward: game.lastGateStyleAward,
      datasetEffectCount: Number(game.canvas.dataset.gateEffectCount || 0),
      datasetGatePassCount: Number(game.canvas.dataset.gatePassCount || 0),
      effectPosition: game.gateEffects[0]?.group.position.toArray() || null
    };

    game.restart();
    game.input.pointerActive = false;
    game.player.x = game.courseModes.race.signX;
    game.player.y = 638;
    game.player.speed = 4;
    game.update(0.04);
    const missedGate = game.courseModes.race.gates[0];
    const wrongSideStyleBefore = game.styleScore;
    const wrongSideEffectsBefore = game.gateEffects.length;
    game.player.x = missedGate.flagX - 120;
    game.player.y = missedGate.y - 2;
    game.player.speed = 4;
    game.update(0.04);
    const gateWrongSide = {
      passed: missedGate.passed,
      missed: missedGate.missed,
      styleAwarded: missedGate.styleAwarded,
      feedbackCorrectSide: missedGate.feedbackCorrectSide,
      styleBefore: wrongSideStyleBefore,
      styleAfter: game.styleScore,
      effectCountBefore: wrongSideEffectsBefore,
      effectCountAfter: game.gateEffects.length,
      missedGates: game.courseModes.race.missedGates,
      penaltyMs: game.courseModes.race.penaltyMs,
      lastGateStyleAward: game.lastGateStyleAward,
      effectPosition: game.gateEffects[0]?.group.position.toArray() || null
    };

    game.restart();
    for (const object of game.objects) game.removeSprite(object);
    game.objects = [];
    const dog = game.addDog(0, 900);
    const dogStartX = dog.x;
    const dogFrames = [{ state: dog.state, spriteId: dog.spriteId }];
    for (let i = 0; i < 36; i += 1) {
      game.updateCourseObjects(1 / 60);
      dogFrames.push({ state: dog.state, spriteId: dog.spriteId });
    }
    const dogAfter = {
      x: dog.x,
      state: dog.state,
      spriteId: dog.spriteId,
      frames: dogFrames,
      movedSideways: Math.abs(dog.x - dogStartX) > 1
    };

    const npc = game.addNpcSkier(0, 980);
    const npcStart = { x: npc.x, y: npc.y, state: npc.state, spriteId: npc.spriteId };
    for (let i = 0; i < 12; i += 1) {
      game.updateCourseObjects(1 / 60);
    }
    const npcAfter = {
      x: npc.x,
      y: npc.y,
      state: npc.state,
      spriteId: npc.spriteId,
      moved: Math.hypot(npc.x - npcStart.x, npc.y - npcStart.y) > 1
    };

    game.render();
    return {
      flagChecks,
      spawned,
      earlyFinishSigns,
      styleBefore,
      styleAfterManual,
      styleAfterRamp,
      hudStyle,
      rampCollision,
      gatePass,
      gateWrongSide,
      dogAfter,
      npcStart,
      npcAfter
    };
  });

  const badFlag = result.flagChecks.find((check) => (
    check.count !== 1
    || check.spriteId !== check.expectedSpriteId
    || Math.abs(check.x - check.expectedX) > 0.1
  ));
  if (badFlag) throw new Error(`gate flags are not alternating correctly: ${JSON.stringify(badFlag)}`);
  if (result.spawned.ramps < 1 || result.spawned.npcs < 1 || result.spawned.towers < 1) {
    throw new Error(`expected ramp, NPC skier, and tower spawns: ${JSON.stringify(result.spawned)}`);
  }
  if (result.spawned.badRampSprites.length > 0) {
    throw new Error(`ramps used sprites other than bitmap 52: ${JSON.stringify(result.spawned)}`);
  }
  if (result.earlyFinishSigns.length > 0) {
    throw new Error(`finish signs spawned before the real finish: ${JSON.stringify(result.earlyFinishSigns)}`);
  }
  if (result.styleAfterManual !== result.styleBefore + 7) {
    throw new Error(`style points did not count outside freestyle: ${JSON.stringify(result)}`);
  }
  if (result.styleAfterRamp <= result.styleAfterManual) {
    throw new Error(`ramp trick did not add style points: ${JSON.stringify(result)}`);
  }
  if (Number(result.hudStyle) !== Math.floor(result.styleAfterRamp)) {
    throw new Error(`style HUD did not update: ${JSON.stringify(result)}`);
  }
  if (!result.rampCollision.hit || result.rampCollision.playerMode !== 1 || result.rampCollision.playerActionTimer <= 0 || result.rampCollision.styleAfter <= result.rampCollision.styleBefore) {
    throw new Error(`ramp collision did not launch a trick/style event: ${JSON.stringify(result.rampCollision)}`);
  }
  if (result.rampCollision.spriteId !== 52) {
    throw new Error(`ramp collision used wrong sprite: ${JSON.stringify(result.rampCollision)}`);
  }
  if (
    !result.gatePass.passed
    || result.gatePass.missed
    || !result.gatePass.styleAwarded
    || result.gatePass.lastGateStyleAward <= 0
    || result.gatePass.styleAfter !== result.gatePass.styleBefore + result.gatePass.lastGateStyleAward
    || result.gatePass.effectCountAfter <= result.gatePass.effectCountBefore
    || result.gatePass.datasetEffectCount !== result.gatePass.effectCountAfter
    || result.gatePass.datasetGatePassCount < 1
    || !result.gatePass.effectPosition
  ) {
    throw new Error(`correct gate side did not award style/effect: ${JSON.stringify(result.gatePass)}`);
  }
  if (
    result.gateWrongSide.passed
    || !result.gateWrongSide.missed
    || !result.gateWrongSide.styleAwarded
    || result.gateWrongSide.feedbackCorrectSide !== false
    || result.gateWrongSide.lastGateStyleAward <= 0
    || result.gateWrongSide.styleAfter !== result.gateWrongSide.styleBefore + result.gateWrongSide.lastGateStyleAward
    || result.gateWrongSide.effectCountAfter <= result.gateWrongSide.effectCountBefore
    || result.gateWrongSide.missedGates !== 1
    || result.gateWrongSide.penaltyMs !== 5000
    || !result.gateWrongSide.effectPosition
  ) {
    throw new Error(`wrong gate side did not award style/effect while keeping penalty: ${JSON.stringify(result.gateWrongSide)}`);
  }
  const dogWalkingFrames = result.dogAfter.frames.filter((frame) => frame.state === 0x1b || frame.state === 0x1c);
  const dogUsedAlertWhileWalking = dogWalkingFrames.some((frame) => frame.spriteId === 35 || frame.spriteId === 36);
  const dogWalkedWithStateSprites = dogWalkingFrames.some((frame) => frame.state === 0x1b && frame.spriteId === 33)
    && dogWalkingFrames.some((frame) => frame.state === 0x1c && frame.spriteId === 34);
  if (!result.dogAfter.movedSideways || dogUsedAlertWhileWalking || !dogWalkedWithStateSprites) {
    throw new Error(`dog did not use source walking states/sprites: ${JSON.stringify(result.dogAfter)}`);
  }
  const npcSpriteByState = { 22: 28, 23: 29, 24: 30 };
  if (!result.npcAfter.moved || result.npcAfter.state === result.npcStart.state || result.npcAfter.spriteId !== npcSpriteByState[result.npcAfter.state]) {
    throw new Error(`NPC skier did not move/animate: ${JSON.stringify({ before: result.npcStart, after: result.npcAfter })}`);
  }

  await page.evaluate(() => {
    const game = window.skiFreeGame;
    game.restart();
    game.input.pointerActive = false;
    game.player.x = game.courseModes.race.signX;
    game.player.y = 638;
    game.player.speed = 4;
    game.update(0.04);
    const firstGate = game.courseModes.race.gates[0];
    game.player.x = (firstGate.left + firstGate.right) / 2;
    game.player.y = firstGate.y - 2;
    game.player.speed = 4;
    game.update(0.04);
    game.updateCamera();
    game.updateHud();
    game.render();
  });
  await page.screenshot({
    path: path.join(reportsDir, "gate-pass-effect.png"),
    fullPage: false
  });

  await page.evaluate(() => {
    const game = window.skiFreeGame;
    game.restart();
    for (const object of game.objects) game.removeSprite(object);
    game.objects = [];
    game.player.x = 0;
    game.player.y = 1120;
    game.player.speed = 0;
    game.spawnChunk(960);
    game.spawnChunk(1200);
    game.spawnChunk(1440);
    game.updateCamera();
    game.updateHud();
    game.render();
  });
  await page.screenshot({
    path: path.join(reportsDir, "course-objects.png"),
    fullPage: false
  });
}

async function verifyRecoveredCourseContent(page) {
  const result = await page.evaluate(() => {
    const game = window.skiFreeGame;
    const removeAllObjects = () => {
      for (const object of game.objects) game.removeSprite(object);
      game.objects = [];
    };

    game.restart();
    game.input.pointerActive = false;
    const race = game.courseModes.race;
    const tree = game.courseModes.treeSlalom;
    const alphaAt = (spriteId, x, y) => {
      const canvas = game.assets.textures.get(spriteId).image;
      return canvas.getContext("2d").getImageData(x, y, 1, 1).data[3];
    };
    const courseLayout = {
      raceGateCount: race.gates.length,
      treeGateCount: tree.gates.length,
      raceFirst: { y: race.gates[0].y, x: race.gates[0].flagX, spriteId: race.gates[0].spriteId },
      raceSecond: { y: race.gates[1].y, x: race.gates[1].flagX, spriteId: race.gates[1].spriteId },
      raceLastY: race.gates.at(-1).y,
      treeFirst: { y: tree.gates[0].y, x: tree.gates[0].flagX, spriteId: tree.gates[0].spriteId },
      treeSecond: { y: tree.gates[1].y, x: tree.gates[1].flagX, spriteId: tree.gates[1].spriteId },
      treeLastY: tree.gates.at(-1).y,
      gateMarkersValid: [...race.gates, ...tree.gates].every((gate) => (
        gate.marker?.kind === 11
        && gate.marker.spriteId === gate.spriteId
        && gate.marker.x === gate.flagX
        && gate.marker.y === gate.y
      )),
      introSprites: [53, 54, 55, 56].map((spriteId) => game.objects.filter((object) => object.spriteId === spriteId).length),
      modeSigns: [61, 62, 63].map((spriteId) => game.objects.filter((object) => object.spriteId === spriteId).length),
      startLeft: game.objects.filter((object) => object.spriteId === 57 && object.y === 0x280).length,
      startRight: game.objects.filter((object) => object.spriteId === 58 && object.y === 0x280).length,
      liftTowers: game.objects.filter((object) => object.spriteId === 64).length,
      liftChairs: game.objects.filter((object) => object.kind === 4 && object.spriteId >= 65 && object.spriteId <= 67).length,
      anchoredAtBottom: game.player.sprite.center.y === 0 && game.boundsFor(game.player).bottom === game.player.y,
      whiteMaskTransparent: alphaAt(23, 5, 10) === 0,
      blackFlagOutlineOpaque: alphaAt(23, 0, 10) === 255,
      coloredRampCornerOpaque: alphaAt(52, 0, 0) === 255
    };

    game.player.x = race.signX;
    game.player.y = 638;
    game.player.speed = 4;
    game.update(0.04);
    const passGate = race.gates[0];
    const styleBeforePass = game.styleScore;
    game.player.x = passGate.flagX - 20;
    game.player.y = passGate.y - 2;
    game.player.speed = 4;
    game.update(0.04);
    const gatePass = {
      passed: passGate.passed,
      missed: passGate.missed,
      markerSprite: passGate.marker.spriteId,
      styleBefore: styleBeforePass,
      styleAfter: game.styleScore,
      passCount: game.gatePassCount
    };

    game.restart();
    game.input.pointerActive = false;
    game.player.x = game.courseModes.race.signX;
    game.player.y = 638;
    game.player.speed = 4;
    game.update(0.04);
    const missGate = game.courseModes.race.gates[0];
    game.player.x = missGate.flagX + 20;
    game.player.y = missGate.y - 2;
    game.player.speed = 4;
    game.update(0.04);
    const gateMiss = {
      passed: missGate.passed,
      missed: missGate.missed,
      markerSprite: missGate.marker.spriteId,
      missedGates: game.courseModes.race.missedGates,
      penaltyMs: game.courseModes.race.penaltyMs
    };

    game.restart();
    game.addStyleScore(7);
    const outsideFreestyleStyle = game.styleScore;
    game.player.x = 0;
    game.player.y = 638;
    game.player.speed = 4;
    game.update(0.04);
    game.addStyleScore(7);
    const insideFreestyleStyle = game.styleScore;

    game.restart();
    removeAllObjects();
    game.player.x = 0;
    game.player.y = 900;
    game.player.speed = 4;
    const ramp = game.addRamp(0, 900);
    game.checkCollisions();
    const rampCollision = {
      kind: ramp.kind,
      spriteId: ramp.spriteId,
      hit: ramp.hit === true,
      playerMode: game.player.mode,
      actionTimer: game.player.actionTimer
    };

    game.restart();
    removeAllObjects();
    for (let i = 0; i < 1000; i += 1) game.spawnWeightedObject(800, 1000 + i);
    const sourceKinds = new Set([1, 2, 10, 12, 13, 14, 15]);
    const distribution = {
      invalidKinds: game.objects.filter((object) => !sourceKinds.has(object.kind)).map((object) => object.kind),
      randomFires: game.objects.filter((object) => object.kind === 9).length,
      randomPatches: game.objects.filter((object) => object.spriteId === 82).length,
      ramps: game.objects.filter((object) => object.kind === 15 && object.spriteId === 52).length,
      trees: game.objects.filter((object) => object.kind === 12 && object.spriteId >= 49 && object.spriteId <= 51).length
    };

    game.restart();
    removeAllObjects();
    const dog = game.addDog(0, 900);
    game.setObjectState(dog, 0x1e);
    const originalInt = game.rng.int.bind(game.rng);
    game.rng.int = () => 0;
    game.advanceDogState(dog);
    game.rng.int = originalInt;
    const dogPatch = game.objects.some((object) => object.kind === 16 && object.spriteId === 82);

    const deadTree = game.addObject({ kind: 12, spriteId: 50, x: 0, y: 900, collidable: true });
    game.player.mode = 1;
    game.player.airHeight = 1;
    game.crashInto(deadTree);
    const deadTreeFire = deadTree.kind === 9 && deadTree.spriteId === 83;
    const fireFrames = [deadTree.spriteId];
    for (let i = 0; i < 3; i += 1) {
      game.updateCourseObjects(0.13);
      fireFrames.push(deadTree.spriteId);
    }

    game.restart();
    removeAllObjects();
    game.player.x = 0;
    game.player.y = 900;
    game.player.speed = 4;
    const npc = game.addNpcSkier(0, 900);
    game.checkCollisions();
    const npcCrash = npc.state === 0x19 && npc.spriteId === 31 && game.player.state === 11;

    game.restart();
    const occupiedChair = game.objects.find((object) => object.kind === 4 && object.state === 0x27);
    const savedInt = game.rng.int.bind(game.rng);
    game.rng.int = () => 0;
    game.updateLiftChair(occupiedChair, 0);
    game.rng.int = savedInt;
    const liftRelease = occupiedChair.state === 0x28
      && occupiedChair.spriteId === 66
      && game.objects.some((object) => object.kind === 3 && object.state === 0x21 && object.spriteId === 39);

    game.render();
    return {
      courseLayout,
      gatePass,
      gateMiss,
      outsideFreestyleStyle,
      insideFreestyleStyle,
      rampCollision,
      distribution,
      dogPatch,
      deadTreeFire,
      fireFrames,
      npcCrash,
      liftRelease
    };
  });

  const layout = result.courseLayout;
  if (
    layout.raceGateCount !== 24 || layout.treeGateCount !== 39
    || JSON.stringify(layout.raceFirst) !== JSON.stringify({ y: 0x3c0, x: -0x1f0, spriteId: 23 })
    || JSON.stringify(layout.raceSecond) !== JSON.stringify({ y: 0x500, x: -0x190, spriteId: 24 })
    || layout.raceLastY !== 0x2080
    || JSON.stringify(layout.treeFirst) !== JSON.stringify({ y: 0x410, x: 0x190, spriteId: 23 })
    || JSON.stringify(layout.treeSecond) !== JSON.stringify({ y: 0x5a0, x: 0x1b0, spriteId: 24 })
    || layout.treeLastY !== 0x3f70
  ) throw new Error(`course descriptor layout diverged from SKI.EXE: ${JSON.stringify(layout)}`);
  if (!layout.gateMarkersValid || layout.introSprites.some((count) => count !== 1) || layout.modeSigns.some((count) => count !== 1) || layout.startLeft !== 3 || layout.startRight !== 3) {
    throw new Error(`course sprites are missing or duplicated: ${JSON.stringify(layout)}`);
  }
  if (
    layout.liftTowers !== 13 || layout.liftChairs !== 24 || !layout.anchoredAtBottom
    || !layout.whiteMaskTransparent || !layout.blackFlagOutlineOpaque || !layout.coloredRampCornerOpaque
  ) {
    throw new Error(`lift or sprite anchoring is incorrect: ${JSON.stringify(layout)}`);
  }
  if (!result.gatePass.passed || result.gatePass.missed || result.gatePass.markerSprite !== 25 || result.gatePass.styleAfter !== result.gatePass.styleBefore + 12 || result.gatePass.passCount !== 1) {
    throw new Error(`red gate did not pass on its source-correct side: ${JSON.stringify(result.gatePass)}`);
  }
  if (result.gateMiss.passed || !result.gateMiss.missed || result.gateMiss.markerSprite !== 26 || result.gateMiss.missedGates !== 1 || result.gateMiss.penaltyMs !== 5000) {
    throw new Error(`red gate miss/result sprite is incorrect: ${JSON.stringify(result.gateMiss)}`);
  }
  if (result.outsideFreestyleStyle !== 0 || result.insideFreestyleStyle !== 7) {
    throw new Error(`style score escaped freestyle mode: ${JSON.stringify(result)}`);
  }
  if (result.rampCollision.kind !== 15 || result.rampCollision.spriteId !== 52 || !result.rampCollision.hit || result.rampCollision.playerMode <= 0 || result.rampCollision.actionTimer <= 0) {
    throw new Error(`rainbow ramp behavior is incorrect: ${JSON.stringify(result.rampCollision)}`);
  }
  if (result.distribution.invalidKinds.length || result.distribution.randomFires || result.distribution.randomPatches || result.distribution.ramps < 1 || result.distribution.trees < 1) {
    throw new Error(`random spawn table diverged from the recovered selector: ${JSON.stringify(result.distribution)}`);
  }
  if (!result.dogPatch || !result.deadTreeFire || JSON.stringify(result.fireFrames) !== JSON.stringify([83, 84, 85, 84]) || !result.npcCrash || !result.liftRelease) {
    throw new Error(`derived animated objects are missing: ${JSON.stringify({ dogPatch: result.dogPatch, deadTreeFire: result.deadTreeFire, fireFrames: result.fireFrames, npcCrash: result.npcCrash, liftRelease: result.liftRelease })}`);
  }

  await page.evaluate(() => {
    const game = window.skiFreeGame;
    game.restart();
    game.input.pointerActive = false;
    game.player.x = game.courseModes.race.gates[0].flagX - 20;
    game.player.y = game.courseModes.race.gates[0].y - 2;
    game.player.speed = 4;
    game.courseModes.race.active = true;
    game.update(0.04);
    game.updateCamera();
    game.updateHud();
    game.render();
  });
  await page.screenshot({ path: path.join(reportsDir, "gate-result.png"), fullPage: false });
}

async function verifySkiTracks(page) {
  const result = await page.evaluate(() => {
    const game = window.skiFreeGame;
    game.restart();
    for (const object of game.objects) game.removeSprite(object);
    game.objects = [];
    game.nextSpawnY = Number.POSITIVE_INFINITY;
    game.monster = null;
    game.input.pointerActive = false;
    game.player.x = 0;
    game.player.y = 0;
    game.player.vx = 0;
    game.player.speed = 3.85;
    game.player.turnVelocity = 0;
    game.setPlayerState(0);

    for (let tick = 0; tick < 90; tick += 1) {
      game.update(1 / 60);
    }
    game.render();

    return {
      segments: game.skiTracks.segmentCount,
      drawCount: game.skiTracks.geometry.drawRange.count,
      datasetSegments: Number(game.canvas.dataset.skiTrackSegments || 0),
      objectCount: game.objects.length,
      trailCount: game.trails.length,
      spriteCount: game.scene.children.filter((child) => child.isSprite).length,
      firstFloats: Array.from(game.skiTracks.positions.slice(0, 18))
    };
  });
  await page.screenshot({
    path: path.join(reportsDir, "ski-tracks.png"),
    fullPage: false
  });

  if (result.segments < 30) {
    throw new Error(`ski tracks did not accumulate enough segments: ${JSON.stringify(result)}`);
  }
  if (result.drawCount !== result.segments * 12) {
    throw new Error(`ski track draw range mismatch: ${JSON.stringify(result)}`);
  }
  if (result.datasetSegments !== result.segments) {
    throw new Error(`ski track dataset mismatch: ${JSON.stringify(result)}`);
  }
  if (result.firstFloats.every((value) => value === 0)) {
    throw new Error("ski track geometry was not populated");
  }
  if (result.objectCount !== 0 || result.trailCount !== 0 || result.spriteCount !== 1) {
    throw new Error(`unexpected extra sprites during ski track test: ${JSON.stringify(result)}`);
  }
}

async function verifyYetiAttack(page) {
  const result = await page.evaluate(() => {
    const game = window.skiFreeGame;
    game.restart();
    game.player.x = 0;
    game.player.y = 2200;
    game.player.speed = 0;
    game.monster = game.addObject({
      kind: 5,
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
        await verifyPlayerRivals(page);
        await verifyModernEffects(page);
        await verifyCourseModes(page);
        await verifyRecoveredCourseContent(page);
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
