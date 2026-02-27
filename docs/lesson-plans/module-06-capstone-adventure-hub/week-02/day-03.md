# Module 6: Capstone Adventure Hub - week-02 - day-03

## Session Goal
Run bug-fix and simplification pass.

## Concept Primer
Find one confusing path and simplify it.

## What To Build (30 Minutes)
- 5 min: Read today's goal and inspect related files.
- 20 min: Implement the change described below.
- 5 min: Run, verify, and write one reflection note.

## Implementation Task
Use debugger/breakpoints to inspect flow and remove unnecessary branches.


## Why This Change Matters
- Today's change (Use debugger/breakpoints to inspect flow and remove unnecessary branches.) directly supports the goal (Run bug-fix and simplification pass.) by making the behavior explicit in code and visible at runtime.
- This step builds the foundation for scene orchestration, progress flow, and multi-system integration so later features do not require large rewrites.

## Documentation Takeaways
- Use this reference to verify exact behavior while implementing Use debugger/breakpoints to inspect flow and remove unnecessary branches..
- Use this reference to verify exact behavior while implementing Use debugger/breakpoints to inspect flow and remove unnecessary branches..
- Use this reference to verify exact behavior while implementing Use debugger/breakpoints to inspect flow and remove unnecessary branches..

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
- [VS Code Debugger](https://code.visualstudio.com/docs/editor/debugging)
- [MDN debugger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
- [Refactoring Guru](https://refactoring.guru/)

## Common Mistakes
- Gate progress updated in multiple places without a single state owner.
- localStorage parse/read issues from unvalidated saved payloads.

## Stretch (Optional)
- Add one small polish improvement while preserving readability.
