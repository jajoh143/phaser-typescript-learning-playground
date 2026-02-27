# Module 1: Interactive Room - week-02 - day-05

## Session Goal
Demo and reflect on the module.

## Concept Primer
Practice explaining code choices and outcomes.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Record one short note: what changed, what was hardest, and what to improve next.


## Why This Change Matters
- Today's change (Record one short note: what changed, what was hardest, and what to improve next.) directly supports the goal (Demo and reflect on the module.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for input events, scene state, and UI feedback loops so later features do not require large rewrites.

## Documentation Takeaways
- Use this reference to verify exact behavior while implementing Record one short note: what changed, what was hardest, and what to improve next..
- Use this reference to verify exact behavior while implementing Record one short note: what changed, what was hardest, and what to improve next..
- Use this reference to verify exact behavior while implementing Record one short note: what changed, what was hardest, and what to improve next..

## Starter Code Hints
- Target files: src/modules/module-01-interactive-room/scenes/Module01RoomScene.ts and src/modules/module-01-interactive-room/logic/helpers.ts.
- Suggested function names: refreshStatus(), buildLabelText(), createInitialRoomState().
- Keep reusable label/state formatting in logic/helpers.ts.

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
- [Git Commit Messages](https://cbea.ms/git-commit/)
- [Rubber Duck Debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging)
- [TypeScript Learning Resources](https://www.typescriptlang.org/docs/)

## Common Mistakes
- Losing scene context in callbacks; prefer arrow functions for pointer handlers.
- Updating counters without calling refreshStatus(), so UI appears stale.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
