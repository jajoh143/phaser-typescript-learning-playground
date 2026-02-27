# Module 3: Top-Down Adventure - week-01 - day-01

## Session Goal
Add controllable player movement.

## Concept Primer
Connect keyboard input to player position updates.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Create a player object and move it with arrow keys or WASD.


## Why This Change Matters
- Today's change (Create a player object and move it with arrow keys or WASD.) directly supports the goal (Add controllable player movement.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for movement, collision, interaction flow, and HUD consistency so later features do not require large rewrites.

## Documentation Takeaways
- Input docs encourage event-based wiring, reducing duplicated polling logic and missed edge cases.
- Use this reference to verify exact behavior while implementing Create a player object and move it with arrow keys or WASD..
- Use this reference to verify exact behavior while implementing Create a player object and move it with arrow keys or WASD..

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
- [Phaser Keyboard Input](https://docs.phaser.io/phaser/concepts/input#keyboard)
- [MDN KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
- [TS Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)

## Common Mistakes
- Movement tied to frame rate instead of time-step-aware updates.
- Collision mismatch from center-based vs top-left coordinate assumptions.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
