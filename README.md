# SkiFree Three.js remake

This is a new source implementation of SkiFree built from the recovered notes in
`../docs` and the extracted bitmap resources in `../out/extracted/images`.

Recovered behavior used here:

- 60 Hz fixed simulation step based on the original idle-loop timing model.
- `state -> bitmap` and keyboard turn tables from the Win16 data segment.
- Mouse direction buckets, trick states, F2 restart, and F3 pause behavior.
- Status values matching the original time, distance, speed, and style panel.
- Course-mode starts/finishes for Race, Freestyle, and Tree Slalom, including
  gate misses with 5-second penalties for gated modes.
- Yeti pursuit after the classic 2000m threshold, with separate run and
  caught-skier frame sequences.
- Course objects using the extracted 86 bitmap resources with reconstructed
  transparency.

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

Verify rendering and input behavior with:

```powershell
cd skifree-three
npm.cmd run verify
```

The verifier launches Chrome through `playwright-core`, opens desktop and mobile
viewports, checks WebGL/canvas pixels, verifies the HUD bounds, exercises F3/F2,
checks jump/trick recovery, verifies course starts/finishes and gate penalties,
checks the yeti capture/game-over sequence,
and writes `reports/desktop.png`, `reports/mobile.png`, and
`reports/verify-runtime.json`.
