# Module 2: Tile Switch Puzzle - week-02 - day-04

## Session Goal
Refactor puzzle logic into logic folder.

## Concept Primer
Separate pure logic from scene rendering code.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Move toggle/win/reset helpers into logic/puzzle.ts and keep scene focused on display/input.


## Why This Change Matters
- Today's change (Move toggle/win/reset helpers into logic/puzzle.ts and keep scene focused on display/input.) directly supports the goal (Refactor puzzle logic into logic folder.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for grid-state correctness, deterministic updates, and visual sync so later features do not require large rewrites.

## Documentation Takeaways
- Use this reference to verify exact behavior while implementing Move toggle/win/reset helpers into logic/puzzle.ts and keep scene focused on display/input..
- Splitting code by module keeps Move toggle/win/reset helpers into logic/puzzle.ts and keep scene focused on display/input. from coupling tightly to rendering code.
- Use this reference to verify exact behavior while implementing Move toggle/win/reset helpers into logic/puzzle.ts and keep scene focused on display/input..

## Starter Code Hints
- Target files: src/modules/module-02-tile-switch-puzzle/scenes/Module02PuzzleScene.ts and src/modules/module-02-tile-switch-puzzle/logic/puzzle.ts.
- Suggested function names: toggleTile(grid, row, col), isSolved(grid), createStarterGrid().
- Keep all puzzle rules in logic/puzzle.ts and rendering/input in the scene.

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
- [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)
- [TS Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)
- [MDN import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

## Common Mistakes
- Row/column index swap bugs; log row/col before mutating grid.
- Mutating shared array references unexpectedly; clone rows when needed.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
