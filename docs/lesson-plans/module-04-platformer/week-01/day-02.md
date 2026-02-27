# Module 4: Platformer - week-01 - day-02

## Session Goal
Implement movement and jump.

## Concept Primer
Translate input to horizontal velocity and jump impulse.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Add left/right movement and single jump when on floor.

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
- [Phaser Body Velocity](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.Body-velocity)
- [Phaser Cursors](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Types.Input.Keyboard.CursorKeys)
- [MDN Keydown](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)

## Common Mistakes
- Infinite jump because grounded checks are missing.
- Over-tuned gravity/jump constants making controls feel broken.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
