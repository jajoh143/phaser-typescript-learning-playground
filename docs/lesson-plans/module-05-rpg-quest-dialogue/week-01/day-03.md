# Module 5: Quest + Dialogue RPG - week-01 - day-03

## Session Goal
Add branching dialogue paths.

## Concept Primer
Update state based on selected choices.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Implement at least two dialogue branches and next-node selection.

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
- [TS Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
- [MDN switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [Finite State Machines](https://gameprogrammingpatterns.com/state.html)

## Common Mistakes
- Dialogue ids and choice targets not matching, causing dead-end branches.
- Quest state changes not refreshing UI text after transitions.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
