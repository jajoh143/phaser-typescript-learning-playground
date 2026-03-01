# Advanced Phaser Track — Quest + Dialogue RPG — Week 1 — Day 5: Reactive UI via Scene Events

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Decouple rendering from state transitions by emitting a `'dialogue:nodeChanged'` scene event whenever the active node advances, and subscribing the dialogue panel's render method to that event — keeping the state machine free of direct display-object references.

## Phaser System Focus
`Phaser.Events.EventEmitter` via `this.events` — `emit`, `on`, listener context binding, and `off` cleanup on scene shutdown.

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect `Module05RpgScene.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
Refactor the dialogue advance flow to use the scene event bus:

1. In your state machine's `enterActive()` method (from Day 4), after setting the current node, call:
   ```ts
   this.events.emit('dialogue:nodeChanged', this.currentNode);
   ```
2. Create a method `private renderNode(node: DialogueNode): void` that updates the dialogue panel's Text child to show `node.text` and calls `renderChoices(node)`.
3. In `create()`, subscribe with:
   ```ts
   this.events.on('dialogue:nodeChanged', this.renderNode, this);
   ```
   The third argument `this` binds the listener's context so `this.dialogueLabel` resolves correctly inside `renderNode`.
4. In a `shutdown()` override, remove the listener:
   ```ts
   this.events.off('dialogue:nodeChanged', this.renderNode, this);
   ```
5. Remove any direct `renderNode` calls from inside the state machine — the machine only emits; it never touches display objects.

## Target Files
- `src/modules/module-05-rpg-quest-dialogue/scenes/Module05RpgScene.ts`

## Why This Phaser Pattern Matters
`this.events` is the scene's own `EventEmitter` — it is destroyed automatically when the scene stops, so listeners registered with `this.events.on` do not leak across scene restarts the way `this.game.events` listeners would. Emitting an event as the sole output from a state transition means you can add any number of subscribers (HUD, debug overlay, analytics) without modifying the state machine. This is the Observer pattern at the scene layer — the same pattern Phaser uses internally for its own lifecycle events.

## Specific Change Example
```ts
// In create():
this.events.on('dialogue:nodeChanged', this.renderNode, this);

// State machine enter:
private enterActive(): void {
  // advance currentNode logic here ...
  this.events.emit('dialogue:nodeChanged', this.currentNode);
}

// Render subscriber — no state machine knowledge:
private renderNode(node: DialogueNode): void {
  this.dialogueLabel.setText(node.text);
  this.renderChoices(node);
}

// Cleanup:
shutdown(): void {
  this.events.off('dialogue:nodeChanged', this.renderNode, this);
}
```

## What To Observe At Runtime
- Advancing through dialogue nodes updates the panel text without any direct call from the state machine to the label or choice buttons.
- Adding a second `this.events.on('dialogue:nodeChanged', ...)` listener (e.g., a debug logger) fires both without changing the state machine.
- Removing the `shutdown()` cleanup and restarting the scene from the hub causes `renderNode` to be called twice per node advance on the second visit — demonstrating the leak that `off` prevents.

## Done Criteria
- [ ] `enterActive()` emits `'dialogue:nodeChanged'` with the current node as payload.
- [ ] `renderNode` is subscribed via `this.events.on` with `this` as context — no arrow function wrapper needed.
- [ ] `shutdown()` calls `this.events.off` with matching arguments to remove the listener.
- [ ] Committed naming the Phaser API used (`this.events.emit`, `this.events.on`, `this.events.off`).

## Common Phaser Pitfalls
- Registering the listener with an arrow function instead of a method reference: `this.events.on('x', () => this.renderNode(n))` cannot be removed with `off` because the arrow function is a new object each call — `off` compares by reference.
- Emitting from inside `renderNode` (creating a feedback loop): the event fires, `renderNode` runs, which emits again, causing a stack overflow. Only the state machine should emit `'dialogue:nodeChanged'`.

## References
- [Phaser Scene Events](https://docs.phaser.io/phaser/concepts/scenes/events)
- [EventEmitter API](https://newdocs.phaser.io/docs/3.80.0/Phaser.Events.EventEmitter)
- [Phaser Examples — Scene Events](https://phaser.io/examples/v3/view/scenes/events)
