# Module 3: Top-Down Adventure - week-02 - day-05

## Session Goal
Run module demo checklist.

## Concept Primer
Validate core loop behavior end-to-end.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Verify move, collision, collect, and interact scenarios and fix one bug.

## Starter Code Hints
- Target files: src/modules/module-03-top-down-adventure/scenes/Module03AdventureScene.ts and src/modules/module-03-top-down-adventure/logic/roomConfig.ts.
- Suggested function names: handleMovement(), handleCollisions(), handleInteractions().
- Define shape/type contracts in src/modules/module-03-top-down-adventure/types/entities.ts first.

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
- [MDN Debugger Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
- [Bug Report Basics](https://www.atlassian.com/agile/software-development/bug-triage)

## Common Mistakes
- Movement tied to frame rate instead of time-step-aware updates.
- Collision mismatch from center-based vs top-left coordinate assumptions.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
