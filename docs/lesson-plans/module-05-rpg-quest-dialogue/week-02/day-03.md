# Module 5: Quest + Dialogue RPG - week-02 - day-03

## Session Goal
Persist session state in memory.

## Concept Primer
Organize runtime state in one object for easier reasoning.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Build a GameState object and read/update it from dialogue and quest flows.


## Why This Change Matters
- Today's change (Build a GameState object and read/update it from dialogue and quest flows.) directly supports the goal (Persist session state in memory.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for state transitions, branching flow, and UI readability so later features do not require large rewrites.

## Documentation Takeaways
- Use this reference to verify exact behavior while implementing Build a GameState object and read/update it from dialogue and quest flows..
- Use this reference to verify exact behavior while implementing Build a GameState object and read/update it from dialogue and quest flows..
- Use this reference to verify exact behavior while implementing Build a GameState object and read/update it from dialogue and quest flows..

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
- [TS Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [MDN Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [State Containers (concept)](https://redux.js.org/introduction/core-concepts)

## Common Mistakes
- Dialogue ids and choice targets not matching, causing dead-end branches.
- Quest state changes not refreshing UI text after transitions.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
