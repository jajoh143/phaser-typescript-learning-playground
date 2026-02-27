# Module 2: Tile Switch Puzzle - week-01 - day-03

## Session Goal
Add neighbor toggle rules.

## Concept Primer
Apply deterministic transformations to board state.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
When a tile is toggled, also toggle orthogonal neighbors within bounds.


## Why This Change Matters
- Today's change (When a tile is toggled, also toggle orthogonal neighbors within bounds.) directly supports the goal (Add neighbor toggle rules.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for grid-state correctness, deterministic updates, and visual sync so later features do not require large rewrites.

## Documentation Takeaways
- Model repeated game data as arrays so When a tile is toggled, also toggle orthogonal neighbors within bounds. can be iterated and rendered predictably.
- UI/text docs reinforce that visual hierarchy is part of gameplay clarity, not optional polish.
- Type narrowing helps branch logic stay safe when game state can be in multiple valid forms.

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
- [MDN Array index checks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Bounds Checking Example](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [TypeScript Control Flow](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

## Common Mistakes
- Row/column index swap bugs; log row/col before mutating grid.
- Mutating shared array references unexpectedly; clone rows when needed.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
