# Module 6: Capstone Adventure Hub - week-02 - day-04

## Session Goal
Final polish for readability and flow.

## Concept Primer
Tighten UX and text guidance for players.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Improve instructions, spacing, and feedback for gate completion.

## Starter Code Hints
- Target files: src/modules/module-06-capstone-adventure-hub/scenes/Module06CapstoneScene.ts and src/modules/module-06-capstone-adventure-hub/logic/progress.ts.
- Suggested function names: setGateComplete(), isHubUnlocked(), saveProgress(), loadProgress().
- Keep one shared progress object as the source of truth.

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
- [Game UX Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Phaser Text Style](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Types.GameObjects.Text.TextStyle)
- [TS String Templates](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)

## Common Mistakes
- Gate progress updated in multiple places without a single state owner.
- localStorage parse/read issues from unvalidated saved payloads.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
