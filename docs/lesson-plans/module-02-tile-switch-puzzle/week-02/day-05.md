# Module 2: Tile Switch Puzzle - week-02 - day-05

## Session Goal
Demo and evaluate refactor quality.

## Concept Primer
Practice reviewing structure, naming, and maintainability.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Write one note on what became easier after refactoring.


## Why This Change Matters
- Today's change (Write one note on what became easier after refactoring.) directly supports the goal (Demo and evaluate refactor quality.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for grid-state correctness, deterministic updates, and visual sync so later features do not require large rewrites.

## Documentation Takeaways
- UI/text docs reinforce that visual hierarchy is part of gameplay clarity, not optional polish.
- Use this reference to verify exact behavior while implementing Write one note on what became easier after refactoring..
- Use this reference to verify exact behavior while implementing Write one note on what became easier after refactoring..

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
- [Code Review Guide](https://google.github.io/eng-practices/review/)
- [Naming in Code](https://martinfowler.com/bliki/TwoHardThings.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Common Mistakes
- Row/column index swap bugs; log row/col before mutating grid.
- Mutating shared array references unexpectedly; clone rows when needed.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
