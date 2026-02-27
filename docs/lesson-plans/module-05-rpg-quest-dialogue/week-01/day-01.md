# Module 5: Quest + Dialogue RPG - week-01 - day-01

## Session Goal
Define dialogue data structures.

## Concept Primer
Model conversation nodes and choices with types.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Create typed interfaces for DialogueNode and DialogueChoice.


## Why This Change Matters
- Today's change (Create typed interfaces for DialogueNode and DialogueChoice.) directly supports the goal (Define dialogue data structures.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for state transitions, branching flow, and UI readability so later features do not require large rewrites.

## Documentation Takeaways
- Use this reference to verify exact behavior while implementing Create typed interfaces for DialogueNode and DialogueChoice..
- Use this reference to verify exact behavior while implementing Create typed interfaces for DialogueNode and DialogueChoice..
- Use this reference to verify exact behavior while implementing Create typed interfaces for DialogueNode and DialogueChoice..

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
- [TS Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [TS Generics Intro](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Data Modeling](https://martinfowler.com/eaaCatalog/dataTransferObject.html)

## Common Mistakes
- Dialogue ids and choice targets not matching, causing dead-end branches.
- Quest state changes not refreshing UI text after transitions.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
