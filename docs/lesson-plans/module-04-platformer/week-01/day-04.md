# Module 4: Platformer - week-01 - day-04

## Session Goal
Implement respawn behavior.

## Concept Primer
Reset player state cleanly after failure.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
On hazard hit, move player to spawn and decrement lives.


## Why This Change Matters
- Today's change (On hazard hit, move player to spawn and decrement lives.) directly supports the goal (Implement respawn behavior.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for physics feel, collision states, and clear player feedback so later features do not require large rewrites.

## Documentation Takeaways
- Use this reference to verify exact behavior while implementing On hazard hit, move player to spawn and decrement lives..
- Use this reference to verify exact behavior while implementing On hazard hit, move player to spawn and decrement lives..
- Use this reference to verify exact behavior while implementing On hazard hit, move player to spawn and decrement lives..

## Starter Code Hints
- Target files: src/modules/module-04-platformer/scenes/Module04PlatformerScene.ts and src/modules/module-04-platformer/logic/physics.ts.
- Suggested function/class names: applyMovement(), respawnPlayer(), PlayerController.
- Keep tunable numbers centralized in logic/physics.ts.

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
- [TS State Objects](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [Phaser Events](https://docs.phaser.io/phaser/concepts/events)
- [MDN Assignment Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)

## Common Mistakes
- Infinite jump because grounded checks are missing.
- Over-tuned gravity/jump constants making controls feel broken.

## Phaser Context
The `physicsDefaults` object in `physics.ts` is a plain TypeScript constant — Phaser does not read it automatically. Key concept: You must pass these values explicitly to Phaser APIs (e.g. `body.setVelocityX(physicsDefaults.moveSpeed)`) — they have no effect on the simulation until you do. Key concept: Tuning physics constants is an iterative process — small changes (e.g. changing `gravityY` from 900 to 1100) have a large visible impact on player feel, so change one value at a time and run the game between each change.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
