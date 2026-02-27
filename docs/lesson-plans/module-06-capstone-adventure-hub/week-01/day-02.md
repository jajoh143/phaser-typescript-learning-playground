# Module 6: Capstone Adventure Hub - week-01 - day-02

## Session Goal
Integrate puzzle gate.

## Concept Primer
Reuse module-02 logic behind one capstone gate.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Wire gate completion boolean to puzzle success callback.

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
- [TS Reuse Patterns](https://www.typescriptlang.org/docs/handbook/2/modules.html)
- [Phaser Events](https://docs.phaser.io/phaser/concepts/events)
- [Composition Over Inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance)

## Common Mistakes
- Gate progress updated in multiple places without a single state owner.
- localStorage parse/read issues from unvalidated saved payloads.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
