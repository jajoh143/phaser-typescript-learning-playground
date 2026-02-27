# Bi-Weekly Learning Plan (JS/TS 70%, Phaser 30%)

Each task card is intended for one ~30-minute weekday session.

## Module 1 (Weeks 1-2): Interactive Room (Point-and-Click)

Week 1
- Day 1: Install tooling, run starter app, review `src/main.ts` and `src/game/config.ts`.
- Day 2: JS refresher on variables, functions, and object literals; edit scene text and constants.
- Day 3: TS basics with explicit types and simple custom types; add a typed `RoomState` property.
- Day 4: Phaser scene lifecycle (`constructor/create/update`); log lifecycle flow in code comments.
- Day 5: Input basics; add one more clickable object with separate click count.

Week 2
- Day 1: Arrays and loops; render a list of object names on screen from an array.
- Day 2: Conditionals; unlock hidden text after X clicks.
- Day 3: Functions and parameters; refactor repeated click handling into helper methods.
- Day 4: Mini polish pass; improve text layout/colors and simple feedback message.
- Day 5: Demo day; branch commit with short reflection on JS/TS concepts learned.

## Module 2 (Weeks 3-4): Tile Switch Puzzle

Week 1
- Day 1: Model puzzle grid as a 2D array in TS.
- Day 2: Implement click-to-toggle behavior for one tile.
- Day 3: Expand toggle rules to affect neighbors.
- Day 4: Render grid state visually in Phaser.
- Day 5: Add move counter and reset button.

Week 2
- Day 1: Write win-condition function with clear typed return values.
- Day 2: Add win message and disable input after success.
- Day 3: Randomized starting layouts with validity check.
- Day 4: Refactor puzzle logic into a dedicated module file.
- Day 5: Demo day; compare before/after refactor and note one improvement.

## Module 3 (Weeks 5-6): One-Room Top-Down Adventure

Week 1
- Day 1: Add player entity and keyboard movement.
- Day 2: Add world bounds and collision with simple obstacles.
- Day 3: Practice TS interfaces for player and room config.
- Day 4: Add collectible item and update inventory state.
- Day 5: Display HUD text for inventory and objective.

Week 2
- Day 1: Add doorway trigger for scene transition placeholder.
- Day 2: Use configuration objects to define room entities.
- Day 3: Add one NPC text interaction.
- Day 4: Refactor movement and interactions into small functions.
- Day 5: Demo day with checklist: move, collect, trigger, interact.

## Module 4 (Weeks 7-8): Single-Level Platformer

Week 1
- Day 1: Setup platformer scene with gravity and player body.
- Day 2: Implement horizontal move and jump controls.
- Day 3: Add platforms and simple hazard.
- Day 4: Add respawn logic when hitting hazard.
- Day 5: Tune physics numbers and document why values changed.

Week 2
- Day 1: Add level goal flag and win state.
- Day 2: Introduce reusable TS class for player controller.
- Day 3: Add collectible bonus objects.
- Day 4: Add a lightweight lives counter.
- Day 5: Demo day and short code cleanup pass.

## Module 5 (Weeks 9-10): Quest + Dialogue RPG Slice

Week 1
- Day 1: Design typed dialogue tree data structure.
- Day 2: Build simple dialogue UI box and next-choice input.
- Day 3: Add branching choices with state flags.
- Day 4: Model quest states (`locked`, `active`, `complete`).
- Day 5: Hook dialogue choices into quest state transitions.

Week 2
- Day 1: Add one fetch quest objective.
- Day 2: Add status panel for active/completed quest.
- Day 3: Save in-memory state object for replay during session.
- Day 4: Refactor dialogue/quest logic into separate files.
- Day 5: Demo day with full quest flow walkthrough.

## Module 6 (Weeks 11-12): Capstone Adventure Hub

Week 1
- Day 1: Define hub map and entry points to prior mini-game mechanics.
- Day 2: Reuse puzzle mechanic as one gate.
- Day 3: Reuse platform challenge as second gate.
- Day 4: Reuse dialogue quest for final unlock.
- Day 5: Integrate progress state across all gates.

Week 2
- Day 1: Add title/start and completion scene.
- Day 2: Add basic save/load with local storage.
- Day 3: Bug-fix and simplify confusing code paths.
- Day 4: Final polish (text readability, flow, objective clarity).
- Day 5: Capstone demo + retrospective and next-goal planning.

## Low-Time Fallback (Busy Week)

If time drops below target, do this minimum loop:
- Session A (30 min): read existing code and annotate one function.
- Session B (30 min): implement one tiny feature or bug fix.
- Session C (30 min): run and verify behavior, then commit notes.
