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


## Why This Change Matters
- Today's change (Show current lives and update text on loss.) directly supports the goal (Add lives counter UI.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for physics feel, collision states, and clear player feedback so later features do not require large rewrites.

## Documentation Takeaways
- UI/text docs reinforce that visual hierarchy is part of gameplay clarity, not optional polish.
- Use this reference to verify exact behavior while implementing Show current lives and update text on loss..
- UI/text docs reinforce that visual hierarchy is part of gameplay clarity, not optional polish.

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

## Phaser Context
A lives counter is state — a number you decrement on hazard hit and display via a Text object. Key concept: Phaser has no built-in "lives" system; you build it with a class property (`private lives = 3`) and a Text GameObject that calls `setText()` whenever the value changes. Key concept: `scene.restart()` resets all scene-level state, giving a clean game-over reset at the cost of re-running the full `create()` cycle — acceptable for simple resets but not for preserving cross-session data.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
