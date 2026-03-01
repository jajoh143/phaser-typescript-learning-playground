# Module 5: Quest + Dialogue RPG - week-02 - day-01

## Session Goal
Add fetch quest objective.

## Concept Primer
Track item possession and completion checks.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Add one collectible requirement and complete quest when returned.


## Why This Change Matters
- Today's change (Add one collectible requirement and complete quest when returned.) directly supports the goal (Add fetch quest objective.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for state transitions, branching flow, and UI readability so later features do not require large rewrites.

## Documentation Takeaways
- Model repeated game data as arrays so Add one collectible requirement and complete quest when returned. can be iterated and rendered predictably.
- Type narrowing helps branch logic stay safe when game state can be in multiple valid forms.
- Use this reference to verify exact behavior while implementing Add one collectible requirement and complete quest when returned..

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
- [MDN Array includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [TS Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [Quest Design Basics](https://www.gamedeveloper.com/design)

## Common Mistakes
- Dialogue ids and choice targets not matching, causing dead-end branches.
- Quest state changes not refreshing UI text after transitions.

## Phaser Context
A fetch quest tracks an objective count in state and checks it on item pickup. `quest.objectiveCount += 1` mutates state; a separate display update call syncs the visual — Phaser does not automatically re-render when a plain object changes. Use a Text GameObject like `"Lanterns: 2 / 3"` as the HUD objective display and call `text.setText(...)` every time the count changes.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
