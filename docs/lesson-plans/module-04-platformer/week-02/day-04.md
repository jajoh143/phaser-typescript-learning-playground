# Module 4: Platformer - week-02 - day-04

## Session Goal
Add lives counter UI.

## Concept Primer
Reflect player state in a simple HUD.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Show current lives and update text on loss.

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
- [Phaser Text](https://docs.phaser.io/phaser/concepts/gameobjects/text)
- [TS Literal Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
- [UI State Basics](https://gameprogrammingpatterns.com/state.html)

## Common Mistakes
- Infinite jump because grounded checks are missing.
- Over-tuned gravity/jump constants making controls feel broken.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
