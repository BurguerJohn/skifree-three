# SkiFree Three.js remake

This is a new source implementation of SkiFree built from the recovered notes in
`../docs` and the extracted bitmap resources in `../out/extracted/images`.

Recovered behavior used here:

- 60 Hz fixed simulation step based on the original idle-loop timing model.
- Perspective depth camera, subtle sprite depth scaling, falling snow particles,
  and persistent ski-track marks for a more modern 2.5D presentation.
- `state -> bitmap` and keyboard turn tables from the Win16 data segment.
- Mouse direction buckets, trick states, F2 restart, and F3 pause behavior.
- Status values matching the original time, distance, speed, and style panel.
- Course-mode starts/finishes for Race, Freestyle, and Tree Slalom, including
  gate misses with 5-second penalties for gated modes.
- Alternating slalom flags, ramps using `bitmap_52_52.bmp`, ski-lift towers,
  moving NPC skiers, source-state dog movement, and style scoring outside
  course-result screens.
- Correct-side gate passes award style points and trigger a modern burst effect
  at the skier's crossing point.
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

Publish on GitHub Pages:

1. Commit this project to GitHub with `skifree-three` as the repository root.
2. Push to the `main` branch.
3. In the GitHub repository, open `Settings > Pages`.
4. Set `Build and deployment > Source` to `GitHub Actions`.
5. Open the Pages URL shown by GitHub after the `Deploy GitHub Pages` workflow
   finishes.

The build uses relative asset paths, so the game works from a project URL such
as `https://user.github.io/repository-name/`.

Verify rendering and input behavior with:

```powershell
cd skifree-three
npm.cmd run verify
```

The verifier launches Chrome through `playwright-core`, opens desktop and mobile
viewports, checks WebGL/canvas pixels, verifies the HUD bounds, exercises F3/F2,
checks jump/trick recovery, verifies course starts/finishes and gate penalties,
checks object spawns, style scoring, correct-side gate effects, dog/NPC
animation, the yeti
capture/game-over sequence, and writes `reports/desktop.png`,
`reports/mobile.png`, `reports/course-objects.png`, `reports/gate-pass-effect.png`,
`reports/ski-tracks.png`, and `reports/verify-runtime.json`.
