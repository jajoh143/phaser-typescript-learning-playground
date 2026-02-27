# Module 3: Top-Down Adventure - week-02 - day-04

## Session Goal
Refactor movement and interactions.

## Concept Primer
Split complex update logic into small named functions.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Extract handleMovement, handlePickup, and handleNpcInteraction methods.

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
- [TS Methods in Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [Refactoring Catalog](https://refactoring.com/catalog/)
- [Readable Code](https://google.github.io/styleguide/tsguide.html)

## Common Mistakes
- Movement tied to frame rate instead of time-step-aware updates.
- Collision mismatch from center-based vs top-left coordinate assumptions.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
