# Module 1: Interactive Room - week-02 - day-04

## Session Goal
Polish the room UI.

## Concept Primer
Use small design tweaks to improve clarity for users.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Adjust text hierarchy, spacing, and colors for status readability.


## Why This Change Matters
- Today's change (Adjust text hierarchy, spacing, and colors for status readability.) directly supports the goal (Polish the room UI.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for input events, scene state, and UI feedback loops so later features do not require large rewrites.

## Documentation Takeaways
- UI/text docs reinforce that visual hierarchy is part of gameplay clarity, not optional polish.
- Use this reference to verify exact behavior while implementing Adjust text hierarchy, spacing, and colors for status readability..
- Use this reference to verify exact behavior while implementing Adjust text hierarchy, spacing, and colors for status readability..

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
- [Phaser Text Objects](https://docs.phaser.io/phaser/concepts/gameobjects/text)
- [Phaser Display List](https://docs.phaser.io/phaser/concepts/gameobjects/display-list)
- [MDN CSS Color (reference only)](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

## Common Mistakes
- Losing scene context in callbacks; prefer arrow functions for pointer handlers.
- Updating counters without calling refreshStatus(), so UI appears stale.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
