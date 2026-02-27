# Module 2: Tile Switch Puzzle - week-02 - day-02

## Session Goal
Handle solved state in UI.

## Concept Primer
Disable input once game is complete.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Show win message and block further tile changes until reset.

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
- [Phaser Scene State](https://docs.phaser.io/phaser/concepts/scenes)
- [Phaser Input enable/disable](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Input.InputPlugin-enabled)
- [MDN Event Handling](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events)

## Common Mistakes
- Row/column index swap bugs; log row/col before mutating grid.
- Mutating shared array references unexpectedly; clone rows when needed.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
