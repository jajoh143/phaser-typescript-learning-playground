# Module 4: Platformer - week-01 - day-03

## Session Goal
Create terrain and hazard.

## Concept Primer
Build level layout with platforms and one danger zone.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Add static platforms and a hazard that triggers failure.

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
- [Phaser StaticGroup](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.StaticGroup)
- [Phaser Collider](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.Collider)
- [2D Collision Primer](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection)

## Common Mistakes
- Infinite jump because grounded checks are missing.
- Over-tuned gravity/jump constants making controls feel broken.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
