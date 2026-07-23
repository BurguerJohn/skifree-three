import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  advanceCrashRecovery,
  classifyTouchGesture,
  downhillAccelerationFactor,
  hasCollisionRecoveryProtection,
  rankCourseResults
} from "../src/gameRules.js";
import { ASSET_IDS, PLAYER_STATE, SPRITE, STATE_TO_SPRITE, TURN_TRANSITION } from "../src/skiData.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

assert.equal(ASSET_IDS.length, 86, "all 86 original bitmap IDs must be loaded");
assert.ok(Object.values(SPRITE).every((id) => id >= 1 && id <= 86));
assert.deepEqual(STATE_TO_SPRITE.slice(0, 22), Array.from({ length: 22 }, (_, index) => index + 1));
assert.deepEqual(TURN_TRANSITION[0], [1, 4]);
assert.deepEqual(TURN_TRANSITION[13], [0x0e, 0x0f]);
assert.deepEqual(TURN_TRANSITION[21], [0x0d, 0x10]);

const bitmapFiles = (await readdir(path.join(root, "public", "assets", "bitmaps")))
  .filter((name) => name.toLowerCase().endsWith(".bmp"));
assert.equal(bitmapFiles.length, 86, "the extracted bitmap directory must be complete");

assert.equal(classifyTouchGesture(120, 4), "tap");
assert.equal(classifyTouchGesture(400, 4), "steer");
assert.equal(classifyTouchGesture(120, 40), "steer");
assert.equal(classifyTouchGesture(80, 0, true), "cancelled");

const timeRanking = rankCourseResults([{ value: 9000 }, { value: 12000 }], 10000, false);
assert.deepEqual(timeRanking.entries.map((entry) => entry.value), [9000, 10000, 12000]);
assert.equal(timeRanking.rank, 2);
const styleRanking = rankCourseResults([{ value: 20 }, { value: 50 }], 35, true);
assert.deepEqual(styleRanking.entries.map((entry) => entry.value), [50, 35, 20]);
assert.equal(styleRanking.rank, 2);

const player = {
  state: PLAYER_STATE.FALLEN,
  crashedUntil: 1.4,
  recoveryUntil: 0,
  collisionGraceTimer: 0
};
assert.equal(hasCollisionRecoveryProtection(player), true);
for (let i = 0; i < 120; i += 1) {
  player.state = advanceCrashRecovery(player, 1 / 60);
}
assert.equal(player.state, PLAYER_STATE.STRAIGHT, "a fallen player must stand up automatically");
assert.equal(player.crashedUntil, 0);
assert.equal(player.recoveryUntil, 0);
assert.ok(player.collisionGraceTimer > 0, "collision protection must outlive the get-up animation");
assert.equal(hasCollisionRecoveryProtection(player), true);
for (let i = 0; i < 60; i += 1) {
  player.state = advanceCrashRecovery(player, 1 / 60);
}
assert.equal(player.collisionGraceTimer, 0);
assert.equal(hasCollisionRecoveryProtection(player), false);

const source = await readFile(path.join(root, "src", "main.js"), "utf8");
const html = await readFile(path.join(root, "index.html"), "utf8");
const worker = await readFile(path.join(root, "worker", "index.js"), "utf8");
assert.ok(html.includes('<html lang="pt-BR">'));
for (const localizedText of ["Tempo:", "Dist.:", "Veloc.:", "Aura:", "Pausado", "Recordes", "Carregando"]) {
  assert.ok(html.includes(localizedText), `missing pt-BR interface text: ${localizedText}`);
}
assert.equal(downhillAccelerationFactor(PLAYER_STATE.STRAIGHT), 1);
assert.equal(downhillAccelerationFactor(PLAYER_STATE.LEFT_1), 0.62);
assert.equal(downhillAccelerationFactor(PLAYER_STATE.RIGHT_2), 0.28);
assert.equal(downhillAccelerationFactor(PLAYER_STATE.HARD_LEFT), 0);
for (const language of ["en-US", "pt-BR"]) {
  assert.ok(html.includes(`data-language="${language}"`), `missing language button: ${language}`);
}
for (const englishText of ["High Scores", "Freestyle", "The Yeti got you", "Failed to load"]) {
  assert.ok(source.includes(englishText), `missing English translation: ${englishText}`);
}
assert.ok(source.includes('const LANGUAGE_STORAGE_KEY = "skifree-language"'));
assert.ok(source.includes('new URL("api/country", window.location.href)'));
assert.ok(worker.includes('url.pathname === "/api/country"'));
assert.ok(worker.includes("request.cf?.country"));
for (const recoveredConstant of [
  "const RACE_START_Y = 0x0280",
  "const RACE_FINISH_Y = 0x21c0",
  "const LONG_COURSE_FINISH_Y = 0x4100",
  "const GATE_PENALTY_MS = 5000"
]) {
  assert.ok(source.includes(recoveredConstant), `missing recovered rule: ${recoveredConstant}`);
}
assert.ok(source.includes('window.addEventListener("pointerup"'));
assert.ok(source.includes('window.addEventListener("pointercancel"'));
assert.ok(source.includes('code === "ArrowLeft" || code === "KeyA" || code === "Numpad4"'));
assert.ok(source.includes('code === "ArrowRight" || code === "KeyD" || code === "Numpad6"'));
for (const halfWidth of [128, 160, 96]) {
  assert.ok(
    source.includes(`RACE_START_Y, SPRITE.START_RIGHT, SPRITE.START_LEFT, ${halfWidth}`),
    `start sign sprites must be visually swapped for lane width ${halfWidth}`
  );
}
for (const halfWidth of [128, 160, 96]) {
  assert.ok(
    source.includes(`SPRITE.FINISH_RIGHT, SPRITE.FINISH_LEFT, ${halfWidth}`),
    `finish sign sprites must be visually swapped for lane width ${halfWidth}`
  );
}
assert.ok(
  /this\.input\.pointerActive = false;\r?\n\s+this\.input\.touchPointerId = null;\r?\n\s+this\.setPlayerState\(nextState\);/.test(source),
  "handled keyboard input must reclaim control from the pointer"
);

console.log("Verified recovered rules, 86 assets, crash recovery, mobile gestures, and bilingual locale selection without a browser.");
