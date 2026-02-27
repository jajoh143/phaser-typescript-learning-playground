# Module 3: Top-Down Adventure - week-02 - day-02

## Session Goal
Drive room from config objects.

## Concept Primer
Make room layout data-driven.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Move obstacle/NPC/item definitions into typed config arrays.


## Why This Change Matters
- Today's change (Move obstacle/NPC/item definitions into typed config arrays.) directly supports the goal (Drive room from config objects.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for movement, collision, interaction flow, and HUD consistency so later features do not require large rewrites.

## Documentation Takeaways
- Use this reference to verify exact behavior while implementing Move obstacle/NPC/item definitions into typed config arrays..
- Serialize only the minimal progress payload and parse with fallback defaults to avoid corrupt-session crashes.
- Use this reference to verify exact behavior while implementing Move obstacle/NPC/item definitions into typed config arrays..

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
- [TS Readonly (optional)](https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties)
- [MDN JSON](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON)
- [Data Driven Design](https://gameprogrammingpatterns.com/data-locality.html)

## Common Mistakes
- Movement tied to frame rate instead of time-step-aware updates.
- Collision mismatch from center-based vs top-left coordinate assumptions.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
