# SkiFree Three.js remake

The runtime uses the 86 bitmaps, state tables, course descriptors, spawn
weights, controls, and collision behaviors recovered from the bundled
`SKI.EXE`. Rendering stays pixel-perfect and orthographic while Three.js
handles the scene.

Controls: mouse or numeric keypad to steer and perform tricks, arrow keys as
the keypad equivalents, `F2` to restart, and `F3` to pause/resume. On touch
screens, hold and move a finger to steer; use a short tap to jump.

Run it with:

```powershell
cd skifree-three
npm.cmd install
npm.cmd run dev -- --port 5173
```

Build it with:

```powershell
cd skifree-three
npm.cmd run build
```

Verify rendering and gameplay behavior with:

```powershell
cd skifree-three
npm.cmd run verify
```

The browser-free rules check (assets, recovered tables, recovery, and touch
gestures) is available with:

```powershell
npm.cmd run verify:logic
```

See `ORIGINAL_PARITY_AUDIT.md` for the source-parity review and the explicitly
documented web extensions.
