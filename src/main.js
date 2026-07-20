import * as THREE from "three";
import {
  ASSET_IDS,
  OBJECT_KIND,
  PLAYER_MOTION,
  PLAYER_STATE,
  SPRITE,
  TURN_TRANSITION,
  spriteForState
} from "./skiData.js";
import {
  advanceCrashRecovery,
  classifyTouchGesture,
  hasCollisionRecoveryProtection,
  rankCourseResults
} from "./gameRules.js";

const SIMULATION_FPS = 60;
const TICK_MS = 1000 / SIMULATION_FPS;
const PIXELS_PER_METER = 16;
const MAX_FRAME_SECONDS = 0.08;
const COURSE_STEP = 60;
const CAMERA_DEPTH_RANGE = 0;
const CAMERA_PLAYER_DEPTH = 0;
const YETI_CHASE_DISTANCE_METERS = 2000;
const CHASE_DISTANCE = YETI_CHASE_DISTANCE_METERS * PIXELS_PER_METER;
const YETI_SPAWN_BACK_VIEWPORT_RATIO = 0.45;
const YETI_SPAWN_SIDE_RANGE = 120;
const YETI_MIN_SPEED = 4.8;
const YETI_MAX_SPEED = 6.25;
const YETI_SPEED_ADVANTAGE = 0.95;
const YETI_DISTANCE_BOOST_RANGE = 360;
const YETI_RUN_FRAME_SECONDS = 0.13;
const YETI_RUN_FRAMES = Object.freeze({
  down: [68, 69],
  right: [70, 71],
  left: [72, 73],
  up: [74, 75]
});
const MOGUL_JUMP_SECONDS = 0.42;
const KEY_TRICK_SECONDS = 0.45;
const CLICK_TRICK_SECONDS = 0.65;
const RAMP_TRICK_SECONDS = 0.82;
const DOG_STATE_SECONDS = 0.16;
const DOG_STATES = Object.freeze({
  WALK_A: 0x1b,
  WALK_B: 0x1c,
  ALERT: 0x1d,
  BARK: 0x1e
});
const NPC_SKIER_STATES = [0x16, 0x17, 0x18];
const NPC_SKIER_MOTION = Object.freeze({
  [0x16]: { targetVx: 0, targetSpeed: 0.25 },
  [0x17]: { targetVx: -0.5, targetSpeed: 0.25 },
  [0x18]: { targetVx: 0.5, targetSpeed: 0.25 }
});
const ACROBAT_STATE_SECONDS = 0.12;
const YETI_ATTACK_SECONDS = 1.7;
const YETI_ATTACK_FRAME_SECONDS = 0.2;
const YETI_ATTACK_FRAMES = [76, 77, 78, 79, 80, 81];
const RACE_START_Y = 0x0280;
const RACE_FINISH_Y = 0x21c0;
const LONG_COURSE_FINISH_Y = 0x4100;
const GATE_PENALTY_MS = 5000;
const RACE_GATE_START_Y = 0x03c0;
const RACE_GATE_STEP_Y = 0x0140;
const TREE_GATE_START_Y = 0x0410;
const TREE_GATE_STEP_Y = 0x0190;
const LIFT_MIN_Y = -0x0400;
const LIFT_MAX_Y = 0x5c00;
const LIFT_STEP_Y = 0x0800;
const GATE_STYLE_POINTS = 12;
const SNOW_PARTICLE_COUNT = 360;
const SKI_TRACK_MAX_SEGMENTS = 900;
const SKI_TRACK_SAMPLE_DISTANCE = 5;
const SKI_TRACK_SEPARATION = 7;
const RIVAL_KIND = "rival-player";
const RIVAL_NAMES = ["RaposaNeve", "Mika", "ByteGelo", "ÁsAlpino"];
const RIVAL_COUNT = 3;

const COURSE_LANES = Object.freeze({
  race: {
    label: "Corrida",
    startMinX: -0x0240,
    startMaxX: -0x0140,
    signX: -448,
    finishY: RACE_FINISH_Y
  },
  freestyle: {
    label: "Estilo livre",
    startMinX: -0x00a0,
    startMaxX: 0x00a0,
    signX: 0,
    finishY: LONG_COURSE_FINISH_Y
  },
  treeSlalom: {
    label: "Slalom entre árvores",
    startMinX: 0x0140,
    startMaxX: 0x0200,
    signX: 416,
    finishY: LONG_COURSE_FINISH_Y
  }
});

class SeededRandom {
  constructor(seed = Date.now()) {
    this.state = seed >>> 0;
  }

  step() {
    // Microsoft C/Win16 LCG recovered from SKI.EXE internal ordinal 5.
    this.state = (Math.imul(this.state, 0x000343fd) + 0x00269ec3) >>> 0;
    return (this.state >>> 16) & 0x7fff;
  }

  next() {
    return this.step() / 0x8000;
  }

  range(min, max) {
    return min + (max - min) * this.next();
  }

  int(min, max) {
    return min + (this.step() % (max - min + 1));
  }

  chance(probability) {
    return this.next() < probability;
  }

  weighted(entries) {
    const total = entries.reduce((sum, entry) => sum + entry.weight, 0);
    let roll = this.range(0, total);
    for (const entry of entries) {
      roll -= entry.weight;
      if (roll <= 0) return entry.value;
    }
    return entries[entries.length - 1].value;
  }
}

class AssetStore {
  constructor(basePath) {
    this.basePath = basePath;
    this.textures = new Map();
    this.sizes = new Map();
    this.materials = new Map();
  }

  async loadAll(ids) {
    await Promise.all(ids.map((id) => this.loadBitmap(id)));
  }

  async loadBitmap(id) {
    const image = await this.loadImage(`${this.basePath}/bitmap_${id}_${id}.bmp`);
    const { canvas, width, height } = this.makeTransparentCanvas(image);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    this.textures.set(id, texture);
    this.sizes.set(id, { width, height });
  }

  loadImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error(`Could not load ${url}`));
      image.src = url;
    });
  }

  makeTransparentCanvas(image) {
    const width = image.naturalWidth || image.width;
    const height = image.naturalHeight || image.height;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(image, 0, 0);

    const frame = ctx.getImageData(0, 0, width, height);
    const data = frame.data;
    // Win16's monochrome mask treats white as the transparent color. Several
    // resources intentionally have black or colored corner pixels, so corner
    // flood-fill erases real outlines (flags 23/24) and a ramp stripe (52).
    for (let offset = 0; offset < data.length; offset += 4) {
      if (data[offset] >= 248 && data[offset + 1] >= 248 && data[offset + 2] >= 248) {
        data[offset + 3] = 0;
      }
    }

    ctx.putImageData(frame, 0, 0);
    return { canvas, width, height };
  }

  material(id) {
    if (!this.materials.has(id)) {
      const texture = this.textures.get(id);
      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.05,
        depthTest: false,
        depthWrite: false
      });
      this.materials.set(id, material);
    }
    return this.materials.get(id);
  }

  size(id) {
    return this.sizes.get(id) || { width: 24, height: 24 };
  }
}

