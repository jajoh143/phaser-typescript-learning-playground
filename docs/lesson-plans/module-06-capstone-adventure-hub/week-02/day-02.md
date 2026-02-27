# Module 6: Capstone Adventure Hub - week-02 - day-02

## Session Goal
Add localStorage save/load.

## Concept Primer
Persist progress across browser refreshes.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Serialize gate progress to localStorage and load it on start.

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
- [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [JSON stringify/parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [TS Unknown Type](https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown)

## Common Mistakes
- Gate progress updated in multiple places without a single state owner.
- localStorage parse/read issues from unvalidated saved payloads.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
