# Module 5: Quest + Dialogue RPG - week-02 - day-04

## Session Goal
Refactor dialogue and quest logic files.

## Concept Primer
Separate UI rendering from game state transitions.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Move transition logic to logic/ and keep scene focused on rendering/input.


## Why This Change Matters
- Today's change (Move transition logic to logic/ and keep scene focused on rendering/input.) directly supports the goal (Refactor dialogue and quest logic files.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for state transitions, branching flow, and UI readability so later features do not require large rewrites.

## Documentation Takeaways
- Splitting code by module keeps Move transition logic to logic/ and keep scene focused on rendering/input. from coupling tightly to rendering code.
- Use this reference to verify exact behavior while implementing Move transition logic to logic/ and keep scene focused on rendering/input..
- Use this reference to verify exact behavior while implementing Move transition logic to logic/ and keep scene focused on rendering/input..

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
- [TS Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)
- [MDN export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)

## Common Mistakes
- Dialogue ids and choice targets not matching, causing dead-end branches.
- Quest state changes not refreshing UI text after transitions.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
