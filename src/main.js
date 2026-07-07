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

const SIMULATION_FPS = 60;
const TICK_MS = 1000 / SIMULATION_FPS;
const PIXELS_PER_METER = 16;
const MAX_FRAME_SECONDS = 0.08;
const COURSE_STEP = 120;
const CAMERA_FOV_DEGREES = 45;
const CAMERA_DEPTH_RANGE = 90;
const CAMERA_PLAYER_DEPTH = 12;
const SNOW_PARTICLE_COUNT = 520;
const SNOW_FIELD_SCALE = 1.65;
const SNOW_MIN_Z = -180;
const SNOW_MAX_Z = 85;
const SKI_TRACK_MAX_SEGMENTS = 560;
const SKI_TRACK_SAMPLE_DISTANCE = 7;
const SKI_TRACK_RESET_DISTANCE = 90;
const SKI_TRACK_SEPARATION = 9;
const SKI_TRACK_WIDTH = 2.2;
const SKI_TRACK_Z = 1.5;
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
const NPC_SKIER_STATE_SECONDS = 0.18;
const NPC_SKIER_STATES = [0x16, 0x17, 0x18];
const NPC_SKIER_MOTION = Object.freeze({
  [0x16]: { targetVx: -0.42, targetSpeed: 3.05 },
  [0x17]: { targetVx: 0, targetSpeed: 3.35 },
  [0x18]: { targetVx: 0.42, targetSpeed: 3.05 }
});
const GATE_PASS_STYLE_POINTS = 12;
const GATE_PASS_EFFECT_SECONDS = 0.7;
const GATE_PASS_EFFECT_PARTICLES = 18;
const YETI_ATTACK_SECONDS = 1.7;
const YETI_ATTACK_FRAME_SECONDS = 0.2;
const YETI_ATTACK_FRAMES = [76, 77, 78, 79, 80, 81];
const RACE_START_Y = 0x0280;
const RACE_FINISH_Y = 0x21c0;
const LONG_COURSE_FINISH_Y = 0x4100;
const GATE_PENALTY_MS = 5000;

const COURSE_LANES = Object.freeze({
  race: {
    label: "Race",
    startMinX: -0x0240,
    startMaxX: -0x0140,
    signX: -448,
    finishY: RACE_FINISH_Y
  },
  freestyle: {
    label: "Free style",
    startMinX: -0x00a0,
    startMaxX: 0x00a0,
    signX: 0,
    finishY: LONG_COURSE_FINISH_Y
  },
  treeSlalom: {
    label: "Tree Slalom",
    startMinX: 0x0140,
    startMaxX: 0x0200,
    signX: 416,
    finishY: LONG_COURSE_FINISH_Y
  }
});

class SeededRandom {
  constructor(seed = 0x51f15eed) {
    this.state = seed >>> 0;
  }

  next() {
    this.state = (1664525 * this.state + 1013904223) >>> 0;
    return this.state / 0x100000000;
  }

  range(min, max) {
    return min + (max - min) * this.next();
  }

  int(min, max) {
    return Math.floor(this.range(min, max + 1));
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
    const cornerColors = [
      this.pixelAt(data, width, 0, 0),
      this.pixelAt(data, width, width - 1, 0),
      this.pixelAt(data, width, 0, height - 1),
      this.pixelAt(data, width, width - 1, height - 1)
    ];
    const visited = new Uint8Array(width * height);
    const stack = [];

    const enqueue = (x, y) => {
      if (x < 0 || y < 0 || x >= width || y >= height) return;
      const index = y * width + x;
      if (visited[index]) return;
      if (!this.isBackgroundPixel(data, index * 4, cornerColors)) return;
      visited[index] = 1;
      stack.push(index);
    };

    for (let x = 0; x < width; x += 1) {
      enqueue(x, 0);
      enqueue(x, height - 1);
    }
    for (let y = 0; y < height; y += 1) {
      enqueue(0, y);
      enqueue(width - 1, y);
    }

    while (stack.length > 0) {
      const index = stack.pop();
      const offset = index * 4;
      data[offset + 3] = 0;
      const x = index % width;
      const y = (index - x) / width;
      enqueue(x + 1, y);
      enqueue(x - 1, y);
      enqueue(x, y + 1);
      enqueue(x, y - 1);
    }

    ctx.putImageData(frame, 0, 0);
    return { canvas, width, height };
  }

  pixelAt(data, width, x, y) {
    const offset = (y * width + x) * 4;
    return [data[offset], data[offset + 1], data[offset + 2]];
  }

