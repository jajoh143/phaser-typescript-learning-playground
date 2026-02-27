# Module 5: Quest + Dialogue RPG - week-01 - day-05

## Session Goal
Connect dialogue to quest updates.

## Concept Primer
Trigger quest state changes from specific dialogue choices.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
When player accepts quest, set status to active and update UI.

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
- [TS Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [MDN Events](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events)
- [Phaser Scene Data](https://docs.phaser.io/phaser/concepts/scenes)

## Common Mistakes
- Dialogue ids and choice targets not matching, causing dead-end branches.
- Quest state changes not refreshing UI text after transitions.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
