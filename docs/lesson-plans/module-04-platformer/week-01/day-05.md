# Module 4: Platformer - week-01 - day-05

## Session Goal
Tune physics constants.

## Concept Primer
Adjust feel using small iterative parameter changes.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Update gravity/moveSpeed/jumpVelocity and note why.


## Why This Change Matters
- Today's change (Update gravity/moveSpeed/jumpVelocity and note why.) directly supports the goal (Tune physics constants.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for physics feel, collision states, and clear player feedback so later features do not require large rewrites.

## Documentation Takeaways
- UI/text docs reinforce that visual hierarchy is part of gameplay clarity, not optional polish.
- Arcade Physics docs explain collider/overlap responsibilities so movement and collision responsibilities stay clear.
- Use `const` for stable references in today's task (Update gravity/moveSpeed/jumpVelocity and note why.) so only intended state changes remain mutable.

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
- [Game Feel Basics](https://www.gdcvault.com/play/1012210/Juice-It-or-Lose)
- [Phaser Arcade Config](https://docs.phaser.io/phaser/concepts/physics/arcade)
- [TS Const Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

## Common Mistakes
- Infinite jump because grounded checks are missing.
- Over-tuned gravity/jump constants making controls feel broken.

## Phaser Context
Physics tuning constants like `gravityY`, `moveSpeed`, and `jumpVelocity` directly control how the player feels to operate — they are the knobs between "this feels right" and "this feels broken." Key concept: Lower `jumpVelocity` (less negative, e.g. `-250` instead of `-420`) means a lower, shorter jump arc; higher `gravityY` means the player falls faster and the game feels heavier. Key concept: Documenting why you chose a value (e.g. `// 900 = snappy arcade feel; lower for floaty`) helps future you understand the intent rather than re-discovering it by trial and error.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
