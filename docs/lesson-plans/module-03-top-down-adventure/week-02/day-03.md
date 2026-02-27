# Module 3: Top-Down Adventure - week-02 - day-03

## Session Goal
Add one NPC interaction line.

## Concept Primer
Implement interaction by distance and key press.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Show dialogue text when near NPC and pressing interaction key.


## Why This Change Matters
- Today's change (Show dialogue text when near NPC and pressing interaction key.) directly supports the goal (Add one NPC interaction line.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for movement, collision, interaction flow, and HUD consistency so later features do not require large rewrites.

## Documentation Takeaways
- Use this reference to verify exact behavior while implementing Show dialogue text when near NPC and pressing interaction key..
- Input docs encourage event-based wiring, reducing duplicated polling logic and missed edge cases.
- Use this reference to verify exact behavior while implementing Show dialogue text when near NPC and pressing interaction key..

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
- [Phaser Distance](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Math.Distance.Between)
- [Phaser Keyboard](https://docs.phaser.io/phaser/concepts/input#keyboard)
- [MDN Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Common Mistakes
- Movement tied to frame rate instead of time-step-aware updates.
- Collision mismatch from center-based vs top-left coordinate assumptions.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
