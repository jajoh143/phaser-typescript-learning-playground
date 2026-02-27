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

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
