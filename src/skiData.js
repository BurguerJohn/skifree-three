// Tables are recovered from SKI.EXE data segment offsets documented in
// docs/KEY_TABLES.md and docs/OBJECTS_AND_SPAWNS.md.

export const STATE_TO_SPRITE = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
  38, 39, 40, 41, 42, 43, 44, 65, 66, 67, 68, 69, 70, 71, 72, 73,
  74, 75, 76, 77, 78, 79, 80, 81, 83, 84, 85, 84
];

export const KIND_TO_STATE = [
  6, 0x16, 0x1b, 0x1f, 0x27, 0x2a, 0x2a, 0x2a, 0x2a, 0x38,
  1, 4, 2, 0, 3, 1, 7, 2, 0, 5
];

export const TURN_TRANSITION = [
  [1, 4],
  [2, 0],
  [3, 1],
  [7, 2],
  [0, 5],
  [4, 6],
  [5, 8],
  [3, 2],
  [5, 6],
  [9, 2],
  [5, 0x0a],
  [3, 6],
  [3, 6],
  [0x0e, 0x0f],
  [0x10, 0x0d],
  [0x0d, 0x10],
  [0x0f, 0x0e],
  [0x0e, 0x0f],
  [0x14, 0x15],
  [0x14, 0x15],
  [0x10, 0x0d],
  [0x0d, 0x10]
];

export const OBJECT_KIND = Object.freeze({
  PLAYER: 0,
  NPC_SKIER: 1,
  ANIMATED: 1,
  DOG: 2,
  ACROBAT: 3,
  LIFT_CHAIR: 4,
  YETI: 5,
  MONSTER: 5,
  FIRE: 9,
  MOGUL: 10,
  MARKER: 11,
  TREE: 12,
  TOWER: 12,
  OBSTACLE: 13,
  ROCK: 13,
  STUMP: 13,
  BUMP: 14,
  RAMP: 15,
  SIGN: 16,
  PATCH: 16,
  NONE: 17
});

export const SPRITE = Object.freeze({
  FLAG_RED: 23,
  FLAG_BLUE: 24,
  GATE_PASSED: 25,
  GATE_MISSED: 26,
  MOGULS: 27,
  NPC_SKIER_1: 28,
  NPC_SKIER_2: 29,
  NPC_SKIER_3: 30,
  NPC_CRASH_1: 31,
  NPC_CRASH_2: 32,
  DOG_LEFT: 33,
  DOG_RIGHT: 34,
  DOG_WOOF_LEFT: 35,
  DOG_WOOF_RIGHT: 36,
  ACROBAT_FIRST: 37,
  ACROBAT_LAST: 44,
  ROCK: 45,
  STUMP: 46,
  BUMP_SMALL: 47,
  BUMP_LARGE: 48,
  TREE_SMALL: 49,
  TREE_DEAD: 50,
  TREE_LARGE: 51,
  RAMP: 52,
  RAMP_1: 52,
  RAMP_2: 52,
  TITLE: 53,
  VERSION: 54,
  HELP_MOUSE: 55,
  HELP_KEYS: 56,
  START_LEFT: 57,
  START_RIGHT: 58,
  FINISH_LEFT: 59,
  FINISH_RIGHT: 60,
  SLALOM_SIGN: 61,
  TREE_SLALOM_SIGN: 62,
  FREESTYLE_SIGN: 63,
  SKI_LIFT_TOWER: 64,
  SKI_LIFT_CHAIR_1: 65,
  SKI_LIFT_CHAIR_2: 66,
  SKI_LIFT_CHAIR_3: 67,
  YETI_FIRST: 68,
  YETI_LAST: 81,
  YELLOW_PATCH: 82,
  FIRE_FIRST: 83,
  FIRE_LAST: 85,
  BROKEN_STUMP: 86
});

export const PLAYER_STATE = Object.freeze({
  STRAIGHT: 0,
  LEFT_1: 1,
  LEFT_2: 2,
  LEFT_3: 3,
  RIGHT_1: 4,
  RIGHT_2: 5,
  RIGHT_3: 6,
  HARD_LEFT: 7,
  HARD_RIGHT: 8,
  JUMP_LEFT: 9,
  JUMP_RIGHT: 10,
  CRASHED: 11,
  RECOVERING: 12,
  TRICK: 0x0d,
  TRICK_LEFT: 0x0e,
  TRICK_RIGHT: 0x0f,
  TRICK_BACK: 0x10,
  FALLEN: 0x11,
  SPIN: 0x12,
  SPIN_BACK: 0x13,
  FLIP_LEFT: 0x14,
  FLIP_RIGHT: 0x15
});

// The target speeds below are the recovered max_b values divided by four.
// That keeps the DOS/Win16 motion ratios while fitting the 60 Hz web loop.
export const PLAYER_MOTION = {
  0: { targetVx: 0, targetSpeed: 4, turn: 7.5, accel: 2.4 },
  1: { vxRatio: -0.5, targetSpeed: 3, turn: 7.5, accel: 2.1 },
  2: { vxRatio: -2, targetSpeed: 1.5, turn: 7.2, accel: 2.3 },
  3: { vxRatio: -4, targetSpeed: 0, turn: 7, accel: 3.2 },
  4: { vxRatio: 0.5, targetSpeed: 3, turn: 7.5, accel: 2.1 },
  5: { vxRatio: 2, targetSpeed: 1.5, turn: 7.2, accel: 2.3 },
  6: { vxRatio: 4, targetSpeed: 0, turn: 7, accel: 3.2 },
  7: { vxRatio: -4, targetSpeed: 0, turn: 8, accel: 3.2 },
  8: { vxRatio: 4, targetSpeed: 0, turn: 8, accel: 3.2 },
  9: { targetVx: 0, targetSpeed: 0, turn: 4.2, accel: 2.7 },
  10: { targetVx: 0, targetSpeed: 0, turn: 4.2, accel: 2.7 },
  11: { targetVx: 0, targetSpeed: 0, turn: 6.0, accel: 5.0 },
  12: { targetVx: 0, targetSpeed: 0, turn: 4.8, accel: 5 },
  13: { targetVx: 0, targetSpeed: 6, turn: 2.4, accel: 2.2 },
  14: { targetVx: 0, targetSpeed: 5.5, turn: 2.7, accel: 2.1 },
  15: { targetVx: 0, targetSpeed: 5.5, turn: 2.7, accel: 2.1 },
  16: { targetVx: 0, targetSpeed: 5, turn: 2.5, accel: 2 },
  17: { targetVx: 0, targetSpeed: 6, turn: 3, accel: 4 },
  18: { targetVx: 0, targetSpeed: 5, turn: 2.1, accel: 2 },
  19: { targetVx: 0, targetSpeed: 5, turn: 2, accel: 2 },
  20: { targetVx: 0, targetSpeed: 5.5, turn: 2, accel: 1.9 },
  21: { targetVx: 0, targetSpeed: 5.5, turn: 2, accel: 1.9 }
};

export const ASSET_IDS = Array.from({ length: 86 }, (_, index) => index + 1);

export function spriteForState(state) {
  return STATE_TO_SPRITE[state] || STATE_TO_SPRITE[0];
}
