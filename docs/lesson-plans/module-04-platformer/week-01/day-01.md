# Module 4: Platformer - week-01 - day-01

## Session Goal
Initialize gravity-based platformer.

## Concept Primer
Set up Arcade Physics world and player body.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Enable physics and create a player sprite/shape with gravity applied.


## Why This Change Matters
- Today's change (Enable physics and create a player sprite/shape with gravity applied.) directly supports the goal (Initialize gravity-based platformer.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for physics feel, collision states, and clear player feedback so later features do not require large rewrites.

## Documentation Takeaways
- Arcade Physics docs explain collider/overlap responsibilities so movement and collision responsibilities stay clear.
- Arcade Physics docs explain collider/overlap responsibilities so movement and collision responsibilities stay clear.
- Use this reference to verify exact behavior while implementing Enable physics and create a player sprite/shape with gravity applied..

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
- [Phaser Arcade Physics](https://docs.phaser.io/phaser/concepts/physics/arcade)
- [Phaser World Bounds](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.World-setBounds)
- [TS Number Type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean)

## Common Mistakes
- Infinite jump because grounded checks are missing.
- Over-tuned gravity/jump constants making controls feel broken.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