class SkiFreeGame {
  constructor() {
    this.canvas = document.querySelector("#game");
    this.loadingCard = document.querySelector("#load-card");
    this.pauseCard = document.querySelector("#pause-card");
    this.hud = {
      time: document.querySelector("#time-value"),
      distance: document.querySelector("#distance-value"),
      speed: document.querySelector("#speed-value"),
      style: document.querySelector("#style-value")
    };
    this.styleEffects = document.querySelector("#style-effects");
    this.resultCard = document.querySelector("#course-result-card");
    this.resultName = document.querySelector("#course-result-name");
    this.resultList = document.querySelector("#course-result-list");

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: false,
      alpha: false
    });
    this.renderer.setClearColor(0xffffff, 1);
    this.renderer.sortObjects = true;

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-400, 400, 300, -300, -100, 100);
    this.camera.position.z = 10;
    this.assets = new AssetStore(`${import.meta.env.BASE_URL}assets/bitmaps`);
    this.localizedMaterials = new Map();

    this.viewport = { width: 800, height: 600 };
    this.createSnowSystem();
    this.createSkiTrackSystem();
    this.createPlayerShadow();
    this.input = {
      pointerActive: false,
      pointerX: 0,
      pointerY: 0,
      keys: new Set(),
      touchPointerId: null,
      touchDownAt: 0,
      touchStartX: 0,
      touchStartY: 0
    };
    this.lastTime = performance.now();
    this.accumulatorMs = 0;
    this.debugFast = false;
    this.paused = false;
    this.started = false;

    this.resize = this.resize.bind(this);
    this.frame = this.frame.bind(this);
  }

  async start() {
    window.addEventListener("resize", this.resize);
    window.addEventListener("keydown", (event) => this.onKeyDown(event));
    window.addEventListener("keyup", (event) => this.input.keys.delete(event.code));
    window.addEventListener("pointermove", (event) => this.onPointerMove(event));
    window.addEventListener("pointerdown", (event) => this.onPointerDown(event));
    window.addEventListener("pointerup", (event) => this.onPointerUp(event));
    window.addEventListener("pointercancel", (event) => this.onPointerUp(event, true));
    window.addEventListener("blur", () => this.setPaused(true));

    this.resize();
    await this.assets.loadAll(ASSET_IDS);
    this.loadingCard.hidden = true;
    this.restart();
    requestAnimationFrame(this.frame);
  }

  resize() {
    const width = Math.max(320, window.innerWidth);
    const height = Math.max(240, window.innerHeight);
    this.viewport.width = width;
    this.viewport.height = height;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setSize(width, height, false);
    this.camera.left = -width / 2;
    this.camera.right = width / 2;
    this.camera.top = height / 2;
    this.camera.bottom = -height / 2;
    this.camera.updateProjectionMatrix();
    this.input.pointerActive = false;
    this.input.touchPointerId = null;
    this.resetSnowField();
    if (this.objects) {
      const helpX = width <= 640 ? 8 : Math.max(
        this.assets.size(SPRITE.HELP_MOUSE).width,
        this.assets.size(SPRITE.HELP_KEYS).width
      );
      for (const object of this.objects) {
        if (object.introHelp) object.x = helpX;
      }
      this.layoutCourseLabels();
    }
  }

  restart() {
    if (this.player) this.removeSprite(this.player);
    for (const object of this.objects || []) this.removeSprite(object);

    this.rng = new SeededRandom();
    this.objects = [];
    this.nextSpawnY = -120;
    this.elapsedMs = 0;
    this.styleScore = 0;
    this.gatePassCount = 0;
    this.lastGateStyleAward = 0;
    this.sideSpawnAnchorX = 0;
    this.monster = null;
    this.yetiAttack = {
      active: false,
      finished: false,
      elapsed: 0,
      monster: null
    };
    this.gameOver = false;
    this.courseMessage = "";
    this.lastFinishedCourse = "";
    this.courseModes = this.createCourseModes();
    this.paused = false;
    this.started = true;
    this.input.pointerActive = false;
    this.input.touchPointerId = null;
    document.title = "SkiFree";
    this.pauseCard.textContent = "Pausado";
    this.pauseCard.hidden = true;
    this.resultCard.hidden = true;
    this.styleEffects.replaceChildren();
    this.resetSkiTracks();

    this.player = {
      kind: OBJECT_KIND.PLAYER,
      state: PLAYER_STATE.STRAIGHT,
      spriteId: spriteForState(PLAYER_STATE.STRAIGHT),
      x: 0,
      y: 0,
      vx: 0,
      speed: 3.4,
      turnVelocity: 0,
      actionTimer: 0,
      pendingAction: 0,
      mode: 0,
      crashedUntil: 0,
      recoveryUntil: 0,
      collisionGraceTimer: 0,
      actionDuration: 0,
      actionElapsed: 0,
      actionPeak: 0,
      airHeight: 0,
      manualTrickTimer: 0,
      renderScale: 1,
      collidable: true
    };
    this.attachSprite(this.player);
    this.player.sprite.visible = true;
    this.syncPlayerDataset();

    this.addIntroDecorations();
    this.addCourseMarkers();
    this.addPlayerRivals();

    this.spawnCourseUntil(this.viewport.height * 2);
    this.updateCamera();
    this.updateSnow(0);
    this.updatePlayerShadow();
    this.updateHud();
  }

  createSnowSystem() {
    const positions = new Float32Array(SNOW_PARTICLE_COUNT * 3);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0xa9c6dd,
      size: 2,
      transparent: true,
      opacity: 0.58,
      depthTest: false,
      depthWrite: false,
      sizeAttenuation: false
    });
    const points = new THREE.Points(geometry, material);
    points.frustumCulled = false;
    points.renderOrder = 100000;
    this.scene.add(points);
    this.snow = {
      count: SNOW_PARTICLE_COUNT,
      positions,
      geometry,
      points,
      flakes: Array.from({ length: SNOW_PARTICLE_COUNT }, () => ({ x: 0, y: 0, speed: 0, drift: 0 })),
      fieldWidth: 0,
      fieldHeight: 0
    };
  }

  resetSnowField() {
    if (!this.snow) return;
    this.snow.fieldWidth = this.viewport.width * 1.2;
    this.snow.fieldHeight = this.viewport.height * 1.2;
    const random = () => Math.random();
    for (const flake of this.snow.flakes) {
      flake.x = (random() - 0.5) * this.snow.fieldWidth;
      flake.y = (random() - 0.5) * this.snow.fieldHeight;
      flake.speed = 22 + random() * 44;
      flake.drift = 5 + random() * 15;
    }
  }

  updateSnow(dt) {
    if (!this.snow) return;
    const halfWidth = this.snow.fieldWidth / 2;
    const halfHeight = this.snow.fieldHeight / 2;
    const time = this.elapsedMs * 0.001;
    for (let i = 0; i < this.snow.flakes.length; i += 1) {
      const flake = this.snow.flakes[i];
      flake.y -= flake.speed * dt;
      flake.x += Math.sin(time * 0.8 + i) * flake.drift * dt;
      if (flake.y < -halfHeight) {
        flake.y = halfHeight;
        flake.x = (Math.random() - 0.5) * this.snow.fieldWidth;
      }
      if (flake.x < -halfWidth) flake.x += this.snow.fieldWidth;
      if (flake.x > halfWidth) flake.x -= this.snow.fieldWidth;
      const offset = i * 3;
      this.snow.positions[offset] = this.camera.position.x + flake.x;
      this.snow.positions[offset + 1] = this.camera.position.y + flake.y;
      this.snow.positions[offset + 2] = 2;
    }
    this.snow.geometry.attributes.position.needsUpdate = true;
  }

  createSkiTrackSystem() {
    const positions = new Float32Array(SKI_TRACK_MAX_SEGMENTS * 2 * 2 * 3);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setDrawRange(0, 0);
    const material = new THREE.LineBasicMaterial({ color: 0xb8cedd, transparent: true, opacity: 0.68, depthTest: false });
    const lines = new THREE.LineSegments(geometry, material);
    lines.frustumCulled = false;
    lines.renderOrder = -100000;
    this.scene.add(lines);
    this.skiTracks = { positions, geometry, lines, segments: 0, last: null };
  }

  resetSkiTracks() {
    if (!this.skiTracks) return;
    this.skiTracks.segments = 0;
    this.skiTracks.last = null;
    this.skiTracks.geometry.setDrawRange(0, 0);
  }

  updateSkiTracks() {
    const tracks = this.skiTracks;
    const player = this.player;
    const grounded = player.airHeight <= 0.1 && player.actionTimer <= 0 && player.crashedUntil <= 0
      && player.state !== PLAYER_STATE.FALLEN && player.state !== PLAYER_STATE.CRASHED;
    if (!grounded || player.speed < 0.25) {
      tracks.last = null;
      return;
    }
    const current = { x: player.x, y: -player.y };
    if (!tracks.last) {
      tracks.last = current;
      return;
    }
    if (Math.hypot(current.x - tracks.last.x, current.y - tracks.last.y) < SKI_TRACK_SAMPLE_DISTANCE) return;
    if (tracks.segments >= SKI_TRACK_MAX_SEGMENTS) {
      tracks.positions.copyWithin(0, 12);
      tracks.segments -= 1;
    }
    const dx = current.x - tracks.last.x;
    const dy = current.y - tracks.last.y;
    const length = Math.max(0.001, Math.hypot(dx, dy));
    const sideX = (-dy / length) * SKI_TRACK_SEPARATION * 0.5;
    const sideY = (dx / length) * SKI_TRACK_SEPARATION * 0.5;
    const values = [
      tracks.last.x - sideX, tracks.last.y - sideY, -2, current.x - sideX, current.y - sideY, -2,
      tracks.last.x + sideX, tracks.last.y + sideY, -2, current.x + sideX, current.y + sideY, -2
    ];
    tracks.positions.set(values, tracks.segments * 12);
    tracks.segments += 1;
    tracks.last = current;
    tracks.geometry.setDrawRange(0, tracks.segments * 4);
    tracks.geometry.attributes.position.needsUpdate = true;
  }

  createPlayerShadow() {
    const material = new THREE.MeshBasicMaterial({ color: 0x9fb4c4, transparent: true, opacity: 0.2, depthTest: false, depthWrite: false });
    this.playerShadow = new THREE.Mesh(new THREE.CircleGeometry(10, 16), material);
    this.playerShadow.scale.set(1, 0.28, 1);
    this.scene.add(this.playerShadow);
  }

  updatePlayerShadow() {
    if (!this.player) return;
    const air = this.player.airHeight || 0;
    this.playerShadow.position.set(this.player.x, -this.player.y + 1, -1);
    this.playerShadow.scale.set(1 + air / 70, 0.28 + air / 350, 1);
    this.playerShadow.material.opacity = Math.max(0.045, 0.2 - air / 260);
    this.playerShadow.renderOrder = Math.floor(this.player.y) - 1;
  }

  showStylePoints(points, label = "Estilo") {
    if (points <= 0 || !this.styleEffects) return;
    const effect = document.createElement("div");
    effect.className = "style-popup";
    effect.textContent = `+${Math.floor(points)} ${label}`;
    effect.style.setProperty("--drift", `${Math.round((Math.random() - 0.5) * 54)}px`);
    this.styleEffects.append(effect);
    effect.addEventListener("animationend", () => effect.remove(), { once: true });
  }

  createCourseModes() {
    return {
      race: {
        ...COURSE_LANES.race,
        active: false,
        finished: false,
        elapsedMs: 0,
        penaltyMs: 0,
        missedGates: 0,
        nextGate: 0,
        resultMs: 0,
        gates: this.buildGateSet(RACE_GATE_START_Y, RACE_GATE_STEP_Y, RACE_FINISH_Y, -0x01f0, -0x0190)
      },
      freestyle: {
        ...COURSE_LANES.freestyle,
        active: false,
        finished: false,
        elapsedMs: 0,
        penaltyMs: 0,
        missedGates: 0,
        nextGate: 0,
        resultMs: 0,
        gates: []
      },
      treeSlalom: {
        ...COURSE_LANES.treeSlalom,
        active: false,
        finished: false,
        elapsedMs: 0,
        penaltyMs: 0,
        missedGates: 0,
        nextGate: 0,
        resultMs: 0,
        gates: this.buildGateSet(TREE_GATE_START_Y, TREE_GATE_STEP_Y, LONG_COURSE_FINISH_Y, 0x0190, 0x01b0)
      }
    };
  }

  buildGateSet(startY, stepY, finishY, redX, blueX) {
    const count = Math.ceil((finishY - startY) / stepY);
    return Array.from({ length: count }, (_, index) => {
      const isRed = index % 2 === 0;
      return {
        y: startY + index * stepY,
        flagX: isRed ? redX : blueX,
        spriteId: isRed ? SPRITE.FLAG_RED : SPRITE.FLAG_BLUE,
        isRed,
        passed: false,
        missed: false,
        marker: null
      };
    });
  }

  addCourseMarkers() {
    this.addCourseSign(0, 0, SPRITE.SLALOM_SIGN, "race");
    this.addCourseSign(0, 0, SPRITE.FREESTYLE_SIGN, "freestyle");
    this.addCourseSign(0, 0, SPRITE.TREE_SLALOM_SIGN, "treeSlalom");
    this.layoutCourseLabels();

    this.addCourseSignPair(COURSE_LANES.race.signX, RACE_START_Y, SPRITE.START_LEFT, SPRITE.START_RIGHT, 128);
    this.addCourseSignPair(COURSE_LANES.freestyle.signX, RACE_START_Y, SPRITE.START_LEFT, SPRITE.START_RIGHT, 160);
    this.addCourseSignPair(COURSE_LANES.treeSlalom.signX, RACE_START_Y, SPRITE.START_LEFT, SPRITE.START_RIGHT, 96);

    this.addCourseSignPair(COURSE_LANES.race.signX, RACE_FINISH_Y, SPRITE.FINISH_LEFT, SPRITE.FINISH_RIGHT, 128);
    this.addCourseSignPair(COURSE_LANES.freestyle.signX, LONG_COURSE_FINISH_Y, SPRITE.FINISH_LEFT, SPRITE.FINISH_RIGHT, 160);
    this.addCourseSignPair(COURSE_LANES.treeSlalom.signX, LONG_COURSE_FINISH_Y, SPRITE.FINISH_LEFT, SPRITE.FINISH_RIGHT, 96);

    for (const mode of [this.courseModes.race, this.courseModes.treeSlalom]) {
      for (const [index, gate] of mode.gates.entries()) {
        this.addGateSprite(gate, index);
      }
    }

    for (const gate of this.courseModes.treeSlalom.gates) {
      this.addTree(
        this.rng.int(0x0190, 0x01af),
        gate.y + this.rng.int(0, TREE_GATE_STEP_Y - 1)
      );
    }

    this.addSkiLift();
  }

  addIntroDecorations() {
    const titleX = -Math.trunc(this.assets.size(SPRITE.TITLE).width / 2) - 40;
    const recoveredHelpX = Math.max(
      this.assets.size(SPRITE.HELP_MOUSE).width,
      this.assets.size(SPRITE.HELP_KEYS).width
    );
    const helpX = this.viewport.width <= 640 ? 8 : recoveredHelpX;
    const versionY = this.assets.size(SPRITE.VERSION).height + 4;
    const helpMouseY = this.assets.size(SPRITE.HELP_MOUSE).height;
    const helpKeysY = helpMouseY + this.assets.size(SPRITE.HELP_KEYS).height + 4;

    for (const [spriteId, x, y, introHelp] of [
      [SPRITE.TITLE, titleX, 0, false],
      [SPRITE.VERSION, titleX, versionY, false],
      [SPRITE.HELP_MOUSE, helpX, helpMouseY, true],
      [SPRITE.HELP_KEYS, helpX, helpKeysY, true]
    ]) {
      this.addObject({
        kind: OBJECT_KIND.SIGN,
        spriteId,
        x,
        y,
        introHelp,
        localized: [SPRITE.HELP_MOUSE, SPRITE.HELP_KEYS].includes(spriteId),
        collidable: false,
        permanent: true
      });
    }
  }

  layoutCourseLabels() {
    if (!this.objects) return;
    const sideX = Math.max(0, this.viewport.width / 2 - 60);
    const candidateY = this.viewport.height * 0.66 - 60;
    const y = candidateY > RACE_START_Y ? RACE_START_Y - 120 : candidateY;
    const xByCourse = {
      race: Math.max(-0x0140, -sideX),
      freestyle: 0,
      treeSlalom: Math.min(0x0140, sideX)
    };
    for (const object of this.objects) {
      if (!object.courseLabel) continue;
      object.x = xByCourse[object.courseLabel];
      object.y = y;
    }
  }

  addCourseSign(x, y, spriteId, courseLabel = "") {
    this.addObject({
      kind: OBJECT_KIND.SIGN,
      spriteId,
      x,
      y,
      courseLabel,
      localized: true,
      collidable: false,
      permanent: true
    });
  }

  addCourseSignPair(x, y, leftSpriteId, rightSpriteId, halfWidth = 34) {
    this.addObject({
      kind: OBJECT_KIND.SIGN,
      spriteId: leftSpriteId,
      x: x - halfWidth,
      y,
      localized: true,
      collidable: false,
      permanent: true
    });
    this.addObject({
      kind: OBJECT_KIND.SIGN,
      spriteId: rightSpriteId,
      x: x + halfWidth,
      y,
      localized: true,
      collidable: false,
      permanent: true
    });
  }

  addGateSprite(gate, index) {
    gate.marker = this.addObject({
      kind: OBJECT_KIND.MARKER,
      spriteId: gate.spriteId ?? (index % 2 === 0 ? SPRITE.FLAG_RED : SPRITE.FLAG_BLUE),
      x: gate.flagX,
      y: gate.y,
      collidable: false,
      permanent: true
    });
  }

  addSkiLift() {
    for (let y = LIFT_MIN_Y; y <= LIFT_MAX_Y; y += LIFT_STEP_Y) {
      this.addObject({
        kind: OBJECT_KIND.TOWER,
        spriteId: SPRITE.SKI_LIFT_TOWER,
        x: -0x0080,
        y,
        collidable: true,
        collisionScale: 0.48,
        permanent: true
      });
      if (y > LIFT_MIN_Y) this.addLiftChair(-0x0070, y, -2, SPRITE.SKI_LIFT_CHAIR_1);
      if (y < LIFT_MAX_Y) this.addLiftChair(-0x0090, y, 2, SPRITE.SKI_LIFT_CHAIR_3);
    }
  }

  addLiftChair(x, y, velocityY, spriteId) {
    return this.addObject({
      kind: OBJECT_KIND.LIFT_CHAIR,
      state: spriteId === SPRITE.SKI_LIFT_CHAIR_1 ? 0x27 : 0x29,
      spriteId,
      x,
      y,
      velocityY,
      collidable: true,
      collisionScale: 0.6,
      permanent: true
    });
  }

  frame(now) {
    const elapsed = Math.min(MAX_FRAME_SECONDS, (now - this.lastTime) / 1000);
    this.lastTime = now;

    if (!this.paused) {
      this.accumulatorMs += elapsed * 1000;
      while (this.accumulatorMs >= TICK_MS) {
        this.update(TICK_MS / 1000);
        this.accumulatorMs -= TICK_MS;
      }
    }

    this.render();
    requestAnimationFrame(this.frame);
  }

  update(dt) {
    const scaledDt = this.debugFast ? dt * 2 : dt;
    const previousPlayer = { x: this.player.x, y: this.player.y };

    if (this.yetiAttack.active) {
      this.updateYetiAttack(scaledDt);
      this.updateCamera();
      this.updateSnow(scaledDt);
      this.updatePlayerShadow();
      this.updateHud();
      return;
    }

    if (this.gameOver) {
      this.updateCamera();
      this.updateSnow(scaledDt);
      this.updatePlayerShadow();
      this.updateHud();
      return;
    }

    this.elapsedMs += scaledDt * 1000;

    this.applyPointerState();
    this.integratePlayer(scaledDt);
    this.updateSkiTracks();
    this.updateCourseModes(previousPlayer, scaledDt);
    this.updateCourseObjects(scaledDt);
    this.checkCollisions();
    this.spawnCourseUntil(this.player.y + this.viewport.height * 2.1);
    this.spawnSideObjects();
    this.pruneObjects();
    this.updateCamera();
    this.updateSnow(scaledDt);
    this.updatePlayerShadow();
    this.updateHud();
  }

  integratePlayer(dt) {
    const player = this.player;

    player.manualTrickTimer = Math.max(0, (player.manualTrickTimer || 0) - dt);

    if (player.actionTimer > 0) {
      player.actionTimer = Math.max(0, player.actionTimer - dt);
      player.actionElapsed += dt;
      const duration = Math.max(0.001, player.actionDuration || player.actionTimer + player.actionElapsed);
      const progress = Math.min(1, player.actionElapsed / duration);
      const peak = player.actionPeak || (player.pendingAction === 4 ? 34 : 22);
      player.airHeight = Math.sin(progress * Math.PI) * peak;
      player.mode = Math.max(1, Math.round(player.airHeight));
      if (player.actionTimer === 0 && player.state !== PLAYER_STATE.CRASHED) {
        player.pendingAction = 0;
        player.mode = 0;
        player.airHeight = 0;
        player.actionDuration = 0;
        player.actionElapsed = 0;
        player.actionPeak = 0;
        this.setPlayerState(PLAYER_STATE.STRAIGHT);
      }
    }

    const recoveryState = advanceCrashRecovery(player, dt);
    if (recoveryState !== player.state) this.setPlayerState(recoveryState);

    const motion = PLAYER_MOTION[player.state] || PLAYER_MOTION[0];
    const profileVx = motion.vxRatio == null
      ? (motion.targetVx || 0)
      : Math.max(-4.2, Math.min(4.2, player.speed * motion.vxRatio));
    const vxTarget = profileVx + player.turnVelocity * 0.07;
    const turnBlend = Math.min(1, dt * motion.turn);
    const speedBlend = Math.min(1, dt * motion.accel);
    player.vx += (vxTarget - player.vx) * turnBlend;
    player.speed += (motion.targetSpeed - player.speed) * speedBlend;
    player.turnVelocity *= Math.max(0, 1 - dt * 4.5);

    player.x += player.vx * dt * 60;
    player.y += Math.max(0, player.speed) * dt * 60;

  }

  updateCourseModes(previousPlayer, dt) {
    const activeMode = this.activeCourseMode();
    if (activeMode) {
      activeMode.elapsedMs += dt * 1000;
      this.checkCourseGates(activeMode, previousPlayer);
      if (this.crossedY(previousPlayer.y, this.player.y, activeMode.finishY)) {
        this.finishCourseMode(activeMode);
      }
      return;
    }

    for (const [name, mode] of Object.entries(this.courseModes)) {
      if (mode.finished || !this.crossedY(previousPlayer.y, this.player.y, RACE_START_Y)) continue;
      const crossingX = this.xAtY(previousPlayer, this.player, RACE_START_Y);
      if (crossingX >= mode.startMinX && crossingX <= mode.startMaxX) {
        this.startCourseMode(name);
        return;
      }
    }
  }

  activeCourseMode() {
    return Object.values(this.courseModes).find((mode) => mode.active) || null;
  }

  activeCourseName() {
    return Object.entries(this.courseModes).find(([, mode]) => mode.active)?.[0] || "";
  }

  displayCourseMode() {
    return this.activeCourseMode()
      || this.courseModes[this.lastFinishedCourse]
      || null;
  }

  startCourseMode(name) {
    const mode = this.courseModes[name];
    mode.active = true;
    mode.elapsedMs = 0;
    mode.penaltyMs = 0;
    mode.missedGates = 0;
    mode.nextGate = 0;
    mode.resultMs = 0;
    mode.gates.forEach((gate) => {
      gate.passed = false;
      gate.missed = false;
      if (gate.marker) {
        gate.marker.spriteId = gate.spriteId;
        this.refreshSprite(gate.marker);
      }
    });
    this.courseMessage = `Prova iniciada: ${mode.label}`;
  }

  finishCourseMode(mode) {
    mode.active = false;
    mode.finished = true;
    mode.resultMs = mode.elapsedMs + mode.penaltyMs;
    this.lastFinishedCourse = Object.entries(this.courseModes)
      .find(([, value]) => value === mode)?.[0] || "";
    this.courseMessage = mode === this.courseModes.freestyle
      ? `Prova concluída — ${mode.label}: ${Math.floor(this.styleScore)} pontos de estilo`
      : `Prova concluída — ${mode.label}: ${this.formatTime(mode.resultMs)}`;
    this.showCourseResults(this.lastFinishedCourse, mode);
  }

  showCourseResults(courseName, mode) {
    const higherWins = courseName === "freestyle";
    const value = higherWins ? Math.floor(this.styleScore) : Math.floor(mode.resultMs);
    const storageKey = `skifree-high-scores:${courseName}`;
    let saved = [];
    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey) || "[]");
      if (Array.isArray(parsed)) saved = parsed;
    } catch {
      saved = [];
    }
    const ranked = rankCourseResults(saved, value, higherWins);
    try {
      localStorage.setItem(storageKey, JSON.stringify(ranked.entries.map(({ value: score }) => ({ value: score }))));
    } catch {
      // Storage can be unavailable in privacy modes; the current result is still shown.
    }

    this.resultName.textContent = mode.label;
    this.resultList.replaceChildren();
    for (const [index, entry] of ranked.entries.entries()) {
      const item = document.createElement("li");
      const score = higherWins ? `${Math.floor(entry.value)} pontos` : this.formatTime(entry.value);
      item.textContent = `${score}${entry.current ? "  ← seu resultado!" : ""}`;
      if (entry.current) item.className = "current-result";
      item.value = index + 1;
      this.resultList.append(item);
    }
    if (ranked.rank < 0) {
      const item = document.createElement("li");
      item.className = "current-result unranked-result";
      item.textContent = `${higherWins ? `${value} pontos` : this.formatTime(value)}  ← tente novamente!`;
      this.resultList.append(item);
    }
    this.resultCard.hidden = false;
    this.paused = true;
    document.title = `SkiFree - Resultados de ${mode.label}`;
  }

  closeCourseResults() {
    if (this.resultCard.hidden) return false;
    this.resultCard.hidden = true;
    this.paused = false;
    document.title = "SkiFree";
    return true;
  }

  checkCourseGates(mode, previousPlayer) {
    while (mode.nextGate < mode.gates.length) {
      const gate = mode.gates[mode.nextGate];
      if (!this.crossedY(previousPlayer.y, this.player.y, gate.y)) break;

      const crossingX = this.xAtY(previousPlayer, this.player, gate.y);
      const passed = gate.isRed ? crossingX <= gate.flagX : crossingX >= gate.flagX;
      if (passed) {
        gate.passed = true;
        this.gatePassCount += 1;
        this.styleScore += GATE_STYLE_POINTS;
        this.lastGateStyleAward = GATE_STYLE_POINTS;
        this.showStylePoints(GATE_STYLE_POINTS, "Bandeira");
      } else {
        gate.missed = true;
        mode.missedGates += 1;
        mode.penaltyMs += GATE_PENALTY_MS;
      }
      if (gate.marker) {
        gate.marker.spriteId = passed ? SPRITE.GATE_PASSED : SPRITE.GATE_MISSED;
        this.refreshSprite(gate.marker);
      }
      mode.nextGate += 1;
    }
  }

  crossedY(previousY, currentY, targetY) {
    return previousY < targetY && currentY >= targetY;
  }

  xAtY(previous, current, targetY) {
    const span = current.y - previous.y;
    if (Math.abs(span) < 0.0001) return current.x;
    const t = Math.min(1, Math.max(0, (targetY - previous.y) / span));
    return previous.x + (current.x - previous.x) * t;
  }

  addStyleScore(amount, label = "Estilo") {
    if (this.activeCourseName() === "freestyle") {
      this.styleScore += amount;
      if (amount > 0) this.showStylePoints(amount, label);
    }
  }

  applyPointerState() {
    if (!this.input.pointerActive) return;
    if (this.player.state === PLAYER_STATE.CRASHED || this.player.state === PLAYER_STATE.FALLEN) return;
    if (this.player.manualTrickTimer > 0) return;

    const anchorX = this.viewport.width / 2;
    const anchorY = this.viewport.height / 3;
    const dx = this.input.pointerX - anchorX;
    const dy = this.input.pointerY - anchorY;
    const nextState = this.player.mode === 0
      ? this.mapMouseDirection(dy, dx)
      : this.mapTrickDirection(dy, dx);
    this.setPlayerState(nextState);
  }

  mapMouseDirection(dx, dy) {
    if (dx > 0) {
      if (dy === 0) return PLAYER_STATE.STRAIGHT;
      const slope = Math.trunc((dx * 4) / dy);
      if (slope <= -12) return PLAYER_STATE.STRAIGHT;
      if (slope <= -6) return PLAYER_STATE.LEFT_1;
      if (slope <= -3) return PLAYER_STATE.LEFT_2;
      if (slope <= -1) return PLAYER_STATE.LEFT_3;
      if (slope >= 12) return PLAYER_STATE.STRAIGHT;
      if (slope >= 6) return PLAYER_STATE.RIGHT_1;
      if (slope >= 3) return PLAYER_STATE.RIGHT_2;
      if (slope >= 1) return PLAYER_STATE.RIGHT_3;
    }
    return dy >= 0 ? PLAYER_STATE.RIGHT_3 : PLAYER_STATE.LEFT_3;
  }

  mapTrickDirection(verticalDelta, horizontalDelta) {
    if (Math.abs(horizontalDelta) > Math.abs(verticalDelta)) {
      return horizontalDelta < 0 ? PLAYER_STATE.TRICK_LEFT : PLAYER_STATE.TRICK_RIGHT;
    }
    return verticalDelta < 0 ? PLAYER_STATE.TRICK_BACK : PLAYER_STATE.TRICK;
  }

  updateCourseObjects(dt) {
    for (const object of this.objects) {
      if (object.kind === RIVAL_KIND) {
        this.updatePlayerRival(object, dt);
      } else if (object.kind === OBJECT_KIND.DOG) {
        this.updateDog(object, dt);
      } else if (object.kind === OBJECT_KIND.ANIMATED) {
        this.updateNpcSkier(object, dt);
      } else if (object.kind === OBJECT_KIND.ACROBAT) {
        this.updateAcrobat(object, dt);
      } else if (object.kind === OBJECT_KIND.LIFT_CHAIR) {
        this.updateLiftChair(object, dt);
      } else if (object.kind === OBJECT_KIND.FIRE) {
        object.stateTimer = (object.stateTimer || 0) + dt;
        if (object.stateTimer > 0.12) {
          object.stateTimer = 0;
          const nextState = (object.state ?? 0x38) >= 0x3b ? 0x38 : (object.state ?? 0x38) + 1;
          this.setObjectState(object, nextState);
        }
      } else if (object.kind === OBJECT_KIND.MONSTER) {
        this.updateMonster(object, dt);
      }
    }

    if (this.rng.int(0, 665) === 0) {
      this.spawnTopAcrobat();
    }

    if (!this.monster && this.player.y > CHASE_DISTANCE) {
      this.monster = this.addObject({
        kind: OBJECT_KIND.MONSTER,
        spriteId: 68,
        x: this.player.x + this.rng.range(-YETI_SPAWN_SIDE_RANGE, YETI_SPAWN_SIDE_RANGE),
        y: this.player.y - this.viewport.height * YETI_SPAWN_BACK_VIEWPORT_RATIO,
        runFramePhase: 0,
        collidable: true,
        radius: 20
      });
    }
  }

  updateDog(dog, dt) {
    dog.state ??= DOG_STATES.WALK_A;
    dog.vx ??= this.rng.chance(0.5) ? -0.55 : 0.55;
    dog.patrolLeft ??= dog.x - this.rng.range(44, 92);
    dog.patrolRight ??= dog.x + this.rng.range(44, 92);

    if (dog.state === DOG_STATES.WALK_A || dog.state === DOG_STATES.WALK_B) {
      dog.x += dog.vx * dt * 60;
      dog.y += (dog.yDrift || 0) * dt * 60;
      if (dog.x < dog.patrolLeft) {
        dog.x = dog.patrolLeft;
        dog.vx = Math.abs(dog.vx);
      } else if (dog.x > dog.patrolRight) {
        dog.x = dog.patrolRight;
        dog.vx = -Math.abs(dog.vx);
      }
    }

    dog.stateTimer = (dog.stateTimer || 0) + dt;
    while (dog.stateTimer >= DOG_STATE_SECONDS) {
      dog.stateTimer -= DOG_STATE_SECONDS;
      this.advanceDogState(dog);
    }
  }

  advanceDogState(dog) {
    switch (dog.state) {
      case DOG_STATES.WALK_A:
        dog.yDrift = (this.rng.int(0, 2) - 1) * 0.06;
        this.setObjectState(dog, DOG_STATES.WALK_B);
        break;
      case DOG_STATES.WALK_B:
        dog.yDrift = 0;
        dog.vx = Math.sign(dog.vx || 1) * 0.55;
        this.setObjectState(dog, DOG_STATES.WALK_A);
        break;
      case DOG_STATES.ALERT:
        dog.vx = 0;
        dog.yDrift = 0;
        this.setObjectState(dog, this.rng.int(0, 31) === 1 ? DOG_STATES.WALK_B : DOG_STATES.BARK);
        break;
      case DOG_STATES.BARK:
        if (this.rng.int(0, 99) === 0) {
          this.addObject({
            kind: OBJECT_KIND.PATCH,
            spriteId: SPRITE.YELLOW_PATCH,
            x: dog.x - 4,
            y: dog.y - 2,
            collidable: true,
            collisionScale: 0.82
          });
          this.setObjectState(dog, DOG_STATES.WALK_A);
        } else {
          this.setObjectState(dog, DOG_STATES.ALERT);
        }
        break;
      default:
        this.setObjectState(dog, DOG_STATES.WALK_A);
        break;
    }
  }

  updateNpcSkier(npc, dt) {
    npc.state ??= NPC_SKIER_STATES[0];
    if (npc.state >= 0x19) return;
    const motion = NPC_SKIER_MOTION[npc.state] || NPC_SKIER_MOTION[NPC_SKIER_STATES[0]];
    npc.vx ??= motion.targetVx;
    npc.speed ??= motion.targetSpeed;
    npc.vx += (motion.targetVx - npc.vx) * Math.min(1, dt * 5.8);
    npc.speed += (motion.targetSpeed - npc.speed) * Math.min(1, dt * 3.4);
    npc.x += npc.vx * dt * 60;
    npc.y += npc.speed * dt * 60;

    if (this.rng.int(0, 11) === 0) {
      this.setObjectState(npc, NPC_SKIER_STATES[this.rng.int(0, NPC_SKIER_STATES.length - 1)]);
    }
  }

  addPlayerRivals() {
    const offsets = [-105, 70, -25];
    for (let i = 0; i < RIVAL_COUNT; i += 1) {
      const rival = this.addObject({
        kind: RIVAL_KIND,
        name: RIVAL_NAMES[i],
        state: PLAYER_STATE.STRAIGHT,
        spriteId: spriteForState(PLAYER_STATE.STRAIGHT),
        x: (i - 1) * 72,
        y: this.player.y + offsets[i],
        desiredOffsetY: offsets[i],
        laneOffset: (i - 1) * 115,
        vx: 0,
        speed: 3.4,
        styleScore: 0,
        actionTimer: 0,
        actionDuration: 0,
        actionElapsed: 0,
        actionPeak: 0,
        airHeight: 0,
        nextDecision: 0.8 + i * 0.65,
        collidable: false,
        permanent: true
      });
      this.createRivalNametag(rival);
    }
  }

  createRivalNametag(rival) {
    const canvas = document.createElement("canvas");
    canvas.width = 192;
    canvas.height = 36;
    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.LinearFilter;
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false, depthWrite: false });
    rival.nameCanvas = canvas;
    rival.nameTexture = texture;
    rival.nameSprite = new THREE.Sprite(material);
    rival.nameSprite.center.set(0.5, 0);
    rival.nameSprite.scale.set(96, 18, 1);
    this.scene.add(rival.nameSprite);
    this.refreshRivalNametag(rival);
  }

  refreshRivalNametag(rival) {
    const context = rival.nameCanvas.getContext("2d");
    context.clearRect(0, 0, rival.nameCanvas.width, rival.nameCanvas.height);
    context.font = "bold 20px 'MS Sans Serif', Arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    const text = `${rival.name}  ★${Math.floor(rival.styleScore)}`;
    context.lineWidth = 5;
    context.strokeStyle = "rgba(255,255,255,0.96)";
    context.strokeText(text, 96, 18);
    context.fillStyle = "#174f9e";
    context.fillText(text, 96, 18);
    rival.nameTexture.needsUpdate = true;
  }

  updatePlayerRival(rival, dt) {
    rival.nextDecision -= dt;
    const relativeY = rival.y - this.player.y;
    const gapError = rival.desiredOffsetY - relativeY;
    const rubberband = Math.max(-1.6, Math.min(2.15, gapError * 0.012));
    const targetSpeed = Math.max(2.35, Math.min(6.25, this.player.speed + rubberband));
    rival.speed += (targetSpeed - rival.speed) * Math.min(1, dt * 2.6);

    const weave = Math.sin((this.elapsedMs * 0.00055) + rival.laneOffset) * 78;
    const targetX = this.player.x + rival.laneOffset + weave;
    const targetVx = Math.max(-2.4, Math.min(2.4, (targetX - rival.x) * 0.022));
    rival.vx += (targetVx - rival.vx) * Math.min(1, dt * 3.2);
    rival.x += rival.vx * dt * 60;
    rival.y += rival.speed * dt * 60;

    if (rival.actionTimer > 0) {
      rival.actionTimer = Math.max(0, rival.actionTimer - dt);
      rival.actionElapsed += dt;
      const progress = Math.min(1, rival.actionElapsed / rival.actionDuration);
      rival.airHeight = Math.sin(progress * Math.PI) * rival.actionPeak;
      if (rival.actionTimer === 0) {
        rival.airHeight = 0;
        rival.styleScore += rival.pendingStyle;
        rival.pendingStyle = 0;
        this.refreshRivalNametag(rival);
        this.setObjectState(rival, PLAYER_STATE.STRAIGHT);
      }
    } else {
      const directionalState = rival.vx < -0.65
        ? PLAYER_STATE.LEFT_2
        : rival.vx > 0.65 ? PLAYER_STATE.RIGHT_2 : PLAYER_STATE.STRAIGHT;
      this.setObjectState(rival, directionalState);
      const rampAhead = this.objects.some((object) =>
        (object.kind === OBJECT_KIND.RAMP || object.kind === OBJECT_KIND.BUMP || object.kind === OBJECT_KIND.MOGUL)
        && object.y > rival.y && object.y - rival.y < 46 && Math.abs(object.x - rival.x) < 30
      );
      if (rampAhead || rival.nextDecision <= 0) {
        this.startRivalTrick(rival, rampAhead);
      }
    }

    // Emergency elastic bound: remains smooth in normal play, but prevents a rival
    // from disappearing forever after pauses, crashes or debug-speed changes.
    const maxGap = this.viewport.height * 0.72;
    if (Math.abs(relativeY) > maxGap) {
      rival.y += (this.player.y + rival.desiredOffsetY - rival.y) * Math.min(1, dt * 1.8);
    }
  }

  startRivalTrick(rival, rampAssisted = false) {
    rival.actionDuration = rampAssisted ? 0.86 : this.rng.range(0.52, 0.74);
    rival.actionTimer = rival.actionDuration;
    rival.actionElapsed = 0;
    rival.actionPeak = rampAssisted ? 36 : this.rng.range(20, 30);
    rival.pendingStyle = rampAssisted ? 20 : this.rng.int(5, 12);
    rival.nextDecision = this.rng.range(3.2, 6.3);
    const tricks = [PLAYER_STATE.TRICK, PLAYER_STATE.TRICK_LEFT, PLAYER_STATE.TRICK_RIGHT, PLAYER_STATE.TRICK_BACK];
    this.setObjectState(rival, tricks[this.rng.int(0, tricks.length - 1)]);
  }

  updateAcrobat(acrobat, dt) {
    acrobat.state ??= 0x1f;
    acrobat.vx ??= acrobat.state === 0x1f ? -2.25 : 2.25;
    acrobat.speed ??= 4.5;
    acrobat.x += acrobat.vx * dt * 60;
    acrobat.y += acrobat.speed * dt * 60;
    acrobat.stateTimer = (acrobat.stateTimer || 0) + dt;
    while (acrobat.stateTimer >= ACROBAT_STATE_SECONDS) {
      acrobat.stateTimer -= ACROBAT_STATE_SECONDS;
      let state = acrobat.state;
      if (state === 0x1f && this.rng.int(0, 9) === 0) state = 0x20;
      else if (state === 0x20 && this.rng.int(0, 9) === 0) state = 0x1f;
      else if (state === 0x21) state = 0x20;
      else if (state >= 0x22) state = state === 0x26 ? 0x20 : state + 1;
      this.setObjectState(acrobat, state);
    }
  }

  updateLiftChair(chair, dt) {
    chair.y += chair.velocityY * dt * 60;
    if (chair.state === 0x27 && this.rng.int(0, 999) === 0) {
      this.addObject({
        kind: OBJECT_KIND.ACROBAT,
        state: 0x21,
        spriteId: spriteForState(0x21),
        x: chair.x,
        y: chair.y,
        vx: 0,
        speed: 5.5,
        collidable: true,
        collisionScale: 0.65
      });
      this.setObjectState(chair, 0x28);
    }
    if (chair.y <= LIFT_MIN_Y) {
      chair.y = LIFT_MIN_Y;
      chair.x = -0x0090;
      chair.velocityY = 2;
      this.setObjectState(chair, 0x29);
    } else if (chair.y >= LIFT_MAX_Y) {
      chair.y = LIFT_MAX_Y;
      chair.x = -0x0070;
      chair.velocityY = -2;
      this.setObjectState(chair, 0x27);
    }
  }

  setObjectState(object, state) {
    object.state = state;
    const spriteId = spriteForState(state);
    if (object.spriteId !== spriteId) {
      object.spriteId = spriteId;
      this.refreshSprite(object);
    }
  }

  updateMonster(monster, dt) {
    if (monster.attackActive) return;

    const dx = this.player.x - monster.x;
    const dy = this.player.y - monster.y;
    const distance = Math.hypot(dx, dy) || 1;
    const distanceBoost = Math.min(1.0, Math.max(0, (distance - 180) / YETI_DISTANCE_BOOST_RANGE));
    const speed = Math.min(
      YETI_MAX_SPEED,
      Math.max(YETI_MIN_SPEED, this.player.speed + YETI_SPEED_ADVANTAGE) + distanceBoost
    );
    monster.x += (dx / distance) * speed * dt * 60;
    monster.y += (dy / distance) * speed * dt * 60;
    monster.stateTimer = (monster.stateTimer || 0) + dt;
    while (monster.stateTimer >= YETI_RUN_FRAME_SECONDS) {
      monster.stateTimer -= YETI_RUN_FRAME_SECONDS;
      monster.runFramePhase = ((monster.runFramePhase || 0) + 1) % 2;
    }
    const spriteId = this.yetiRunSprite(monster, dx, dy);
    if (monster.spriteId !== spriteId) {
      monster.spriteId = spriteId;
      this.refreshSprite(monster);
    }
  }

  yetiRunSprite(monster, dx, dy) {
    const phase = monster.runFramePhase || 0;
    const horizontal = Math.abs(dx) > Math.abs(dy) * 0.7;
    if (horizontal) {
      return (dx > 0 ? YETI_RUN_FRAMES.right : YETI_RUN_FRAMES.left)[phase];
    }
    return (dy >= 0 ? YETI_RUN_FRAMES.down : YETI_RUN_FRAMES.up)[phase];
  }

  startYetiAttack(monster) {
    if (this.yetiAttack.active || this.yetiAttack.finished) return;

    this.yetiAttack = {
      active: true,
      finished: false,
      elapsed: 0,
      monster
    };
    this.gameOver = false;
    this.courseMessage = "O Yeti pegou você";
    this.player.speed = 0;
    this.player.vx = 0;
    this.player.actionTimer = 0;
    this.player.mode = 0;
    this.player.crashedUntil = 0;
    this.setPlayerState(PLAYER_STATE.FALLEN);
    this.player.sprite.visible = false;

    monster.attackActive = true;
    monster.collidable = false;
    monster.x = this.player.x;
    monster.y = this.player.y - 4;
    monster.spriteId = YETI_ATTACK_FRAMES[0];
    this.refreshSprite(monster);
    this.pauseCard.hidden = true;
    document.title = "SkiFree - O Yeti pegou você";
    this.syncPlayerDataset();
  }

  updateYetiAttack(dt) {
    const attack = this.yetiAttack;
    const monster = attack.monster;
    attack.elapsed += dt;

    if (monster) {
      const frameIndex = Math.min(
        YETI_ATTACK_FRAMES.length - 1,
        Math.floor(attack.elapsed / YETI_ATTACK_FRAME_SECONDS)
      );
      const spriteId = YETI_ATTACK_FRAMES[frameIndex];
      monster.x = this.player.x;
      monster.y = this.player.y - 4;
      if (monster.spriteId !== spriteId) {
        monster.spriteId = spriteId;
        this.refreshSprite(monster);
      }
    }

    if (attack.elapsed >= YETI_ATTACK_SECONDS) {
      attack.active = false;
      attack.finished = true;
      this.gameOver = true;
      this.pauseCard.textContent = "O Yeti pegou você";
      this.pauseCard.hidden = false;
    }

    this.syncPlayerDataset();
  }

  checkCollisions() {
    const player = this.player;
    if (hasCollisionRecoveryProtection(player)) return;

    const playerBox = this.boundsFor(player, 0.55);
    for (const object of this.objects) {
      if (!object.collidable || object.hit) continue;
      if (Math.abs(object.y - player.y) > 60 || Math.abs(object.x - player.x) > 80) continue;
      if (!this.intersects(playerBox, this.boundsFor(object, object.collisionScale || 0.7))) continue;

      const canClearObstacle = player.airHeight > Math.max(8, (object.height || 16) * 0.72);
      if (canClearObstacle && [OBJECT_KIND.TREE, OBJECT_KIND.OBSTACLE, OBJECT_KIND.DOG].includes(object.kind)) {
        continue;
      }

      if (object.kind === OBJECT_KIND.RAMP || object.kind === OBJECT_KIND.BUMP || object.kind === OBJECT_KIND.MOGUL) {
        this.launchTrick(object.kind);
        object.hit = true;
      } else if (object.kind === OBJECT_KIND.PATCH) {
        player.speed *= 0.5;
        object.hit = true;
      } else if (object.kind === OBJECT_KIND.DOG) {
        player.speed *= 0.5;
        this.setObjectState(object, DOG_STATES.ALERT);
        object.hit = true;
      } else if (object.kind === OBJECT_KIND.SIGN) {
        object.hit = true;
      } else if (object.kind === OBJECT_KIND.MONSTER) {
        this.startYetiAttack(object);
      } else {
        if (object.kind === OBJECT_KIND.ANIMATED && object.state < 0x19) {
          this.setObjectState(object, player.mode > 0 ? 0x1a : 0x19);
        } else if (object.kind === OBJECT_KIND.ACROBAT) {
          this.setObjectState(object, 0x22);
          this.addStyleScore(20);
        } else if (object.kind === OBJECT_KIND.OBSTACLE && object.spriteId === SPRITE.STUMP && player.airHeight > 0) {
          object.spriteId = SPRITE.BROKEN_STUMP;
          object.collidable = false;
          this.refreshSprite(object);
          player.speed *= 0.5;
          continue;
        }
        this.crashInto(object);
        return;
      }
    }
  }

  launchTrick(kind) {
    if (kind === OBJECT_KIND.MOGUL) this.player.pendingAction = 1;
    else if (kind === OBJECT_KIND.BUMP) this.player.pendingAction = 4;
    else this.player.pendingAction = Math.max(1, Math.round(this.player.speed));
    this.player.mode = 1;
    this.player.actionDuration = kind === OBJECT_KIND.RAMP
      ? RAMP_TRICK_SECONDS
      : kind === OBJECT_KIND.BUMP ? CLICK_TRICK_SECONDS : MOGUL_JUMP_SECONDS;
    this.player.actionTimer = this.player.actionDuration;
    this.player.actionElapsed = 0;
    this.player.actionPeak = kind === OBJECT_KIND.RAMP ? 36 : kind === OBJECT_KIND.BUMP ? 30 : 18;
    this.player.airHeight = 0;
    this.player.speed = Math.max(this.player.speed, kind === OBJECT_KIND.RAMP ? 5.2 : 4.1);
    this.setPlayerState(PLAYER_STATE.TRICK);
    this.addStyleScore(kind === OBJECT_KIND.RAMP ? 20 : kind === OBJECT_KIND.BUMP ? 8 : 6);
  }

  crashInto(object) {
    const wasAirborne = this.player.mode > 0 || this.player.airHeight > 0;
    this.player.speed *= 0.25;
    this.player.vx *= -0.25;
    this.player.actionTimer = 0;
    this.player.actionDuration = 0;
    this.player.actionElapsed = 0;
    this.player.actionPeak = 0;
    this.player.airHeight = 0;
    this.player.mode = 0;
    this.player.crashedUntil = 1.4;
    this.addStyleScore(-Math.min(15, this.styleScore));
    this.setPlayerState(wasAirborne ? PLAYER_STATE.FALLEN : PLAYER_STATE.CRASHED);

    if (wasAirborne && object.spriteId === SPRITE.TREE_DEAD) {
      object.kind = OBJECT_KIND.FIRE;
      object.state = 0x38;
      object.spriteId = SPRITE.FIRE_FIRST;
      object.collidable = false;
      object.stateTimer = 0;
      this.refreshSprite(object);
    }
  }

  spawnCourseUntil(targetY) {
    while (this.nextSpawnY < targetY) {
      this.spawnChunk(this.nextSpawnY);
      this.nextSpawnY += COURSE_STEP;
    }
  }

  spawnSideObjects() {
    let delta = this.player.x - this.sideSpawnAnchorX;
    const halfWidth = Math.max(360, this.viewport.width * 0.62);
    while (delta >= COURSE_STEP) {
      this.spawnWeightedObject(
        this.player.x + halfWidth,
        this.player.y + this.rng.range(-this.viewport.height * 0.35, this.viewport.height * 0.65)
      );
      this.sideSpawnAnchorX += COURSE_STEP;
      delta -= COURSE_STEP;
    }
    while (delta <= -COURSE_STEP) {
      this.spawnWeightedObject(
        this.player.x - halfWidth,
        this.player.y + this.rng.range(-this.viewport.height * 0.35, this.viewport.height * 0.65)
      );
      this.sideSpawnAnchorX -= COURSE_STEP;
      delta += COURSE_STEP;
    }
  }

  spawnChunk(y) {
    if (y < 120) return;

    const halfWidth = Math.max(360, this.viewport.width * 0.62);
    const x = this.player.x + this.rng.range(-halfWidth, halfWidth);
    const offsetY = y + this.rng.range(-30, 30);
    if (Math.abs(x) < 72 && offsetY < 520) return;
    this.spawnWeightedObject(x, offsetY);
  }

  spawnWeightedObject(x, y) {
    let choice;
    if (x >= COURSE_LANES.race.startMinX && x <= COURSE_LANES.race.startMaxX && y >= RACE_START_Y && y <= RACE_FINISH_Y) {
      choice = "mogul";
    } else if (x >= COURSE_LANES.treeSlalom.startMinX && x <= COURSE_LANES.treeSlalom.startMaxX && y >= RACE_START_Y && y <= LONG_COURSE_FINISH_Y) {
      choice = this.rng.int(0, 63) === 0 ? "dog" : "tree";
    } else if (x >= COURSE_LANES.freestyle.startMinX && x <= COURSE_LANES.freestyle.startMaxX && y >= RACE_START_Y && y <= LONG_COURSE_FINISH_Y) {
      choice = this.rng.weighted([
        { weight: 2, value: "tree" },
        { weight: 3, value: "bump" },
        { weight: 1, value: "mogul" },
        { weight: 2, value: "obstacle" },
        { weight: 2, value: "ramp" }
      ]);
    } else {
      choice = this.rng.weighted([
        { weight: 500, value: "tree" },
        { weight: 200, value: "bump" },
        { weight: 50, value: "mogul" },
        { weight: 200, value: "obstacle" },
        { weight: 20, value: "ramp" },
        { weight: 20, value: "npc" },
        { weight: 10, value: "dog" }
      ]);
    }

    if (choice === "tree") {
      this.addTree(x, y);
    } else if (choice === "obstacle") {
      const spriteId = this.rng.int(0, 3) === 0 ? SPRITE.STUMP : SPRITE.ROCK;
      this.addObject({ kind: OBJECT_KIND.OBSTACLE, spriteId, x, y, collidable: true, collisionScale: 0.68 });
    } else if (choice === "mogul") {
      this.addObject({ kind: OBJECT_KIND.MOGUL, spriteId: SPRITE.MOGULS, x, y, collidable: true, collisionScale: 0.74 });
    } else if (choice === "bump") {
      this.addBump(x, y);
    } else if (choice === "ramp") {
      this.addRamp(x, y);
    } else if (choice === "dog") {
      this.addDog(x, y);
    } else if (choice === "npc") {
      this.addNpcSkier(x, y);
    }
  }

  addTree(x, y) {
    const roll = this.rng.int(0, 7);
    const spriteId = roll === 0 ? SPRITE.TREE_DEAD : roll === 1 ? SPRITE.TREE_LARGE : SPRITE.TREE_SMALL;
    return this.addObject({ kind: OBJECT_KIND.TREE, spriteId, x, y, collidable: true, collisionScale: 0.58 });
  }

  addBump(x, y) {
    return this.addObject({
      kind: OBJECT_KIND.BUMP,
      spriteId: this.rng.int(0, 2) === 0 ? SPRITE.BUMP_LARGE : SPRITE.BUMP_SMALL,
      x,
      y,
      collidable: true,
      collisionScale: 0.76
    });
  }

  addRamp(x, y) {
    return this.addObject({
      kind: OBJECT_KIND.RAMP,
      spriteId: SPRITE.RAMP,
      x,
      y,
      collidable: true,
      collisionScale: 0.68
    });
  }

  addDog(x, y) {
    const vx = this.rng.chance(0.5) ? -0.55 : 0.55;
    return this.addObject({
      kind: OBJECT_KIND.DOG,
      state: DOG_STATES.WALK_A,
      spriteId: spriteForState(DOG_STATES.WALK_A),
      x,
      y,
      vx,
      collidable: true,
      collisionScale: 0.66
    });
  }

  addNpcSkier(x, y) {
    const state = NPC_SKIER_STATES[this.rng.int(0, NPC_SKIER_STATES.length - 1)];
    const motion = NPC_SKIER_MOTION[state];
    return this.addObject({
      kind: OBJECT_KIND.ANIMATED,
      state,
      spriteId: spriteForState(state),
      x,
      y,
      vx: motion.targetVx + this.rng.range(-0.12, 0.12),
      speed: motion.targetSpeed + this.rng.range(-0.2, 0.2),
      collidable: true,
      collisionScale: 0.62
    });
  }

  addAcrobat(x, y) {
    const state = this.rng.chance(0.5) ? 0x1f : 0x20;
    return this.addObject({
      kind: OBJECT_KIND.ACROBAT,
      state,
      spriteId: spriteForState(state),
      x,
      y,
      vx: state === 0x1f ? -2.25 : 2.25,
      speed: 4.5,
      collidable: true,
      collisionScale: 0.65
    });
  }

  spawnTopAcrobat() {
    return this.addAcrobat(
      this.player.x + this.rng.range(-this.viewport.width * 0.46, this.viewport.width * 0.46),
      this.player.y - this.viewport.height * 0.36 - 36
    );
  }

  pruneObjects() {
    const lowWater = this.player.y - this.viewport.height * 1.35;
    const sideWater = Math.max(720, this.viewport.width * 1.65);
    this.objects = this.objects.filter((object) => {
      if (object.permanent || object.kind === OBJECT_KIND.MONSTER) return true;
      if (object.y >= lowWater && Math.abs(object.x - this.player.x) <= sideWater) return true;
      this.removeSprite(object);
      return false;
    });

  }

  addObject(object) {
    object.renderScale = object.renderScale || 1;
    this.attachSprite(object);
    this.objects.push(object);
    return object;
  }

  attachSprite(object) {
    const material = object.localized
      ? this.localizedMaterial(object.spriteId)
      : this.assets.material(object.spriteId);
    const sprite = new THREE.Sprite(material);
    sprite.center.set(0.5, 0);
    object.sprite = sprite;
    this.scene.add(sprite);
    this.updateObjectSprite(object);
  }

  refreshSprite(object) {
    object.sprite.material = object.localized
      ? this.localizedMaterial(object.spriteId)
      : this.assets.material(object.spriteId);
    this.updateObjectSprite(object);
  }

  removeSprite(object) {
    if (!object.sprite) return;
    this.scene.remove(object.sprite);
    object.sprite = null;
    if (object.nameSprite) {
      this.scene.remove(object.nameSprite);
      object.nameSprite.material.dispose();
      object.nameTexture?.dispose();
      object.nameSprite = null;
    }
  }

  localizedMaterial(spriteId) {
    if (this.localizedMaterials.has(spriteId)) return this.localizedMaterials.get(spriteId);
    const labels = {
      [SPRITE.HELP_MOUSE]: ["MOUSE/TOQUE", "MOVA PARA", "VIRAR"],
      [SPRITE.HELP_KEYS]: ["TECLAS", "SETAS OU", "NUMPAD"],
      [SPRITE.START_LEFT]: ["← INÍCIO"],
      [SPRITE.START_RIGHT]: ["INÍCIO →"],
      [SPRITE.FINISH_LEFT]: ["← FIM"],
      [SPRITE.FINISH_RIGHT]: ["FIM →"],
      [SPRITE.SLALOM_SIGN]: ["CORRIDA"],
      [SPRITE.TREE_SLALOM_SIGN]: ["SLALOM", "ÁRVORES"],
      [SPRITE.FREESTYLE_SIGN]: ["ESTILO", "LIVRE"]
    };
    const lines = labels[spriteId] || [""];
    const { width, height } = this.assets.size(spriteId);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    const isHelp = spriteId === SPRITE.HELP_MOUSE || spriteId === SPRITE.HELP_KEYS;
    const panelHeight = isHelp ? height : Math.max(14, height - 10);
    context.imageSmoothingEnabled = false;
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, width, panelHeight);
    context.strokeStyle = isHelp ? "#ffffff" : "#101010";
    context.lineWidth = 1;
    if (!isHelp) context.strokeRect(0.5, 0.5, width - 1, panelHeight - 1);
    context.fillStyle = "#174f9e";
    context.font = `bold ${isHelp ? 7 : lines.length > 1 ? 7 : 8}px Arial`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    const lineHeight = isHelp ? 9 : 8;
    const startY = panelHeight / 2 - ((lines.length - 1) * lineHeight) / 2;
    lines.forEach((line, index) => context.fillText(line, width / 2, startY + index * lineHeight));
    if (!isHelp && panelHeight < height) {
      context.strokeStyle = "#101010";
      context.beginPath();
      context.moveTo(width / 2, panelHeight);
      context.lineTo(width / 2, height);
      context.stroke();
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      alphaTest: 0.05,
      depthTest: false,
      depthWrite: false
    });
    this.localizedMaterials.set(spriteId, material);
    return material;
  }

  updateObjectSprite(object) {
    const { width, height } = this.assets.size(object.spriteId);
    object.width = width;
    object.height = height;
    object.sprite.scale.set(width * object.renderScale, height * object.renderScale, 1);
    this.positionSprite(object);
  }

  positionSprite(object) {
    if (!object.sprite) return;
    object.sprite.position.set(object.x, -object.y + (object.airHeight || 0), this.depthForObject(object));
    object.sprite.renderOrder = Math.floor(object.y);
    if (object.nameSprite) {
      object.nameSprite.position.set(object.x, -object.y + (object.airHeight || 0) + object.height + 4, 1);
      object.nameSprite.renderOrder = Math.floor(object.y) + 2;
    }
  }

  depthForObject(object) {
    return object.kind === OBJECT_KIND.PLAYER ? CAMERA_PLAYER_DEPTH : 0;
  }

  setPlayerState(state) {
    if (this.player.state === state) {
      this.syncPlayerDataset();
      return;
    }
    this.player.state = state;
    this.player.spriteId = spriteForState(state);
    this.refreshSprite(this.player);
    this.syncPlayerDataset();
  }

  syncPlayerDataset() {
    if (!this.player) return;
    const activeMode = this.activeCourseMode();
    const displayMode = this.displayCourseMode();
    this.canvas.dataset.playerState = String(this.player.state);
    this.canvas.dataset.playerMode = String(this.player.mode);
    this.canvas.dataset.playerActionTimer = this.player.actionTimer.toFixed(3);
    this.canvas.dataset.simulationFps = String(SIMULATION_FPS);
    this.canvas.dataset.cameraMode = "orthographic-2d";
    this.canvas.dataset.cameraDepthRange = String(CAMERA_DEPTH_RANGE);
    this.canvas.dataset.snowParticles = String(this.snow?.count || 0);
    this.canvas.dataset.snowFieldWidth = String(Math.floor(this.snow?.fieldWidth || 0));
    this.canvas.dataset.snowFieldHeight = String(Math.floor(this.snow?.fieldHeight || 0));
    this.canvas.dataset.skiTrackSegments = String(this.skiTracks?.segments || 0);
    this.canvas.dataset.skiTrackMaxSegments = String(SKI_TRACK_MAX_SEGMENTS);
    this.canvas.dataset.styleEffectCount = String(this.styleEffects?.childElementCount || 0);
    const rivals = this.objects?.filter((object) => object.kind === RIVAL_KIND) || [];
    this.canvas.dataset.rivalCount = String(rivals.length);
    this.canvas.dataset.rivalScores = rivals.map((rival) => Math.floor(rival.styleScore)).join(",");
    this.canvas.dataset.gateEffectCount = "0";
    this.canvas.dataset.gatePassCount = String(this.gatePassCount || 0);
    this.canvas.dataset.lastGateStyleAward = String(this.lastGateStyleAward || 0);
    this.canvas.dataset.yetiChaseDistanceMeters = String(YETI_CHASE_DISTANCE_METERS);
    this.canvas.dataset.yetiChaseDistancePx = String(CHASE_DISTANCE);
    this.canvas.dataset.courseMode = this.activeCourseName() || this.lastFinishedCourse || "";
    this.canvas.dataset.courseActive = activeMode ? "1" : "0";
    this.canvas.dataset.courseFinished = displayMode?.finished ? "1" : "0";
    this.canvas.dataset.courseMissedGates = String(displayMode?.missedGates || 0);
    this.canvas.dataset.coursePenaltyMs = String(Math.floor(displayMode?.penaltyMs || 0));
    this.canvas.dataset.courseMessage = this.courseMessage;
    this.canvas.dataset.yetiAttackActive = this.yetiAttack.active ? "1" : "0";
    this.canvas.dataset.yetiAttackFinished = this.yetiAttack.finished ? "1" : "0";
    this.canvas.dataset.gameOver = this.gameOver ? "1" : "0";
  }

  boundsFor(object, scale = 1) {
    const width = (object.width || 24) * scale;
    const height = (object.height || 24) * scale;
    const bottom = object.y - (object.airHeight || 0);
    return {
      left: object.x - width / 2,
      right: object.x + width / 2,
      top: bottom - height,
      bottom
    };
  }

  intersects(a, b) {
    return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
  }

  updateCamera() {
    this.camera.position.x = this.player.x;
    this.camera.position.y = -this.player.y - this.viewport.height * 0.16;
    this.camera.updateMatrixWorld();
  }

  render() {
    this.updatePlayerShadow();
    if (this.player) this.positionSprite(this.player);
    for (const object of this.objects) this.positionSprite(object);
    this.renderer.render(this.scene, this.camera);
  }

  formatTime(ms) {
    const boundedMs = Math.max(0, Math.floor(ms));
    const hundredths = Math.floor((boundedMs % 1000) / 10);
    const totalSeconds = Math.floor(boundedMs / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600);
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(hundredths).padStart(2, "0")}`;
  }

  hudTimeMs() {
    const mode = this.displayCourseMode();
    if (!mode) return this.elapsedMs;
    if (mode.finished) return mode.resultMs;
    return mode.elapsedMs + mode.penaltyMs;
  }

  hudDistanceMeters() {
    const activeMode = this.activeCourseMode();
    const distance = activeMode
      ? activeMode.finishY - this.player.y
      : this.player.y;
    return Math.max(0, Math.floor(distance / PIXELS_PER_METER));
  }

  updateHud() {
    this.syncPlayerDataset();

    const distanceMeters = this.hudDistanceMeters();
    const speedMeters = Math.max(0, (this.player.speed * 60) / PIXELS_PER_METER);

    this.hud.time.textContent = this.formatTime(this.hudTimeMs());
    this.hud.distance.textContent = `${distanceMeters}m`;
    this.hud.speed.textContent = `${Math.floor(speedMeters)}m/s`;
    this.hud.style.textContent = `${Math.floor(this.styleScore)}`;
  }

  onPointerMove(event) {
    if (event.pointerType === "touch" && this.input.touchPointerId !== event.pointerId) return;
    this.input.pointerActive = true;
    this.input.pointerX = event.clientX;
    this.input.pointerY = event.clientY;
  }

  nextAirTrickState(state) {
    const cycle = {
      [PLAYER_STATE.TRICK]: PLAYER_STATE.SPIN,
      [PLAYER_STATE.TRICK_LEFT]: PLAYER_STATE.FLIP_LEFT,
      [PLAYER_STATE.TRICK_RIGHT]: PLAYER_STATE.FLIP_RIGHT,
      [PLAYER_STATE.TRICK_BACK]: PLAYER_STATE.SPIN_BACK,
      [PLAYER_STATE.SPIN]: PLAYER_STATE.SPIN_BACK,
      [PLAYER_STATE.SPIN_BACK]: PLAYER_STATE.TRICK,
      [PLAYER_STATE.FLIP_LEFT]: PLAYER_STATE.TRICK_LEFT,
      [PLAYER_STATE.FLIP_RIGHT]: PLAYER_STATE.TRICK_RIGHT,
      [PLAYER_STATE.JUMP_LEFT]: PLAYER_STATE.FLIP_LEFT,
      [PLAYER_STATE.JUMP_RIGHT]: PLAYER_STATE.FLIP_RIGHT
    };
    return cycle[state] || PLAYER_STATE.TRICK;
  }

  onPointerDown(event) {
    if (this.closeCourseResults()) return;
    if (this.gameOver || this.yetiAttack.finished) {
      this.restart();
      return;
    }
    if (this.paused) {
      this.setPaused(false);
      return;
    }
    if (this.player.state === PLAYER_STATE.CRASHED || this.player.state === PLAYER_STATE.FALLEN) {
      return;
    }
    this.input.pointerActive = true;
    this.input.pointerX = event.clientX;
    this.input.pointerY = event.clientY;
    if (event.pointerType === "touch") {
      event.preventDefault();
      this.input.touchPointerId = event.pointerId;
      this.input.touchDownAt = performance.now();
      this.input.touchStartX = event.clientX;
      this.input.touchStartY = event.clientY;
      return;
    }
    this.performPointerAction();
  }

  onPointerUp(event, cancelled = false) {
    if (event.pointerType !== "touch" || this.input.touchPointerId !== event.pointerId) return;
    event.preventDefault();
    const heldMs = performance.now() - this.input.touchDownAt;
    const moved = Math.hypot(
      event.clientX - this.input.touchStartX,
      event.clientY - this.input.touchStartY
    );
    this.input.touchPointerId = null;
    this.input.pointerActive = false;
    if (classifyTouchGesture(heldMs, moved, cancelled) !== "tap") return;
    if (this.paused || this.gameOver || this.yetiAttack.active) return;
    if (this.player.state === PLAYER_STATE.CRASHED || this.player.state === PLAYER_STATE.FALLEN) return;
    this.performPointerAction();
  }

  performPointerAction() {
    if (this.player.mode === 0) {
      this.player.mode = 1;
      this.player.pendingAction = 4;
      this.player.actionDuration = CLICK_TRICK_SECONDS;
      this.player.actionElapsed = 0;
      this.player.actionTimer = CLICK_TRICK_SECONDS;
      this.player.manualTrickTimer = 0.2;
      this.setPlayerState(PLAYER_STATE.TRICK);
      this.addStyleScore(4);
    } else {
      this.player.manualTrickTimer = 0.2;
      this.setPlayerState(this.nextAirTrickState(this.player.state));
      this.addStyleScore(3);
    }
  }

  onKeyDown(event) {
    this.input.keys.add(event.code);

    if (!this.resultCard.hidden) {
      if (["Enter", "Space", "Escape"].includes(event.code)) {
        event.preventDefault();
        this.closeCourseResults();
      }
      return;
    }

    if (event.code === "F2" || event.key === "r") {
      event.preventDefault();
      this.restart();
      return;
    }
    if (event.code === "F3" || event.code === "Escape") {
      event.preventDefault();
      this.setPaused(!this.paused);
      return;
    }
    if (event.key === "t" && this.paused) {
      event.preventDefault();
      this.update(TICK_MS / 1000);
      this.render();
      return;
    }
    if (event.key === "f") {
      event.preventDefault();
      this.debugFast = !this.debugFast;
      return;
    }
    if (this.paused || this.player.state === PLAYER_STATE.CRASHED || this.player.state === PLAYER_STATE.FALLEN) return;

    const handled = this.applyNavigationKey(event);
    if (handled) event.preventDefault();
  }

  applyNavigationKey(event) {
    const code = event.code;
    const state = this.player.state;
    let nextState = state;

    if (code === "ArrowLeft" || code === "Numpad4") {
      nextState = TURN_TRANSITION[state]?.[0] ?? state;
      if (nextState === PLAYER_STATE.HARD_LEFT) {
        this.player.turnVelocity = Math.max(-8, this.player.turnVelocity - 8);
      }
    } else if (code === "ArrowRight" || code === "Numpad6") {
      nextState = TURN_TRANSITION[state]?.[1] ?? state;
      if (nextState === PLAYER_STATE.HARD_RIGHT) {
        this.player.turnVelocity = Math.min(8, this.player.turnVelocity + 8);
      }
    } else if (code === "ArrowUp" || code === "Numpad8") {
      nextState = this.upTransition(state);
    } else if (code === "ArrowDown" || code === "Numpad2") {
      nextState = this.downTransition(state);
    } else if (code === "PageUp" || code === "Numpad9") {
      if (this.player.mode === 0) nextState = PLAYER_STATE.RIGHT_3;
    } else if (code === "PageDown" || code === "Numpad3") {
      if (this.player.mode === 0) nextState = PLAYER_STATE.RIGHT_1;
    } else if (code === "Home" || code === "Numpad7") {
      if (this.player.mode === 0) nextState = PLAYER_STATE.LEFT_3;
    } else if (code === "End" || code === "Numpad1") {
      if (this.player.mode === 0) nextState = PLAYER_STATE.LEFT_1;
    } else if (code === "Insert" || code === "Numpad0" || code === "Space") {
      if (this.player.mode === 0) {
        this.player.mode = 1;
        this.player.pendingAction = 2;
        this.player.actionDuration = KEY_TRICK_SECONDS;
        this.player.actionElapsed = 0;
        this.player.actionTimer = KEY_TRICK_SECONDS;
        nextState = PLAYER_STATE.TRICK;
        this.addStyleScore(4);
      } else {
        nextState = this.nextAirTrickState(state);
      }
    } else {
      return false;
    }

    this.setPlayerState(nextState);
    if (this.player.mode > 0) this.player.manualTrickTimer = 0.2;
    if (this.player.mode > 0 && this.isStyleState(nextState) && nextState !== state) {
      this.addStyleScore(2);
    }
    return true;
  }

  isStyleState(state) {
    return [
      PLAYER_STATE.TRICK,
      PLAYER_STATE.TRICK_LEFT,
      PLAYER_STATE.TRICK_RIGHT,
      PLAYER_STATE.TRICK_BACK,
      PLAYER_STATE.SPIN,
      PLAYER_STATE.SPIN_BACK,
      PLAYER_STATE.FLIP_LEFT,
      PLAYER_STATE.FLIP_RIGHT,
      PLAYER_STATE.JUMP_LEFT,
      PLAYER_STATE.JUMP_RIGHT
    ].includes(state);
  }

  upTransition(state) {
    if ([PLAYER_STATE.LEFT_3, PLAYER_STATE.HARD_LEFT, PLAYER_STATE.RECOVERING].includes(state)) {
      if (this.player.actionTimer === 0) {
        this.player.actionTimer = MOGUL_JUMP_SECONDS;
        return PLAYER_STATE.JUMP_LEFT;
      }
      return state;
    }
    if ([PLAYER_STATE.RIGHT_3, PLAYER_STATE.HARD_RIGHT].includes(state)) {
      if (this.player.actionTimer === 0) {
        this.player.actionTimer = MOGUL_JUMP_SECONDS;
        return PLAYER_STATE.JUMP_RIGHT;
      }
      return state;
    }
    const trickCycle = {
      [PLAYER_STATE.TRICK]: PLAYER_STATE.SPIN,
      [PLAYER_STATE.TRICK_LEFT]: PLAYER_STATE.FLIP_LEFT,
      [PLAYER_STATE.TRICK_RIGHT]: PLAYER_STATE.FLIP_RIGHT,
      [PLAYER_STATE.SPIN]: PLAYER_STATE.SPIN_BACK,
      [PLAYER_STATE.SPIN_BACK]: PLAYER_STATE.TRICK
    };
    return trickCycle[state] || state;
  }

  downTransition(state) {
    if (this.player.mode === 0) return PLAYER_STATE.STRAIGHT;
    const reverse = {
      [PLAYER_STATE.TRICK]: PLAYER_STATE.SPIN_BACK,
      [PLAYER_STATE.SPIN]: PLAYER_STATE.TRICK,
      [PLAYER_STATE.SPIN_BACK]: PLAYER_STATE.SPIN,
      [PLAYER_STATE.FLIP_LEFT]: PLAYER_STATE.TRICK_LEFT,
      [PLAYER_STATE.FLIP_RIGHT]: PLAYER_STATE.TRICK_RIGHT
    };
    return reverse[state] || state;
  }

  setPaused(paused) {
    if (!this.started) return;
    if (this.gameOver) return;
    if (!this.resultCard.hidden) return;
    this.paused = paused;
    if (paused) {
      this.input.pointerActive = false;
      this.input.touchPointerId = null;
    }
    this.pauseCard.textContent = "Pausado";
    this.pauseCard.hidden = !paused;
    document.title = paused ? "Ski pausado — pressione F3 para continuar" : "SkiFree";
  }
}

const game = new SkiFreeGame();
window.skiFreeGame = game;
game.start().catch((error) => {
  console.error(error);
  const loadCard = document.querySelector("#load-card");
  loadCard.textContent = "Falha ao carregar";
});
