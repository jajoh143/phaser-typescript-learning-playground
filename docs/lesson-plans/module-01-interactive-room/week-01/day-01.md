# Module 1: Interactive Room - week-01 - day-01

## Session Goal
Install tooling and run the starter app.

## Concept Primer
Understand project entrypoints and how TypeScript files are bundled by Vite.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Open src/main.ts and src/game/config.ts and trace startup from GameConfig to first scene.

## Starter Code Hints
- Target files: src/modules/module-01-interactive-room/scenes/Module01RoomScene.ts and src/modules/module-01-interactive-room/logic/helpers.ts.
- Suggested function names: refreshStatus(), buildLabelText(), createInitialRoomState().
- Keep reusable label/state formatting in logic/helpers.ts.

## Success Criteria
- Code compiles and runs.
- Behavior change is visible in-game.
- One commit message summarizes what changed and why.

## Checklist
- [ ] I reviewed the target files before coding.
- [ ] I implemented the core task for today.
- [ ] I ran the game and verified the behavior visually.
- [ ] I wrote one short note about what I learned.
- [ ] I made a commit on my working branch.

## Documentation
- [TypeScript Handbook - Basics](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [Vite Guide](https://vite.dev/guide/)
- [Phaser Concepts - Scenes](https://docs.phaser.io/phaser/concepts/scenes)

## Common Mistakes
- Losing scene context in callbacks; prefer arrow functions for pointer handlers.
- Updating counters without calling refreshStatus(), so UI appears stale.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
