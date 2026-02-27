# Module 1: Interactive Room - week-01 - day-04

## Session Goal
Understand Phaser scene lifecycle.

## Concept Primer
Learn when constructor, preload, create, and update run.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Add minimal comments and console logs to confirm lifecycle order in your module scene.


## Why This Change Matters
- Today's change (Add minimal comments and console logs to confirm lifecycle order in your module scene.) directly supports the goal (Understand Phaser scene lifecycle.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for input events, scene state, and UI feedback loops so later features do not require large rewrites.

## Documentation Takeaways
- Scene docs emphasize where initialization ends and per-frame logic begins, reducing lifecycle bugs.
- Scene docs emphasize where initialization ends and per-frame logic begins, reducing lifecycle bugs.
- Use this reference to verify exact behavior while implementing Add minimal comments and console logs to confirm lifecycle order in your module scene..

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
- [Phaser Scenes](https://docs.phaser.io/phaser/concepts/scenes)
- [Phaser Scene API](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Scene)
- [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

## Common Mistakes
- Losing scene context in callbacks; prefer arrow functions for pointer handlers.
- Updating counters without calling refreshStatus(), so UI appears stale.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
