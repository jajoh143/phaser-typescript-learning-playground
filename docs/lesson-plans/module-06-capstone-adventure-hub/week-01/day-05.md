# Module 6: Capstone Adventure Hub - week-01 - day-05

## Session Goal
Track combined gate progress.

## Concept Primer
Represent overall progress in one typed object.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Display puzzle/platform/quest booleans and final unlock readiness.

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
- [TS Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [MDN Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [Derived State (concept)](https://redux.js.org/usage/deriving-data-selectors)

## Common Mistakes
- Gate progress updated in multiple places without a single state owner.
- localStorage parse/read issues from unvalidated saved payloads.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
