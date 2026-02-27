# Module 2: Tile Switch Puzzle - week-02 - day-03

## Session Goal
Randomize valid board starts.

## Concept Primer
Generate replayable variation while keeping puzzle solvable.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Create a randomizer function and verify it never produces an impossible board for your rule set.


## Why This Change Matters
- Today's change (Create a randomizer function and verify it never produces an impossible board for your rule set.) directly supports the goal (Randomize valid board starts.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for grid-state correctness, deterministic updates, and visual sync so later features do not require large rewrites.

## Documentation Takeaways
- Use this reference to verify exact behavior while implementing Create a randomizer function and verify it never produces an impossible board for your rule set..
- Type narrowing helps branch logic stay safe when game state can be in multiple valid forms.
- Use this reference to verify exact behavior while implementing Create a randomizer function and verify it never produces an impossible board for your rule set..

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
- [MDN Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [TS Type Guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [Puzzle Design Basics](https://gameprogrammingpatterns.com/)

## Common Mistakes
- Row/column index swap bugs; log row/col before mutating grid.
- Mutating shared array references unexpectedly; clone rows when needed.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
