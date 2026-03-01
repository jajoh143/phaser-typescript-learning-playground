# Module 5: Quest + Dialogue RPG - week-01 - day-04

## Session Goal
Model quest state transitions.

## Concept Primer
Track quest lifecycle explicitly with string unions.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Create quest statuses locked/active/complete and transition functions.


## Why This Change Matters
- Today's change (Create quest statuses locked/active/complete and transition functions.) directly supports the goal (Model quest state transitions.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for state transitions, branching flow, and UI readability so later features do not require large rewrites.

## Documentation Takeaways
- Use this reference to verify exact behavior while implementing Create quest statuses locked/active/complete and transition functions..
- Use this reference to verify exact behavior while implementing Create quest statuses locked/active/complete and transition functions..
- Use this reference to verify exact behavior while implementing Create quest statuses locked/active/complete and transition functions..

## Starter Code Hints
- Target files: src/modules/module-05-rpg-quest-dialogue/scenes/Module05RpgScene.ts and src/modules/module-05-rpg-quest-dialogue/logic/dialogue.ts.
- Suggested function names: advanceDialogue(), applyChoice(), updateQuestStatus().
- Keep transitions in logic files and display/input handling in the scene.

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
- [TS String Literal Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)
- [TS Enums (optional)](https://www.typescriptlang.org/docs/handbook/enums.html)
- [State Machines](https://en.wikipedia.org/wiki/Finite-state_machine)

## Common Mistakes
- Dialogue ids and choice targets not matching, causing dead-end branches.
- Quest state changes not refreshing UI text after transitions.

## Phaser Context
Quest state (`locked`, `active`, `complete`) is a TypeScript union type — a pattern for finite state. A union type `"locked" | "active" | "complete"` prevents assigning invalid strings at compile time, giving you a type error immediately rather than a silent runtime bug. Phaser doesn't manage quest state; you track it in a plain object and call `text.setText()` on the relevant display object to sync the visual.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
