# Module 6: Capstone Adventure Hub - week-02 - day-01

## Session Goal
Add start and completion scenes.

## Concept Primer
Improve game flow with clear entry and ending.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Create title scene and completion scene linked to hub progression.

## Starter Code Hints
- Target files: src/modules/module-06-capstone-adventure-hub/scenes/Module06CapstoneScene.ts and src/modules/module-06-capstone-adventure-hub/logic/progress.ts.
- Suggested function names: setGateComplete(), isHubUnlocked(), saveProgress(), loadProgress().
- Keep one shared progress object as the source of truth.

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
- [Phaser Scenes](https://docs.phaser.io/phaser/concepts/scenes)
- [Phaser Scene Transition](https://docs.phaser.io/phaser/concepts/scenes#switching-scenes)
- [UX Onboarding Basics](https://www.nngroup.com/articles/onboarding-tutorials/)

## Common Mistakes
- Gate progress updated in multiple places without a single state owner.
- localStorage parse/read issues from unvalidated saved payloads.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
