# Module 3: Top-Down Adventure - week-01 - day-05

## Session Goal
Show HUD objective and inventory.

## Concept Primer
Display live state updates clearly on screen.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Render inventory count and objective text that updates when item collected.


## Why This Change Matters
- Today's change (Render inventory count and objective text that updates when item collected.) directly supports the goal (Show HUD objective and inventory.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for movement, collision, interaction flow, and HUD consistency so later features do not require large rewrites.

## Documentation Takeaways
- UI/text docs reinforce that visual hierarchy is part of gameplay clarity, not optional polish.
- Scene docs emphasize where initialization ends and per-frame logic begins, reducing lifecycle bugs.
- Use this reference to verify exact behavior while implementing Render inventory count and objective text that updates when item collected..

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
- [Phaser Text](https://docs.phaser.io/phaser/concepts/gameobjects/text)
- [UI in Phaser (concept)](https://docs.phaser.io/phaser/concepts/scenes)
- [State Synchronization](https://gameprogrammingpatterns.com/state.html)

## Common Mistakes
- Movement tied to frame rate instead of time-step-aware updates.
- Collision mismatch from center-based vs top-left coordinate assumptions.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
