# Module 3: Top-Down Adventure - week-01 - day-02

## Session Goal
Implement bounds and collisions.

## Concept Primer
Prevent player from leaving room and hitting obstacles.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Clamp player movement and block overlap with obstacle rectangles.

## Starter Code Hints
- Target files: src/modules/module-03-top-down-adventure/scenes/Module03AdventureScene.ts and src/modules/module-03-top-down-adventure/logic/roomConfig.ts.
- Suggested function names: handleMovement(), handleCollisions(), handleInteractions().
- Define shape/type contracts in src/modules/module-03-top-down-adventure/types/entities.ts first.

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
- [AABB Collision (concept)](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection)
- [Math.min/Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

## Common Mistakes
- Movement tied to frame rate instead of time-step-aware updates.
- Collision mismatch from center-based vs top-left coordinate assumptions.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
