# Module 1: Interactive Room - week-02 - day-02

## Session Goal
Gate content with conditionals.

## Concept Primer
Use if/else and comparison operators to reveal hidden content.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Reveal a hint line only after total clicks exceed a threshold.


## Why This Change Matters
- Today's change (Reveal a hint line only after total clicks exceed a threshold.) directly supports the goal (Gate content with conditionals.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for input events, scene state, and UI feedback loops so later features do not require large rewrites.

## Documentation Takeaways
- Use this reference to verify exact behavior while implementing Reveal a hint line only after total clicks exceed a threshold..
- UI/text docs reinforce that visual hierarchy is part of gameplay clarity, not optional polish.
- Type narrowing helps branch logic stay safe when game state can be in multiple valid forms.

## Starter Code Hints
- Target files: src/modules/module-01-interactive-room/scenes/Module01RoomScene.ts and src/modules/module-01-interactive-room/logic/helpers.ts.
- Suggested function names: refreshStatus(), buildLabelText(), createInitialRoomState().
- Keep reusable label/state formatting in logic/helpers.ts.

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
- [MDN if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [TypeScript Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

## Common Mistakes
- Losing scene context in callbacks; prefer arrow functions for pointer handlers.
- Updating counters without calling refreshStatus(), so UI appears stale.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
