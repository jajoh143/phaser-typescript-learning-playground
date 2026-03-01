# Advanced Phaser Track — Quest + Dialogue RPG — Week 2 — Day 5: Global vs Scene Event Bus

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Demonstrate the difference between `this.events` (scene-scoped) and `this.game.events` (game-scoped) by emitting a quest completion event on both buses and verifying which listeners fire in which scenes.

## Phaser System Focus
`this.events` (scene `EventEmitter`) vs `this.game.events` (game `EventEmitter`) — scope, lifetime, and cross-scene propagation.

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect `Module05RpgScene.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
Add a quest completion flow that emits on both buses and proves the scope difference:

1. In `Module05RpgScene.ts`, add a keyboard listener for the `C` key that simulates quest completion:
   ```ts
   this.input.keyboard?.on('keydown-C', () => this.completeQuest('lantern-quest'));
   ```
2. Implement `private completeQuest(questId: string): void`:
   - Emit on the **scene bus**: `this.events.emit('quest:complete', questId)` — heard only by listeners registered on this scene instance.
   - Emit on the **game bus**: `this.game.events.emit('quest:complete', questId)` — heard by any scene or system that has subscribed to `this.game.events`.
3. In `create()`, add a scene-bus listener that logs `[Scene] quest:complete` and updates a status Text to `'Quest complete!'`.
4. Also in `create()`, add a game-bus listener that logs `[Game] quest:complete` — this simulates what the module hub scene would receive.
5. In `shutdown()`, remove **both** listeners:
   ```ts
   this.events.off('quest:complete', ...);
   this.game.events.off('quest:complete', ...);
   ```

## Target Files
- `src/modules/module-05-rpg-quest-dialogue/scenes/Module05RpgScene.ts`

## Why This Phaser Pattern Matters
`this.events` is created fresh for each scene instance and is destroyed when the scene stops — any listener registered here is automatically cleaned up. `this.game.events` lives for the entire game session; listeners survive scene transitions. Use `this.events` for intra-scene communication (dialogue panel, HUD, state machine). Use `this.game.events` only when another scene genuinely needs to react — for example, the module hub updating a completion badge when this scene emits `'quest:complete'`. Mixing the two without understanding scope causes orphaned listeners and duplicate firings.

## Specific Change Example
```ts
// In create():
this.events.on('quest:complete', this.onQuestCompleteScene, this);
this.game.events.on('quest:complete', this.onQuestCompleteGame, this);

// Handlers:
private onQuestCompleteScene(questId: string): void {
  console.log('[Scene] quest:complete', questId);
  this.statusText.setText('Quest complete!');
}

private onQuestCompleteGame(questId: string): void {
  console.log('[Game] quest:complete', questId);
  // In a real hub scene: update badge, unlock next module, etc.
}

// Emit on both buses:
private completeQuest(questId: string): void {
  this.events.emit('quest:complete', questId);
  this.game.events.emit('quest:complete', questId);
}

// Cleanup in shutdown():
shutdown(): void {
  this.events.off('quest:complete', this.onQuestCompleteScene, this);
  this.game.events.off('quest:complete', this.onQuestCompleteGame, this);
}
```

## What To Observe At Runtime
- Pressing `C` logs both `[Scene] quest:complete lantern-quest` and `[Game] quest:complete lantern-quest` in DevTools, showing both buses fire.
- Navigate to the hub (H) and back, then press `C` again: if `shutdown()` cleanup is removed, `[Game] quest:complete` fires twice — once for the old listener and once for the new — proving that game-bus listeners must be manually removed.
- If you register only a `this.game.events` listener in a hypothetical hub scene and emit from this scene, the hub receives the event without any direct import or reference to this scene.

## Done Criteria
- [ ] `this.events.emit('quest:complete', questId)` and `this.game.events.emit('quest:complete', questId)` are both called in `completeQuest`.
- [ ] Separate handler methods are subscribed on each bus with `this` as context.
- [ ] `shutdown()` removes both listeners — tested by verifying no duplicate logs on scene re-entry.
- [ ] Committed naming the Phaser API used (`this.events`, `this.game.events`, scope distinction).

## Common Phaser Pitfalls
- Registering all quest events on `this.game.events` by default: when the scene restarts, listeners accumulate because game-bus listeners are not automatically removed. One C keypress eventually fires the handler N times where N equals the number of scene visits.
- Assuming `this.events.emit` can be heard from the hub scene: scene-scoped events are invisible outside the scene instance. Use `this.game.events` for any cross-scene communication.

## References
- [Phaser Scene Events](https://docs.phaser.io/phaser/concepts/scenes/events)
- [Game EventEmitter API](https://newdocs.phaser.io/docs/3.80.0/Phaser.Game#events)
- [EventEmitter on/off/emit](https://newdocs.phaser.io/docs/3.80.0/Phaser.Events.EventEmitter)
