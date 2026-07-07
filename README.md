# SkiFree Three.js remake

This is a Three.js remake of SkiFree built from the recovered notes in `../docs`
and the extracted bitmap resources in `../out/extracted/images`.

Implemented behavior:

- 60 Hz fixed simulation step for consistent browser gameplay.
- Perspective depth camera, sprite depth scaling, full-screen snow particles,
  and persistent ski-track marks.
- Keyboard and mouse controls, trick states, F2 restart, and F3 pause behavior.
- Status values for time, distance, speed, and style.
- Race, Freestyle, and Tree Slalom course starts/finishes, including gate misses
  with 5-second penalties in gated modes.
- Alternating slalom flags, ramps, ski-lift towers, moving NPC skiers, dog
  movement, and style scoring.
- Passing by the gate flag awards style feedback on both correct and wrong
  sides. Correct passes still count as gates cleared; wrong-side passes keep the
  miss penalty.
- Yeti pursuit after the classic 2000m threshold, with run and caught-skier
  frame sequences.

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

The verifier launches Chrome through `playwright-core`, checks desktop and
mobile viewports, validates canvas rendering, HUD bounds, controls, jump/trick
recovery, course starts/finishes, gate penalties, gate style effects, ski
tracks, object spawns, dog/NPC animation, and the yeti capture sequence. It
writes screenshots and runtime data to `reports/`.

Publish on GitHub Pages:

1. Commit this project to GitHub with `skifree-three` as the repository root.
2. Push to the `main` branch.
3. In the GitHub repository, open `Settings > Pages`.
4. Set `Build and deployment > Source` to `GitHub Actions`.
5. Open the Pages URL shown by GitHub after the `Deploy GitHub Pages` workflow
   finishes.

The Vite build uses relative asset paths, so the game works directly from a
GitHub Pages project URL such as `https://user.github.io/repository-name/`.
