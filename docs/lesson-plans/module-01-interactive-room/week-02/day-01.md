# Module 1: Interactive Room - week-02 - day-01

## Session Goal
Render arrays on screen.

## Concept Primer
Use arrays and loops to build repeated UI text safely.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Store interactable names in an array and render them as a vertical list.


## Why This Change Matters
- Today's change (Store interactable names in an array and render them as a vertical list.) directly supports the goal (Render arrays on screen.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for input events, scene state, and UI feedback loops so later features do not require large rewrites.

## Documentation Takeaways
- Model repeated game data as arrays so Store interactable names in an array and render them as a vertical list. can be iterated and rendered predictably.
- Use this reference to verify exact behavior while implementing Store interactable names in an array and render them as a vertical list..
- Model repeated game data as arrays so Store interactable names in an array and render them as a vertical list. can be iterated and rendered predictably.

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
- [MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [TypeScript Arrays](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

## Common Mistakes
- Losing scene context in callbacks; prefer arrow functions for pointer handlers.
- Updating counters without calling refreshStatus(), so UI appears stale.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
