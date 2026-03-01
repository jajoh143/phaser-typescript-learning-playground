# Advanced Phaser Track — Quest + Dialogue RPG — Week 1 — Day 4: State Machine in a Scene

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Implement a minimal finite state machine directly in `Module05RpgScene` using a `const enum`, a private state field, and a `transition()` method that validates allowed moves and calls the appropriate enter function.

## Phaser System Focus
Scene-level state management — TypeScript `const enum` for zero-cost state labels, guard-clause transitions, and per-state enter functions that update Phaser display objects.

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect `Module05RpgScene.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
Add a state machine to `Module05RpgScene`:

1. Declare `const enum DialogueState { Idle, Active, AwaitingChoice, Complete }` at the top of the file (outside the class).
2. Add `private state: DialogueState = DialogueState.Idle` to the class.
3. Add a `private transition(next: DialogueState): void` method. Inside it, define a `const allowed` map of valid `current → next[]` pairs. If `next` is not in the allowed set for `this.state`, log a warning and return. Otherwise set `this.state = next` and call a corresponding enter function.
4. Implement four enter functions — `enterIdle`, `enterActive`, `enterAwaitingChoice`, `enterComplete` — each as a stub that logs its name for now.
5. In `create()`, call `this.transition(DialogueState.Active)` immediately after building the dialogue panel, so the machine starts in Active on scene creation.
6. Wire the dialogue panel's `pointerdown` handler (from Day 1) to call `this.transition(DialogueState.AwaitingChoice)`.

## Target Files
- `src/modules/module-05-rpg-quest-dialogue/scenes/Module05RpgScene.ts`

## Why This Phaser Pattern Matters
Phaser scenes have their own lifecycle but no built-in sub-state management. Without an explicit state machine, conditional logic scattered across `create`, input handlers, and update multiplies as the feature grows. A `const enum` compiles to integer literals — zero runtime overhead — and the transition guard prevents illegal state jumps (e.g., jumping from `Idle` to `Complete`) from silently corrupting the scene. Each `enterX` function becomes the single authoritative place where Phaser GameObjects are shown, hidden, or restyled for that state.

## Specific Change Example
```ts
const enum DialogueState { Idle, Active, AwaitingChoice, Complete }

export class Module05RpgScene extends Phaser.Scene {
  private state: DialogueState = DialogueState.Idle;

  private transition(next: DialogueState): void {
    const allowed: Record<DialogueState, DialogueState[]> = {
      [DialogueState.Idle]:           [DialogueState.Active],
      [DialogueState.Active]:         [DialogueState.AwaitingChoice],
      [DialogueState.AwaitingChoice]: [DialogueState.Active, DialogueState.Complete],
      [DialogueState.Complete]:       [],
    };
    if (!allowed[this.state].includes(next)) {
      console.warn(`Invalid transition: ${this.state} → ${next}`);
      return;
    }
    this.state = next;
    const enters = {
      [DialogueState.Idle]:           () => this.enterIdle(),
      [DialogueState.Active]:         () => this.enterActive(),
      [DialogueState.AwaitingChoice]: () => this.enterAwaitingChoice(),
      [DialogueState.Complete]:       () => this.enterComplete(),
    };
    enters[next]();
  }

  private enterIdle()           { console.log('state: Idle'); }
  private enterActive()         { console.log('state: Active'); }
  private enterAwaitingChoice() { console.log('state: AwaitingChoice'); }
  private enterComplete()       { console.log('state: Complete'); }
}
```

## What To Observe At Runtime
- On scene load, the DevTools console logs `'state: Active'` — confirming the automatic transition from `Idle`.
- Clicking the dialogue panel logs `'state: AwaitingChoice'`.
- Attempting to transition from `Idle` directly to `Complete` (e.g., by calling it from the console) logs the warning and leaves the state unchanged.

## Done Criteria
- [ ] `const enum DialogueState` is declared outside the class with four members.
- [ ] `transition()` rejects invalid moves with a console warning and returns early.
- [ ] Scene starts in `Active` state on creation, confirmed by the console log.
- [ ] Committed naming the Phaser API used (scene class structure, `const enum`).

## Common Phaser Pitfalls
- Placing `const enum` inside the class body: TypeScript will not compile it there — enums must be at module scope or namespace scope.
- Calling enter functions directly (bypassing `transition`) to "shortcut" the guard: this defeats the machine and allows invalid states to persist silently until a later transition fails.

## References
- [Phaser Scene Lifecycle](https://docs.phaser.io/phaser/concepts/scenes)
- [TypeScript const enum](https://www.typescriptlang.org/docs/handbook/enums.html#const-enums)
- [Game Programming Patterns — State](https://gameprogrammingpatterns.com/state.html)
