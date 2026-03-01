# Module 5: Quest + Dialogue RPG - week-01 - day-02

## Session Goal
Build dialogue UI scaffold.

## Concept Primer
Render text box and support advancing dialogue.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Create UI panel showing NPC line and current choice prompt.


## Why This Change Matters
- Today's change (Create UI panel showing NPC line and current choice prompt.) directly supports the goal (Build dialogue UI scaffold.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for state transitions, branching flow, and UI readability so later features do not require large rewrites.

## Documentation Takeaways
- UI/text docs reinforce that visual hierarchy is part of gameplay clarity, not optional polish.
- Use this reference to verify exact behavior while implementing Create UI panel showing NPC line and current choice prompt..
- Use this reference to verify exact behavior while implementing Create UI panel showing NPC line and current choice prompt..

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
- [Phaser Text](https://docs.phaser.io/phaser/concepts/gameobjects/text)
- [Phaser Containers](https://docs.phaser.io/phaser/concepts/gameobjects/container)
- [MDN Keyboard Events](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)

## Common Mistakes
- Dialogue ids and choice targets not matching, causing dead-end branches.
- Quest state changes not refreshing UI text after transitions.

## Phaser Context
Phaser `Text` GameObjects render using the Canvas 2D API under the hood. `wordWrap.width` tells Phaser to break lines at that pixel width — it calculates break points based on font metrics, not character count. `text.height` reflects the rendered height including all wrapped lines and can be read immediately after `this.add.text(...)` to drive dynamic panel sizing.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