  isBackgroundPixel(data, offset, cornerColors) {
    const r = data[offset];
    const g = data[offset + 1];
    const b = data[offset + 2];
    return cornerColors.some(([cr, cg, cb]) => {
      const dr = r - cr;
      const dg = g - cg;
      const db = b - cb;
      return dr * dr + dg * dg + db * db <= 64;
    });
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

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: false,
      alpha: false
    });
    this.renderer.setClearColor(0xf7f8f4, 1);
    this.renderer.sortObjects = true;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(CAMERA_FOV_DEGREES, 4 / 3, 0.1, 5000);
    this.camera.position.z = 800;
    this.assets = new AssetStore(`${import.meta.env.BASE_URL}assets/bitmaps`);

    this.viewport = { width: 800, height: 600 };
    this.input = {
      pointerActive: false,
      pointerX: 0,
      pointerY: 0,
      keys: new Set()
    };
    this.lastTime = performance.now();
    this.accumulatorMs = 0;
    this.debugFast = false;
    this.paused = false;
    this.started = false;
    this.gateEffects = [];
    this.skiTracks = this.createSkiTrackSystem();
    this.scene.add(this.skiTracks.mesh);
    this.snowTime = 0;
    this.snow = this.createSnowSystem();
    this.scene.add(this.snow.points);

    this.resize = this.resize.bind(this);
    this.frame = this.frame.bind(this);
  }

  async start() {
    window.addEventListener("resize", this.resize);
    window.addEventListener("keydown", (event) => this.onKeyDown(event));
    window.addEventListener("keyup", (event) => this.input.keys.delete(event.code));
    window.addEventListener("pointermove", (event) => this.onPointerMove(event));
    window.addEventListener("pointerdown", (event) => this.onPointerDown(event));
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
    this.camera.aspect = width / height;
    this.camera.position.z = height / (2 * Math.tan(THREE.MathUtils.degToRad(CAMERA_FOV_DEGREES) / 2));
    this.camera.updateProjectionMatrix();
    if (this.snow) this.resetSnowParticles();
  }

  createSnowSystem() {
    const positions = new Float32Array(SNOW_PARTICLE_COUNT * 3);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0xaec2d5,
      size: 2.4,
      transparent: true,
      opacity: 0.74,
      sizeAttenuation: false,
      depthTest: false,
      depthWrite: false
    });
    const points = new THREE.Points(geometry, material);
    points.renderOrder = 100000;
    points.frustumCulled = false;
    const snow = {
      count: SNOW_PARTICLE_COUNT,
      points,
      geometry,
      positions,
      localX: new Float32Array(SNOW_PARTICLE_COUNT),
      localY: new Float32Array(SNOW_PARTICLE_COUNT),
      localZ: new Float32Array(SNOW_PARTICLE_COUNT),
      fallSpeed: new Float32Array(SNOW_PARTICLE_COUNT),
      driftSpeed: new Float32Array(SNOW_PARTICLE_COUNT),
      phase: new Float32Array(SNOW_PARTICLE_COUNT)
    };
    this.resetSnowParticles(snow);
    return snow;
  }

  resetSnowParticles(snow = this.snow) {
    const rng = new SeededRandom(0x5a0f1ce);
    const width = this.viewport.width * SNOW_FIELD_SCALE;
    const height = this.viewport.height * SNOW_FIELD_SCALE;
    snow.fieldWidth = width;
    snow.fieldHeight = height;
    for (let i = 0; i < snow.count; i += 1) {
      snow.localX[i] = rng.range(-width / 2, width / 2);
      snow.localY[i] = rng.range(-height / 2, height / 2);
      snow.localZ[i] = rng.range(SNOW_MIN_Z, SNOW_MAX_Z);
      snow.fallSpeed[i] = rng.range(42, 128);
      snow.driftSpeed[i] = rng.range(-22, 18);
      snow.phase[i] = rng.range(0, Math.PI * 2);
    }
    this.updateSnow(0, snow);
  }

  updateSnow(dt, snow = this.snow) {
    if (!snow) return;
    this.snowTime += dt;
    const width = this.viewport.width * SNOW_FIELD_SCALE;
    const height = this.viewport.height * SNOW_FIELD_SCALE;
    snow.fieldWidth = width;
    snow.fieldHeight = height;
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    for (let i = 0; i < snow.count; i += 1) {
      const sway = Math.sin(this.snowTime * 1.7 + snow.phase[i]) * 12;
      snow.localX[i] += (snow.driftSpeed[i] + sway) * dt;
      snow.localY[i] -= snow.fallSpeed[i] * dt;

      while (snow.localX[i] < -halfWidth) snow.localX[i] += width;
      while (snow.localX[i] > halfWidth) snow.localX[i] -= width;
      while (snow.localY[i] < -halfHeight) {
        snow.localY[i] += height;
        snow.localX[i] += 137;
      }
      while (snow.localY[i] > halfHeight) snow.localY[i] -= height;

      const offset = i * 3;
      snow.positions[offset] = this.camera.position.x + snow.localX[i];
      snow.positions[offset + 1] = this.camera.position.y + snow.localY[i];
      snow.positions[offset + 2] = snow.localZ[i];
    }
    snow.geometry.attributes.position.needsUpdate = true;
  }

  createSkiTrackSystem() {
    const floatsPerSegment = 36;
    const positions = new Float32Array(SKI_TRACK_MAX_SEGMENTS * floatsPerSegment);
    const geometry = new THREE.BufferGeometry();
    const position = new THREE.BufferAttribute(positions, 3);
    position.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute("position", position);
    geometry.setDrawRange(0, 0);
    const material = new THREE.MeshBasicMaterial({
      color: 0xaeb9c2,
      transparent: true,
      opacity: 0.68,
      depthTest: false,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.renderOrder = -10000;
    mesh.frustumCulled = false;
    return {
      maxSegments: SKI_TRACK_MAX_SEGMENTS,
      floatsPerSegment,
      positions,
      geometry,
      mesh,
      segmentCount: 0,
      previous: null
    };
  }

  resetSkiTrackMarks() {
    if (!this.skiTracks) return;
    this.skiTracks.segmentCount = 0;
    this.skiTracks.previous = null;
    this.skiTracks.geometry.setDrawRange(0, 0);
    this.skiTracks.geometry.attributes.position.needsUpdate = true;
  }

  restart() {
    if (this.player) this.removeSprite(this.player);
    for (const object of this.objects || []) this.removeSprite(object);
    for (const trail of this.trails || []) this.scene.remove(trail.sprite);
    for (const effect of this.gateEffects || []) this.removeGatePassEffect(effect);

    this.rng = new SeededRandom();
    this.objects = [];
    this.trails = [];
    this.gateEffects = [];
    this.resetSkiTrackMarks();
    this.nextSpawnY = -120;
    this.elapsedMs = 0;
    this.styleScore = 0;
    this.gatePassCount = 0;
    this.lastGateStyleAward = 0;
    this.lastTrailY = -9999;
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
    document.title = "SkiFree";
    this.pauseCard.textContent = "Paused";
    this.pauseCard.hidden = true;

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
      renderScale: 1,
      collidable: true
    };
    this.attachSprite(this.player);
    this.player.sprite.visible = true;
    this.syncPlayerDataset();

    this.addCourseMarkers();

    this.spawnCourseUntil(this.viewport.height * 2);
    this.updateCamera();
    this.updateHud();
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
        gates: this.buildGateSet(COURSE_LANES.race.signX, 1120, 680, 11, 74)
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
        gates: this.buildGateSet(COURSE_LANES.treeSlalom.signX, 1180, 760, 19, 70)
      }
    };
  }

  buildGateSet(centerX, startY, stepY, count, halfWidth) {
    return Array.from({ length: count }, (_, index) => {
      const drift = index % 2 === 0 ? -30 : 30;
      const x = centerX + drift;
      return {
        x,
        y: startY + index * stepY,
        left: x - halfWidth,
        right: x + halfWidth,
        passed: false,
        missed: false
      };
    });
  }

  addCourseMarkers() {
    this.addCourseSignPair(COURSE_LANES.race.signX, RACE_START_Y - 72, SPRITE.SLALOM_SIGN);
    this.addCourseSignPair(COURSE_LANES.freestyle.signX, RACE_START_Y - 72, SPRITE.FREESTYLE_SIGN);
    this.addCourseSignPair(COURSE_LANES.treeSlalom.signX, RACE_START_Y - 72, SPRITE.TREE_SLALOM_SIGN);

    this.addCourseSignPair(COURSE_LANES.race.signX, RACE_FINISH_Y, SPRITE.FINISH_LEFT, SPRITE.FINISH_RIGHT);
    this.addCourseSignPair(COURSE_LANES.freestyle.signX, LONG_COURSE_FINISH_Y, SPRITE.FINISH_LEFT, SPRITE.FINISH_RIGHT);
    this.addCourseSignPair(COURSE_LANES.treeSlalom.signX, LONG_COURSE_FINISH_Y, SPRITE.FINISH_LEFT, SPRITE.FINISH_RIGHT);

    for (const mode of [this.courseModes.race, this.courseModes.treeSlalom]) {
      for (const [index, gate] of mode.gates.entries()) {
        this.addGateSprite(gate, index);
      }
    }
  }

  addCourseSignPair(x, y, leftSpriteId, rightSpriteId = leftSpriteId) {
    this.addObject({
      kind: OBJECT_KIND.SIGN,
      spriteId: leftSpriteId,
      x: x - 34,
      y,
      collidable: false
    });
    this.addObject({
      kind: OBJECT_KIND.SIGN,
      spriteId: rightSpriteId,
      x: x + 34,
      y,
      collidable: false
    });
  }

  addGateSprite(gate, index) {
    const isLeft = index % 2 === 0;
    this.addObject({
      kind: OBJECT_KIND.MARKER,
      spriteId: isLeft ? SPRITE.FLAG_RED : SPRITE.FLAG_BLUE,
      x: isLeft ? gate.left : gate.right,
      y: gate.y,
      collidable: false
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
    this.updateSnow(scaledDt);

    if (this.yetiAttack.active) {
      this.updateYetiAttack(scaledDt);
      this.updateCamera();
      this.updateHud();
      return;
    }

    if (this.gameOver) {
      this.updateCamera();
      this.updateHud();
      return;
    }

    this.elapsedMs += scaledDt * 1000;

    this.applyPointerState();
    this.integratePlayer(scaledDt);
    this.updateCourseModes(previousPlayer, scaledDt);
    this.updateGatePassEffects(scaledDt);
    this.updateCourseObjects(scaledDt);
    this.checkCollisions();
    this.updateTrails();
    this.spawnCourseUntil(this.player.y + this.viewport.height * 2.1);
    this.pruneObjects();
    this.updateCamera();
    this.updateHud();
  }

  integratePlayer(dt) {
    const player = this.player;

    if (player.actionTimer > 0) {
      player.actionTimer = Math.max(0, player.actionTimer - dt);
      if (player.actionTimer === 0 && player.state !== PLAYER_STATE.CRASHED) {
        player.pendingAction = 0;
        player.mode = 0;
        this.setPlayerState(PLAYER_STATE.STRAIGHT);
      }
    }

    if (player.crashedUntil > 0) {
      player.crashedUntil = Math.max(0, player.crashedUntil - dt);
      if (player.crashedUntil === 0 && player.state === PLAYER_STATE.CRASHED) {
        this.setPlayerState(PLAYER_STATE.RECOVERING);
      }
    }

    const motion = PLAYER_MOTION[player.state] || PLAYER_MOTION[0];
    const vxTarget = motion.targetVx + player.turnVelocity * 0.07;
    const turnBlend = Math.min(1, dt * motion.turn);
    const speedBlend = Math.min(1, dt * motion.accel);
    player.vx += (vxTarget - player.vx) * turnBlend;
    player.speed += (motion.targetSpeed - player.speed) * speedBlend;

    player.x += player.vx * dt * 60;
    player.y += Math.max(0, player.speed) * dt * 60;

    if (player.state === PLAYER_STATE.RECOVERING && player.speed > 1.0) {
      this.setPlayerState(PLAYER_STATE.STRAIGHT);
    }
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
      gate.styleAwarded = false;
    });
    this.courseMessage = `${mode.label} started`;
  }

  finishCourseMode(mode) {
    mode.active = false;
    mode.finished = true;
    mode.resultMs = mode.elapsedMs + mode.penaltyMs;
    this.lastFinishedCourse = Object.entries(this.courseModes)
      .find(([, value]) => value === mode)?.[0] || "";
    this.courseMessage = mode.label === "Free style"
      ? `${mode.label} finished: ${Math.floor(this.styleScore)} style`
      : `${mode.label} finished: ${this.formatTime(mode.resultMs)}`;
  }

  checkCourseGates(mode, previousPlayer) {
    while (mode.nextGate < mode.gates.length) {
      const gate = mode.gates[mode.nextGate];
      if (!this.crossedY(previousPlayer.y, this.player.y, gate.y)) break;

      const crossingX = this.xAtY(previousPlayer, this.player, gate.y);
      if (crossingX >= gate.left && crossingX <= gate.right) {
        gate.passed = true;
        gate.styleAwarded = true;
        this.addStyleScore(GATE_PASS_STYLE_POINTS);
        this.lastGateStyleAward = GATE_PASS_STYLE_POINTS;
        this.gatePassCount += 1;
        this.spawnGatePassEffect(crossingX, gate.y);
      } else {
        gate.missed = true;
        mode.missedGates += 1;
        mode.penaltyMs += GATE_PENALTY_MS;
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

  addStyleScore(amount) {
    this.styleScore += amount;
  }

  spawnGatePassEffect(x, y) {
    const group = new THREE.Group();
    group.position.set(x, -y, CAMERA_PLAYER_DEPTH + 10);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x008cff,
      transparent: true,
      opacity: 0.82,
      depthTest: false,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffc400,
      transparent: true,
      opacity: 0.5,
      depthTest: false,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(new THREE.RingGeometry(10, 12, 48), ringMaterial);
    const glow = new THREE.Mesh(new THREE.RingGeometry(18, 21, 64), glowMaterial);
    ring.renderOrder = 95000;
    glow.renderOrder = 94999;
    group.add(glow);
    group.add(ring);

    const particlePositions = new Float32Array(GATE_PASS_EFFECT_PARTICLES * 3);
    const particleVelocities = new Float32Array(GATE_PASS_EFFECT_PARTICLES * 3);
    for (let i = 0; i < GATE_PASS_EFFECT_PARTICLES; i += 1) {
      const angle = (Math.PI * 2 * i) / GATE_PASS_EFFECT_PARTICLES + this.rng.range(-0.18, 0.18);
      const speed = this.rng.range(38, 76);
      const offset = i * 3;
      particleVelocities[offset] = Math.cos(angle) * speed;
      particleVelocities[offset + 1] = Math.sin(angle) * speed;
      particleVelocities[offset + 2] = this.rng.range(-2, 2);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x005dff,
      size: 4.8,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: false,
      depthTest: false,
      depthWrite: false
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    particles.renderOrder = 95001;
    group.add(particles);

    const effect = {
      age: 0,
      duration: GATE_PASS_EFFECT_SECONDS,
      group,
      ring,
      glow,
      particles,
      particlePositions,
      particleVelocities,
      geometries: [ring.geometry, glow.geometry, particleGeometry],
      materials: [ringMaterial, glowMaterial, particleMaterial]
    };
    this.scene.add(group);
    this.gateEffects.push(effect);
  }

  updateGatePassEffects(dt) {
    if (!this.gateEffects.length) return;
    this.gateEffects = this.gateEffects.filter((effect) => {
      effect.age += dt;
      const t = Math.min(1, effect.age / effect.duration);
      const fade = (1 - t) * (1 - t);
      effect.ring.scale.setScalar(1 + t * 2.4);
      effect.glow.scale.setScalar(0.8 + t * 2.9);
      effect.ring.material.opacity = 0.82 * fade;
      effect.glow.material.opacity = 0.5 * fade;
      effect.particles.material.opacity = 0.9 * fade;

      for (let i = 0; i < GATE_PASS_EFFECT_PARTICLES; i += 1) {
        const offset = i * 3;
        effect.particlePositions[offset] = effect.particleVelocities[offset] * effect.age;
        effect.particlePositions[offset + 1] = effect.particleVelocities[offset + 1] * effect.age;
        effect.particlePositions[offset + 2] = effect.particleVelocities[offset + 2] * effect.age;
      }
      effect.particles.geometry.attributes.position.needsUpdate = true;

      if (effect.age < effect.duration) return true;
      this.removeGatePassEffect(effect);
      return false;
    });
  }

  removeGatePassEffect(effect) {
    this.scene.remove(effect.group);
    for (const geometry of effect.geometries) geometry.dispose();
    for (const material of effect.materials) material.dispose();
  }

  applyPointerState() {
    if (!this.input.pointerActive || this.player.actionTimer > 0) return;
    if (this.player.state === PLAYER_STATE.CRASHED || this.player.state === PLAYER_STATE.FALLEN) return;

    const anchorX = this.viewport.width / 2;
    const anchorY = this.viewport.height / 3;
    const dx = this.input.pointerX - anchorX;
    const dy = this.input.pointerY - anchorY;
    const nextState = this.player.mode === 0
      ? this.mapMouseDirection(dx, dy)
      : this.mapTrickDirection(dx, dy);
    this.setPlayerState(nextState);
  }

  mapMouseDirection(dx, dy) {
    if (dy < -18) {
      return dx < 0 ? PLAYER_STATE.LEFT_3 : PLAYER_STATE.RIGHT_3;
    }
    const denom = Math.abs(dy) < 1 ? 1 : dy;
    const slope = (dx * 4) / denom;
    if (slope < -6) return PLAYER_STATE.LEFT_3;
    if (slope < -3) return PLAYER_STATE.LEFT_2;
    if (slope < -1) return PLAYER_STATE.LEFT_1;
    if (slope <= 1) return PLAYER_STATE.STRAIGHT;
    if (slope <= 3) return PLAYER_STATE.RIGHT_1;
    if (slope <= 6) return PLAYER_STATE.RIGHT_2;
    return PLAYER_STATE.RIGHT_3;
  }

  mapTrickDirection(dx, dy) {
    if (Math.abs(dx) > Math.abs(dy)) {
      return dx < 0 ? PLAYER_STATE.TRICK_LEFT : PLAYER_STATE.TRICK_RIGHT;
    }
    return dy < 0 ? PLAYER_STATE.TRICK_BACK : PLAYER_STATE.TRICK;
  }

  updateCourseObjects(dt) {
    for (const object of this.objects) {
      if (object.kind === OBJECT_KIND.DOG) {
        this.updateDog(object, dt);
      } else if (object.kind === OBJECT_KIND.ANIMATED) {
        this.updateNpcSkier(object, dt);
      } else if (object.kind === OBJECT_KIND.FIRE) {
        object.stateTimer = (object.stateTimer || 0) + dt;
        if (object.stateTimer > 0.12) {
          object.stateTimer = 0;
          object.spriteId += 1;
          if (object.spriteId > 85) object.spriteId = 83;
          this.refreshSprite(object);
        }
      } else if (object.kind === OBJECT_KIND.MONSTER) {
        this.updateMonster(object, dt);
      }
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
        this.setObjectState(dog, this.rng.int(0, 99) === 0 ? DOG_STATES.WALK_A : DOG_STATES.ALERT);
        break;
      default:
        this.setObjectState(dog, DOG_STATES.WALK_A);
        break;
    }
  }

  updateNpcSkier(npc, dt) {
    npc.state ??= NPC_SKIER_STATES[0];
    const motion = NPC_SKIER_MOTION[npc.state] || NPC_SKIER_MOTION[NPC_SKIER_STATES[0]];
    npc.vx ??= motion.targetVx;
    npc.speed ??= motion.targetSpeed;
    npc.vx += (motion.targetVx - npc.vx) * Math.min(1, dt * 5.8);
    npc.speed += (motion.targetSpeed - npc.speed) * Math.min(1, dt * 3.4);
    npc.x += npc.vx * dt * 60;
    npc.y += npc.speed * dt * 60;

    npc.stateTimer = (npc.stateTimer || 0) + dt;
    while (npc.stateTimer >= NPC_SKIER_STATE_SECONDS) {
      npc.stateTimer -= NPC_SKIER_STATE_SECONDS;
      this.setObjectState(npc, this.nextNpcSkierState(npc.state));
    }
  }

  nextNpcSkierState(currentState) {
    let nextState = currentState;
    while (nextState === currentState) {
      nextState = NPC_SKIER_STATES[this.rng.int(0, NPC_SKIER_STATES.length - 1)];
    }
    return nextState;
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
    this.courseMessage = "Caught by the yeti";
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
    document.title = "SkiFree - Caught by the yeti";
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
      this.pauseCard.textContent = "Caught by the yeti";
      this.pauseCard.hidden = false;
    }

    this.syncPlayerDataset();
  }

  updateTrails() {
    if (this.player.state === PLAYER_STATE.CRASHED || this.player.actionTimer > 0) {
      if (this.skiTracks) this.skiTracks.previous = null;
      return;
    }
    this.updateSkiTrackMarks();
  }

  updateSkiTrackMarks() {
    const tracks = this.skiTracks;
    if (!tracks || !this.player || this.player.speed <= 0.35) {
      if (tracks) tracks.previous = null;
      return;
    }

    const current = { x: this.player.x, y: this.player.y };
    if (!tracks.previous) {
      tracks.previous = current;
      return;
    }

    const dx = current.x - tracks.previous.x;
    const dy = current.y - tracks.previous.y;
    const distance = Math.hypot(dx, dy);
    if (distance > SKI_TRACK_RESET_DISTANCE) {
      tracks.previous = current;
      return;
    }
    if (distance < SKI_TRACK_SAMPLE_DISTANCE) return;

    this.appendSkiTrackSegment(tracks.previous, current);
    tracks.previous = current;
  }

  appendSkiTrackSegment(previous, current) {
    const tracks = this.skiTracks;
    const dx = current.x - previous.x;
    const dy = current.y - previous.y;
    const length = Math.hypot(dx, dy) || 1;
    const nx = -dy / length;
    const ny = dx / length;
    const separation = SKI_TRACK_SEPARATION / 2;
    const halfWidth = SKI_TRACK_WIDTH / 2;

    let segmentIndex = tracks.segmentCount;
    if (tracks.segmentCount >= tracks.maxSegments) {
      tracks.positions.copyWithin(0, tracks.floatsPerSegment);
      segmentIndex = tracks.maxSegments - 1;
    } else {
      tracks.segmentCount += 1;
    }

    const writeQuad = (base, side) => {
      const centerOffset = side * separation;
      const edgeOffset = halfWidth;
      const p1a = this.trackPoint(previous, nx, ny, centerOffset - edgeOffset);
      const p1b = this.trackPoint(previous, nx, ny, centerOffset + edgeOffset);
      const p2a = this.trackPoint(current, nx, ny, centerOffset - edgeOffset);
      const p2b = this.trackPoint(current, nx, ny, centerOffset + edgeOffset);
      const values = [
        p1a.x, p1a.y, SKI_TRACK_Z,
        p2a.x, p2a.y, SKI_TRACK_Z,
        p2b.x, p2b.y, SKI_TRACK_Z,
        p1a.x, p1a.y, SKI_TRACK_Z,
        p2b.x, p2b.y, SKI_TRACK_Z,
        p1b.x, p1b.y, SKI_TRACK_Z
      ];
      tracks.positions.set(values, base);
    };

    const base = segmentIndex * tracks.floatsPerSegment;
    writeQuad(base, -1);
    writeQuad(base + tracks.floatsPerSegment / 2, 1);
    tracks.geometry.setDrawRange(0, tracks.segmentCount * 12);
    tracks.geometry.attributes.position.needsUpdate = true;
  }

  trackPoint(point, nx, ny, offset) {
    return {
      x: point.x + nx * offset,
      y: -point.y - ny * offset
    };
  }

  checkCollisions() {
    const player = this.player;
    if (player.actionTimer > 0 || player.state === PLAYER_STATE.CRASHED) return;

    const playerBox = this.boundsFor(player, 0.55);
    for (const object of this.objects) {
      if (!object.collidable || object.hit) continue;
      if (Math.abs(object.y - player.y) > 60 || Math.abs(object.x - player.x) > 80) continue;
      if (!this.intersects(playerBox, this.boundsFor(object, object.collisionScale || 0.7))) continue;

      if (object.kind === OBJECT_KIND.RAMP || object.kind === OBJECT_KIND.MOGUL || object.kind === OBJECT_KIND.PATCH) {
        this.launchTrick(object.kind);
        object.hit = true;
      } else if (object.kind === OBJECT_KIND.SIGN) {
        object.hit = true;
        this.addStyleScore(5);
      } else if (object.kind === OBJECT_KIND.MONSTER) {
        this.startYetiAttack(object);
      } else {
        this.crashInto(object);
      }
    }
  }

  launchTrick(kind) {
    this.player.pendingAction = kind === OBJECT_KIND.RAMP ? 4 : 2;
    this.player.mode = 1;
    this.player.actionTimer = kind === OBJECT_KIND.RAMP ? RAMP_TRICK_SECONDS : MOGUL_JUMP_SECONDS;
    this.player.speed = Math.max(this.player.speed, kind === OBJECT_KIND.RAMP ? 4.55 : 4.05);
    this.setPlayerState(kind === OBJECT_KIND.RAMP ? PLAYER_STATE.TRICK : PLAYER_STATE.JUMP_LEFT);
    this.addStyleScore(kind === OBJECT_KIND.RAMP ? 20 : 6);
  }

  crashInto(object) {
    if (object.kind === OBJECT_KIND.DOG) {
      this.setObjectState(object, DOG_STATES.ALERT);
    }
    this.player.speed *= object.kind === OBJECT_KIND.MONSTER ? 0.05 : 0.25;
    this.player.vx *= -0.25;
    this.player.actionTimer = 0;
    this.player.mode = 0;
    this.player.crashedUntil = object.kind === OBJECT_KIND.MONSTER ? 2.6 : 1.4;
    this.styleScore = Math.max(0, this.styleScore - 15);
    this.setPlayerState(PLAYER_STATE.CRASHED);
  }

  spawnCourseUntil(targetY) {
    while (this.nextSpawnY < targetY) {
      this.spawnChunk(this.nextSpawnY);
      this.nextSpawnY += COURSE_STEP;
    }
  }

  spawnChunk(y) {
    if (y < 120) return;

    if (Math.abs(y - 2200) < COURSE_STEP / 2) {
      this.addObject({ kind: OBJECT_KIND.SIGN, spriteId: SPRITE.FINISH_LEFT, x: -70, y, collidable: false });
      this.addObject({ kind: OBJECT_KIND.SIGN, spriteId: SPRITE.FINISH_RIGHT, x: 70, y, collidable: false });
    }

    const count = this.rng.int(3, y > 1000 ? 7 : 5);
    const halfWidth = Math.max(360, this.viewport.width * 0.62);
    this.spawnFeatureObjects(y, halfWidth);
    for (let i = 0; i < count; i += 1) {
      const x = this.rng.range(-halfWidth, halfWidth);
      const offsetY = y + this.rng.range(-46, 58);
      if (Math.abs(x) < 72 && offsetY < 520) continue;
      this.spawnWeightedObject(x, offsetY);
    }
  }

  spawnFeatureObjects(y, halfWidth) {
    const chunkIndex = Math.floor(y / COURSE_STEP);
    if (y > 560 && chunkIndex % 4 === 0) {
      this.addRamp(this.rng.range(-120, 120), y + this.rng.range(-24, 34));
    }
    if (y > 720 && chunkIndex % 5 === 0) {
      this.addNpcSkier(this.rng.range(-halfWidth * 0.42, halfWidth * 0.42), y - this.rng.range(80, 160));
    }
    if (y > 840 && chunkIndex % 6 === 0) {
      const side = chunkIndex % 12 === 0 ? -1 : 1;
      this.addTower(side * this.rng.range(halfWidth * 0.45, halfWidth * 0.82), y + this.rng.range(-20, 50));
    }
  }

  spawnWeightedObject(x, y) {
    const choice = this.rng.weighted([
      { weight: 22, value: "tree" },
      { weight: 12, value: "rock" },
      { weight: 12, value: "stump" },
      { weight: 16, value: "mogul" },
      { weight: 16, value: "ramp" },
      { weight: 7, value: "dog" },
      { weight: 7, value: "npc" },
      { weight: 5, value: "tower" },
      { weight: 4, value: "fire" },
      { weight: 7, value: "patch" }
    ]);

    if (choice === "tree") {
      const spriteId = this.rng.weighted([
        { weight: 5, value: SPRITE.TREE_SMALL },
        { weight: 2, value: SPRITE.TREE_DEAD },
        { weight: 3, value: SPRITE.TREE_LARGE }
      ]);
      this.addObject({ kind: OBJECT_KIND.TREE, spriteId, x, y, collidable: true, collisionScale: 0.58 });
    } else if (choice === "rock") {
      this.addObject({ kind: OBJECT_KIND.ROCK, spriteId: SPRITE.ROCK, x, y, collidable: true, collisionScale: 0.62 });
    } else if (choice === "stump") {
      this.addObject({ kind: OBJECT_KIND.STUMP, spriteId: SPRITE.STUMP, x, y, collidable: true, collisionScale: 0.72 });
    } else if (choice === "mogul") {
      this.addObject({ kind: OBJECT_KIND.MOGUL, spriteId: 27, x, y, collidable: true, collisionScale: 0.74 });
    } else if (choice === "ramp") {
      this.addRamp(x, y);
    } else if (choice === "dog") {
      this.addDog(x, y);
    } else if (choice === "npc") {
      this.addNpcSkier(x, y);
    } else if (choice === "tower") {
      this.addTower(x, y);
    } else if (choice === "fire") {
      this.addObject({ kind: OBJECT_KIND.FIRE, spriteId: SPRITE.FIRE_FIRST, x, y, collidable: true, collisionScale: 0.66 });
    } else {
      this.addObject({ kind: OBJECT_KIND.PATCH, spriteId: SPRITE.YELLOW_PATCH, x, y, collidable: true, collisionScale: 0.82 });
    }
  }

  addRamp(x, y) {
    return this.addObject({
      kind: OBJECT_KIND.RAMP,
      spriteId: this.rng.chance(0.5) ? SPRITE.RAMP_1 : SPRITE.RAMP_2,
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
      stateTimer: this.rng.range(0, NPC_SKIER_STATE_SECONDS),
      collidable: true,
      collisionScale: 0.62
    });
  }

  addTower(x, y) {
    return this.addObject({
      kind: OBJECT_KIND.TOWER,
      spriteId: SPRITE.SKI_LIFT_TOWER,
      x,
      y,
      collidable: true,
      collisionScale: 0.48
    });
  }

  pruneObjects() {
    const lowWater = this.player.y - this.viewport.height * 1.35;
    this.objects = this.objects.filter((object) => {
      if (object.y >= lowWater || object.kind === OBJECT_KIND.MONSTER) return true;
      this.removeSprite(object);
      return false;
    });

    this.trails = this.trails.filter((trail) => {
      if (trail.y >= lowWater) return true;
      this.scene.remove(trail.sprite);
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
    const sprite = new THREE.Sprite(this.assets.material(object.spriteId));
    object.sprite = sprite;
    this.scene.add(sprite);
    this.updateObjectSprite(object);
  }

  refreshSprite(object) {
    object.sprite.material = this.assets.material(object.spriteId);
    this.updateObjectSprite(object);
  }

  removeSprite(object) {
    if (!object.sprite) return;
    this.scene.remove(object.sprite);
    object.sprite = null;
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
    object.sprite.position.set(object.x, -object.y, this.depthForObject(object));
    object.sprite.renderOrder = Math.floor(object.y);
  }

  depthForObject(object) {
    if (!this.player) return 0;
    if (object.kind === OBJECT_KIND.PLAYER) return CAMERA_PLAYER_DEPTH;
    const relativeCourseY = (object.y - this.player.y) / Math.max(1, this.viewport.height);
    return Math.max(-CAMERA_DEPTH_RANGE, Math.min(CAMERA_DEPTH_RANGE, relativeCourseY * CAMERA_DEPTH_RANGE));
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
    this.canvas.dataset.cameraMode = "perspective-depth";
    this.canvas.dataset.cameraDepthRange = String(CAMERA_DEPTH_RANGE);
    this.canvas.dataset.snowParticles = String(SNOW_PARTICLE_COUNT);
    this.canvas.dataset.snowFieldWidth = String(Math.round(this.snow?.fieldWidth || 0));
    this.canvas.dataset.snowFieldHeight = String(Math.round(this.snow?.fieldHeight || 0));
    this.canvas.dataset.skiTrackSegments = String(this.skiTracks?.segmentCount || 0);
    this.canvas.dataset.skiTrackMaxSegments = String(SKI_TRACK_MAX_SEGMENTS);
    this.canvas.dataset.gateEffectCount = String(this.gateEffects?.length || 0);
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
    return {
      left: object.x - width / 2,
      right: object.x + width / 2,
      top: object.y - height / 2,
      bottom: object.y + height / 2
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
    if (this.player) this.positionSprite(this.player);
    for (const object of this.objects) this.positionSprite(object);
    for (const trail of this.trails) this.positionSprite(trail);
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
    const mode = this.displayCourseMode();
    if (mode?.finished) return 0;
    const finishY = mode?.finishY || null;
    const distance = finishY == null
      ? this.player.y
      : finishY - this.player.y;
    return Math.max(0, Math.floor(distance / PIXELS_PER_METER));
  }

  updateHud() {
    this.syncPlayerDataset();

    const distanceMeters = this.hudDistanceMeters();
    const speedMeters = Math.max(0, (this.player.speed * 60) / PIXELS_PER_METER);

    this.hud.time.textContent = this.formatTime(this.hudTimeMs());
    this.hud.distance.textContent = `${distanceMeters}m`;
    this.hud.speed.textContent = `${speedMeters.toFixed(2)}m/s`;
    this.hud.style.textContent = `${Math.floor(this.styleScore)}`;
  }

  onPointerMove(event) {
    this.input.pointerActive = true;
    this.input.pointerX = event.clientX;
    this.input.pointerY = event.clientY;
  }

  onPointerDown(event) {
    this.input.pointerActive = true;
    this.input.pointerX = event.clientX;
    this.input.pointerY = event.clientY;
    if (this.gameOver || this.yetiAttack.finished) {
      this.restart();
      return;
    }
    if (this.paused) {
      this.setPaused(false);
      return;
    }
    if (this.player.state === PLAYER_STATE.CRASHED || this.player.state === PLAYER_STATE.FALLEN) {
      this.restart();
      return;
    }
    if (this.player.mode === 0) {
      this.player.mode = 1;
      this.player.pendingAction = 4;
      this.player.actionTimer = Math.max(this.player.actionTimer, CLICK_TRICK_SECONDS);
      this.setPlayerState(PLAYER_STATE.TRICK);
      this.addStyleScore(4);
    } else {
      const cycle = {
        [PLAYER_STATE.TRICK]: PLAYER_STATE.SPIN,
        [PLAYER_STATE.TRICK_LEFT]: PLAYER_STATE.FLIP_LEFT,
        [PLAYER_STATE.TRICK_RIGHT]: PLAYER_STATE.FLIP_RIGHT,
        [PLAYER_STATE.SPIN]: PLAYER_STATE.SPIN_BACK,
        [PLAYER_STATE.SPIN_BACK]: PLAYER_STATE.TRICK
      };
      this.player.actionTimer = Math.max(this.player.actionTimer, CLICK_TRICK_SECONDS);
      this.setPlayerState(cycle[this.player.state] || PLAYER_STATE.TRICK);
      this.addStyleScore(3);
    }
  }

  onKeyDown(event) {
    this.input.keys.add(event.code);

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
      nextState = TURN_TRANSITION[state]?.[1] ?? state;
      if (nextState === PLAYER_STATE.HARD_RIGHT) {
        this.player.turnVelocity = Math.min(8, this.player.turnVelocity + 8);
      }
    } else if (code === "ArrowRight" || code === "Numpad6") {
      nextState = TURN_TRANSITION[state]?.[0] ?? state;
      if (nextState === PLAYER_STATE.HARD_LEFT) {
        this.player.turnVelocity = Math.max(-8, this.player.turnVelocity - 8);
      }
    } else if (code === "ArrowUp" || code === "Numpad8") {
      nextState = this.upTransition(state);
    } else if (code === "ArrowDown" || code === "Numpad2") {
      nextState = this.downTransition(state);
    } else if (code === "PageUp" || code === "Numpad9") {
      nextState = PLAYER_STATE.LEFT_3;
    } else if (code === "PageDown" || code === "Numpad3") {
      nextState = PLAYER_STATE.LEFT_1;
    } else if (code === "Home" || code === "Numpad7") {
      nextState = PLAYER_STATE.RIGHT_3;
    } else if (code === "End" || code === "Numpad1") {
      nextState = PLAYER_STATE.RIGHT_1;
    } else if (code === "Insert" || code === "Numpad0" || code === "Space") {
      this.player.mode = 1;
      this.player.pendingAction = 2;
      this.player.actionTimer = Math.max(this.player.actionTimer, KEY_TRICK_SECONDS);
      nextState = PLAYER_STATE.TRICK;
      this.addStyleScore(4);
    } else {
      return false;
    }

    this.setPlayerState(nextState);
    if (this.isStyleState(nextState) && nextState !== state) {
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
    this.paused = paused;
    this.pauseCard.textContent = "Paused";
    this.pauseCard.hidden = !paused;
    document.title = paused ? "Ski Paused ... Press F3 to continue" : "SkiFree";
  }
}

const game = new SkiFreeGame();
window.skiFreeGame = game;
game.start().catch((error) => {
  console.error(error);
  const loadCard = document.querySelector("#load-card");
  loadCard.textContent = "Load failed";
});
