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
  ANIMATED: 1,
  DOG: 2,
  MONSTER: 3,
  MARKER: 4,
  TREE: 10,
  ROCK: 11,
  STUMP: 12,
  MOGUL: 13,
  RAMP: 14,
  SIGN: 15,
  FIRE: 16,
  PATCH: 17,
  TOWER: 18
});

export const SPRITE = Object.freeze({
  FLAG_RED: 23,
  FLAG_BLUE: 24,
  NPC_SKIER_1: 28,
  NPC_SKIER_2: 29,
  NPC_SKIER_3: 30,
  DOG_LEFT: 33,
  DOG_RIGHT: 34,
  DOG_WOOF_LEFT: 35,
  DOG_WOOF_RIGHT: 36,
  ROCK: 45,
  STUMP: 46,
  TRACK_LEFT: 47,
  TRACK_RIGHT: 48,
  RAMP_1: 52,
  RAMP_2: 52,
  TREE_SMALL: 49,
  TREE_DEAD: 50,
  TREE_LARGE: 51,
  RAINBOW: 52,
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
  YELLOW_PATCH: 82,
  FIRE_FIRST: 83
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

export const PLAYER_MOTION = {
  0: { targetVx: 0, targetSpeed: 3.85, turn: 7.5, accel: 2.4 },
  1: { targetVx: -1.15, targetSpeed: 3.75, turn: 7.5, accel: 2.1 },
  2: { targetVx: -2.1, targetSpeed: 3.55, turn: 7.2, accel: 1.9 },
  3: { targetVx: -3.0, targetSpeed: 3.25, turn: 7.0, accel: 1.7 },
  4: { targetVx: 1.15, targetSpeed: 3.75, turn: 7.5, accel: 2.1 },
  5: { targetVx: 2.1, targetSpeed: 3.55, turn: 7.2, accel: 1.9 },
  6: { targetVx: 3.0, targetSpeed: 3.25, turn: 7.0, accel: 1.7 },
  7: { targetVx: -3.6, targetSpeed: 3.05, turn: 8.0, accel: 1.5 },
  8: { targetVx: 3.6, targetSpeed: 3.05, turn: 8.0, accel: 1.5 },
  9: { targetVx: -1.7, targetSpeed: 4.2, turn: 4.2, accel: 2.7 },
  10: { targetVx: 1.7, targetSpeed: 4.2, turn: 4.2, accel: 2.7 },
  11: { targetVx: 0, targetSpeed: 0, turn: 6.0, accel: 5.0 },
  12: { targetVx: 0, targetSpeed: 1.25, turn: 4.8, accel: 3.6 },
  13: { targetVx: 0, targetSpeed: 4.45, turn: 2.4, accel: 2.2 },
  14: { targetVx: -1.25, targetSpeed: 4.35, turn: 2.7, accel: 2.1 },
  15: { targetVx: 1.25, targetSpeed: 4.35, turn: 2.7, accel: 2.1 },
  16: { targetVx: 0, targetSpeed: 4.15, turn: 2.5, accel: 2.0 },
  17: { targetVx: 0, targetSpeed: 0.35, turn: 3.0, accel: 4.0 },
  18: { targetVx: -0.8, targetSpeed: 4.5, turn: 2.1, accel: 2.0 },
  19: { targetVx: 0, targetSpeed: 4.55, turn: 2.0, accel: 2.0 },
  20: { targetVx: -1.1, targetSpeed: 4.45, turn: 2.0, accel: 1.9 },
  21: { targetVx: 1.1, targetSpeed: 4.45, turn: 2.0, accel: 1.9 }
};

export const ASSET_IDS = Array.from({ length: 86 }, (_, index) => index + 1);

export function spriteForState(state) {
  return STATE_TO_SPRITE[state] || STATE_TO_SPRITE[0];
}
