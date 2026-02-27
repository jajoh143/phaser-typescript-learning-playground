# Module 4: Platformer - week-02 - day-03

## Session Goal
Add collectible bonus items.

## Concept Primer
Use groups for repeated object interactions.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Spawn collectibles and update score when collected.


## Why This Change Matters
- Today's change (Spawn collectibles and update score when collected.) directly supports the goal (Add collectible bonus items.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for physics feel, collision states, and clear player feedback so later features do not require large rewrites.

## Documentation Takeaways
- Use this reference to verify exact behavior while implementing Spawn collectibles and update score when collected..
- Arcade Physics docs explain collider/overlap responsibilities so movement and collision responsibilities stay clear.
- Use this reference to verify exact behavior while implementing Spawn collectibles and update score when collected..

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
- [Phaser Groups](https://docs.phaser.io/phaser/concepts/gameobjects/group)
- [Phaser Arcade Sprite](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.Sprite)
- [MDN Increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)

## Common Mistakes
- Infinite jump because grounded checks are missing.
- Over-tuned gravity/jump constants making controls feel broken.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
