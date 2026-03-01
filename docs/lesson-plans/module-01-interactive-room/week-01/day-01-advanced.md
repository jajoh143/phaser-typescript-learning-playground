# Advanced Phaser Track — Interactive Room — Week 1 — Day 1: Scene Architecture

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Understand how Phaser's scene system works internally: the `sys` object, lifecycle event hooks, and how to observe scene state transitions at runtime.

## Phaser System Focus
Scene System (`Phaser.Scene`, `scene.sys`, `scene.events` lifecycle hooks)

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect `src/modules/module-01-interactive-room/scenes/Module01RoomScene.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
Add `init()`, `preload()`, and `shutdown()` lifecycle methods to `Module01RoomScene`. In each method, log a message that includes `this.scene.key` and the lifecycle name. In `create()`, listen to `this.events.on('shutdown', ...)` to observe how scene events fire. Add a visible on-screen text element showing the current scene key.

## Target Files
- `src/modules/module-01-interactive-room/scenes/Module01RoomScene.ts`

## Why This Phaser Pattern Matters
Every Phaser scene has a `sys` object managing its lifecycle, plugins, and event system. The lifecycle fires in a guaranteed order: `init → preload → create → update (loop) → shutdown → destroy`. Understanding this prevents bugs like trying to access GameObjects in `init()` before they exist, or forgetting to clean up listeners in `shutdown()` which causes memory leaks when the scene restarts. `this.events` is the scene-level emitter where lifecycle events are broadcast — it is distinct from `this.sys.events`.

## Specific Change Example
```ts
init(): void {
  console.log(`[${this.scene.key}] init fired`);
  // Safe to read passed data here, but no GameObjects exist yet.
}

preload(): void {
  console.log(`[${this.scene.key}] preload fired`);
  // Assets would be queued here.
}

create(): void {
  this.events.on('shutdown', () =>
    console.log(`[${this.scene.key}] shutdown event fired`)
  );

  this.add.text(20, 20, `Scene: ${this.scene.key}`, {
    fontFamily: 'monospace', fontSize: '28px', color: '#f9fafb'
  });
  // ... rest of create
}

shutdown(): void {
  console.log(`[${this.scene.key}] shutdown method fired`);
}
```

## What To Observe At Runtime
- Browser console shows `init → preload → create` in order when the scene first loads.
- Pressing H to navigate away triggers `shutdown method fired` in the console.
- Returning to the scene repeats the full lifecycle sequence — confirming the scene re-initializes cleanly.

## Done Criteria
- [ ] `init()`, `preload()`, and `shutdown()` methods are present and log their lifecycle name + scene key.
- [ ] `this.events.on('shutdown', ...)` listener is wired and fires in the console on scene exit.
- [ ] Scene key is displayed as visible on-screen text.
- [ ] Committed with a message naming `scene.events` as the Phaser API used.

## Common Phaser Pitfalls
- Calling `this.add.*` inside `init()` — GameObjects don't exist yet. `init()` is for reading passed data only.
- Confusing `this.events` (scene-level, for your code) with `this.sys.events` (system-level, for Phaser internals). Use `this.events` for your own lifecycle hooks.

## References
- [Phaser Concepts — Scenes](https://docs.phaser.io/phaser/concepts/scenes)
- [Phaser.Scene API](https://newdocs.phaser.io/docs/3.80.0/Phaser.Scene)
- [Phaser Example — Scene Events](https://phaser.io/examples/v3/view/scenes/scene-events)
