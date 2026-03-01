# Module 5: Quest + Dialogue RPG - week-02 - day-05

## Session Goal
Run full quest flow demo.

## Concept Primer
Validate all branching and quest outcomes.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Walk through accept/decline/complete paths and log one bug or polish item.


## Why This Change Matters
- Today's change (Walk through accept/decline/complete paths and log one bug or polish item.) directly supports the goal (Run full quest flow demo.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for state transitions, branching flow, and UI readability so later features do not require large rewrites.

## Documentation Takeaways
- Use this reference to verify exact behavior while implementing Walk through accept/decline/complete paths and log one bug or polish item..
- UI/text docs reinforce that visual hierarchy is part of gameplay clarity, not optional polish.
- Use this reference to verify exact behavior while implementing Walk through accept/decline/complete paths and log one bug or polish item..

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
- [Debugging in VS Code](https://code.visualstudio.com/docs/editor/debugging)
- [Manual Test Checklist](https://www.browserstack.com/guide/test-case-checklist)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Common Mistakes
- Dialogue ids and choice targets not matching, causing dead-end branches.
- Quest state changes not refreshing UI text after transitions.

## Phaser Context
A complete quest flow in Phaser: player interacts → dialogue tree runs → quest state updates → HUD refreshes → completion event emits. Each step is a small, testable piece that composes into the full flow. `this.scene.start('module-hub')` can pass quest results back as scene data via its second argument: `this.scene.start('module-hub', { completedQuests: ['lantern-quest'] })`.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
