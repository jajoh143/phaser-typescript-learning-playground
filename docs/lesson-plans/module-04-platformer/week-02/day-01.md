# Module 4: Platformer - week-02 - day-01

## Session Goal
Add level goal and win logic.

## Concept Primer
Define clear level completion conditions.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Create goal object and trigger win state when reached.

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
- [Phaser Overlap](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.ArcadePhysics-overlap)
- [TS Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [MDN Boolean Logic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)

## Common Mistakes
- Infinite jump because grounded checks are missing.
- Over-tuned gravity/jump constants making controls feel broken.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
