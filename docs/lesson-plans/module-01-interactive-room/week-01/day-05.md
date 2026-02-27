# Module 1: Interactive Room - week-01 - day-05

## Session Goal
Expand interactivity with another clickable object.

## Concept Primer
Use event callbacks to mutate state in a predictable way.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Add a second interactive object and track both click counts independently.


## Why This Change Matters
- Today's change (Add a second interactive object and track both click counts independently.) directly supports the goal (Expand interactivity with another clickable object.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for input events, scene state, and UI feedback loops so later features do not require large rewrites.

## Documentation Takeaways
- Input docs encourage event-based wiring, reducing duplicated polling logic and missed edge cases.
- Use this reference to verify exact behavior while implementing Add a second interactive object and track both click counts independently..
- Typed helper functions make Add a second interactive object and track both click counts independently. easier to test and refactor without scene regressions.

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
- [Phaser Input Events](https://docs.phaser.io/phaser/concepts/input)
- [Phaser Game Objects](https://docs.phaser.io/phaser/concepts/gameobjects)
- [MDN Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

## Common Mistakes
- Losing scene context in callbacks; prefer arrow functions for pointer handlers.
- Updating counters without calling refreshStatus(), so UI appears stale.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
