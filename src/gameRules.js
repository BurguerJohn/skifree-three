import { PLAYER_STATE } from "./skiData.js";

export const TOUCH_TAP_MAX_MS = 260;
export const TOUCH_TAP_MAX_DISTANCE = 20;

export function classifyTouchGesture(durationMs, distance, cancelled = false) {
  if (cancelled) return "cancelled";
  return durationMs <= TOUCH_TAP_MAX_MS && distance <= TOUCH_TAP_MAX_DISTANCE
    ? "tap"
    : "steer";
}

export function advanceCrashRecovery(player, dt) {
  let state = player.state;
  player.collisionGraceTimer = Math.max(0, (player.collisionGraceTimer || 0) - dt);

  if (player.crashedUntil > 0) {
    player.crashedUntil = Math.max(0, player.crashedUntil - dt);
    if (player.crashedUntil === 0 && (state === PLAYER_STATE.CRASHED || state === PLAYER_STATE.FALLEN)) {
      player.recoveryUntil = 0.55;
      player.collisionGraceTimer = 1.15;
      state = PLAYER_STATE.RECOVERING;
    }
  }

  if (player.recoveryUntil > 0) {
    player.recoveryUntil = Math.max(0, player.recoveryUntil - dt);
    if (player.recoveryUntil === 0 && state === PLAYER_STATE.RECOVERING) {
      state = PLAYER_STATE.STRAIGHT;
    }
  }

  return state;
}

export function hasCollisionRecoveryProtection(player) {
  return player.state === PLAYER_STATE.CRASHED
    || player.state === PLAYER_STATE.FALLEN
    || player.state === PLAYER_STATE.RECOVERING
    || player.collisionGraceTimer > 0;
}

export function rankCourseResults(existing, value, higherWins, limit = 10) {
  const entry = { value, current: true };
  const ranked = existing
    .filter((item) => Number.isFinite(item.value))
    .map((item) => ({ value: item.value, current: false }))
    .concat(entry)
    .sort((a, b) => higherWins ? b.value - a.value : a.value - b.value)
    .slice(0, limit);
  return {
    entries: ranked,
    rank: ranked.indexOf(entry) >= 0 ? ranked.indexOf(entry) + 1 : -1
  };
}
