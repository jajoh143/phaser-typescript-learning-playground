# Module 2: Tile Switch Puzzle - week-01 - day-01

## Session Goal
Model puzzle state as a typed grid.

## Concept Primer
Represent board state using a 2D array type.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Define PuzzleGrid and initialize a 3x3 starter board.


## Why This Change Matters
- Today's change (Define PuzzleGrid and initialize a 3x3 starter board.) directly supports the goal (Model puzzle state as a typed grid.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for grid-state correctness, deterministic updates, and visual sync so later features do not require large rewrites.

## Documentation Takeaways
- Model repeated game data as arrays so Define PuzzleGrid and initialize a 3x3 starter board. can be iterated and rendered predictably.
- Model repeated game data as arrays so Define PuzzleGrid and initialize a 3x3 starter board. can be iterated and rendered predictably.
- Use this reference to verify exact behavior while implementing Define PuzzleGrid and initialize a 3x3 starter board..

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
- [TypeScript Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)
- [MDN Nested Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Data Modeling in TS](https://www.typescriptlang.org/docs/handbook/2/objects.html)

## Common Mistakes
- Row/column index swap bugs; log row/col before mutating grid.
- Mutating shared array references unexpectedly; clone rows when needed.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
