# Advanced Phaser Track — Quest + Dialogue RPG — Week 2 — Day 3: Game Registry for Cross-Scene State

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Store quest progress in `this.game.registry` so the data survives scene transitions, read it back on re-entry, and subscribe to the registry's change event to reactively update HUD text when the registry value changes from any scene.

## Phaser System Focus
`Phaser.Data.DataManager` via `this.game.registry` — `set`, `get`, `registry.events.on('changedata-[key]', handler)`.

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect `Module05RpgScene.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
Wire quest progress to the game registry:

1. In `create()`, initialise the registry key if it does not already exist:
   ```ts
   if (!this.game.registry.has('questProgress')) {
     this.game.registry.set('questProgress', { active: [] as string[], complete: [] as string[] });
   }
   ```
2. Add a HUD Text object at `(20, 60)` that reads the initial value:
   ```ts
   const qp = this.game.registry.get('questProgress');
   this.questHud = this.add.text(20, 60, `Active: ${qp.active.length}`, { ... });
   ```
3. Subscribe to registry change events for this key:
   ```ts
   this.game.registry.events.on('changedata-questProgress', this.onQuestProgressChanged, this);
   ```
4. Implement `onQuestProgressChanged(parent: unknown, value: { active: string[]; complete: string[] })` — it calls `this.questHud.setText(...)` with the updated counts.
5. When the dialogue panel is clicked, simulate a quest accept by pushing `'lantern-quest'` into the registry value and re-setting it:
   ```ts
   const qp = this.game.registry.get('questProgress');
   qp.active.push('lantern-quest');
   this.game.registry.set('questProgress', qp);
   ```

## Target Files
- `src/modules/module-05-rpg-quest-dialogue/scenes/Module05RpgScene.ts`

## Why This Phaser Pattern Matters
`this.game.registry` is a `DataManager` attached to the `Game` instance — it persists across all scene starts, stops, and restarts. A scene-level property (`private questState`) is reset every time the scene restarts. The registry's `changedata-[key]` event fires on any `set` call for that key from any scene, making it the correct bus for game-wide state that multiple scenes need to observe simultaneously — for example, a module hub scene updating a quest tracker badge when this scene completes a quest.

## Specific Change Example
```ts
// Init once in create()
if (!this.game.registry.has('questProgress')) {
  this.game.registry.set('questProgress', { active: [] as string[], complete: [] as string[] });
}

// Subscribe
this.game.registry.events.on('changedata-questProgress', this.onQuestProgressChanged, this);

// Reactive handler
private onQuestProgressChanged(
  _parent: unknown,
  value: { active: string[]; complete: string[] }
): void {
  this.questHud.setText(`Active: ${value.active.length}  Complete: ${value.complete.length}`);
}

// Simulate accept on click
panel.on('pointerdown', () => {
  const qp = this.game.registry.get<{ active: string[]; complete: string[] }>('questProgress');
  qp.active.push('lantern-quest');
  this.game.registry.set('questProgress', qp);
});
```

## What To Observe At Runtime
- On first load the HUD shows `Active: 0`. Clicking the panel updates it to `Active: 1` without any direct call to `questHud.setText` in the click handler.
- Restarting the scene (press H, return) shows `Active: 1` on re-entry — confirming the registry outlives the scene.
- The `changedata-questProgress` event fires even if you call `registry.set` from the browser console: `scene.game.registry.set('questProgress', { active: ['x'], complete: [] })`.

## Done Criteria
- [ ] Registry is initialised with a guard (`registry.has`) to avoid overwriting on scene restart.
- [ ] `registry.events.on('changedata-questProgress', ...)` is subscribed with `this` as context.
- [ ] HUD text updates reactively on registry change — no direct `setText` call in the click handler.
- [ ] Committed naming the Phaser API used (`game.registry`, `changedata-[key]`).

## Common Phaser Pitfalls
- Mutating the object returned by `registry.get` without calling `registry.set` again: the mutation happens in place but the `changedata` event is never fired because Phaser only dispatches on explicit `set` calls.
- Subscribing to `registry.events.on` without removing the listener on scene shutdown: the game registry outlives scenes, so the listener will fire in later sessions even after this scene is gone, referencing a destroyed `questHud` object.

## References
- [Phaser Data Manager](https://docs.phaser.io/phaser/concepts/data-manager)
- [Game Registry API](https://newdocs.phaser.io/docs/3.80.0/Phaser.Game#registry)
- [DataManager events](https://newdocs.phaser.io/docs/3.80.0/Phaser.Data.Events)
