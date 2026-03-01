# Module 4: Platformer - week-02 - day-05

## Session Goal
Demo and clean up code.

## Concept Primer
Improve naming and remove dead code.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Rename unclear variables and delete unused helpers.


## Why This Change Matters
- Today's change (Rename unclear variables and delete unused helpers.) directly supports the goal (Demo and clean up code.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for physics feel, collision states, and clear player feedback so later features do not require large rewrites.

## Documentation Takeaways
- Use this reference to verify exact behavior while implementing Rename unclear variables and delete unused helpers..
- UI/text docs reinforce that visual hierarchy is part of gameplay clarity, not optional polish.
- Use this reference to verify exact behavior while implementing Rename unclear variables and delete unused helpers..

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
- [TS noUnusedLocals](https://www.typescriptlang.org/tsconfig#noUnusedLocals)
- [Code Hygiene](https://google.github.io/styleguide/tsguide.html)
- [Refactoring Intro](https://refactoring.guru/refactoring)

## Common Mistakes
- Infinite jump because grounded checks are missing.
- Over-tuned gravity/jump constants making controls feel broken.

## Phaser Context
Code cleanup in Phaser means separating magic numbers into named constants and grouping related logic into helper methods or classes. Key concept: Magic numbers like `220` for speed should be named constants (`MOVE_SPEED = 220`) — the name communicates intent and makes every future change a single-source edit. Key concept: A clean `update()` loop — ideally under 20 lines — is a sign of well-structured scene code where responsibilities are delegated to controllers, helpers, and event callbacks rather than written inline.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
