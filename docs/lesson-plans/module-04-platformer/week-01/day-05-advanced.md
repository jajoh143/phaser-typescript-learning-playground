# Advanced Phaser Track — Platformer — Week 1 — Day 5: Physics Debug Graphics

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Enable Phaser's Arcade Physics debug overlay, bind a keyboard shortcut to toggle it at runtime, and understand what each debug color communicates about the physics simulation state.

## Phaser System Focus
`Phaser.Physics.Arcade.World` — `createDebugGraphic()`, `debugGraphic`, `debugBodyColor`, `debugVelocityColor`; `Phaser.Input.Keyboard` — `keydown-D` binding; the distinction between enabling debug at config time vs toggling it at runtime.

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect `Module04PlatformerScene.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
1. In `create()`, call `this.physics.world.createDebugGraphic()` to initialize the debug overlay. Store no reference — access it via `this.physics.world.debugGraphic`.
2. Set initial visibility to `false`: `this.physics.world.debugGraphic.setVisible(false)`.
3. Bind a `keydown-D` event in `create()` that toggles the graphic:
   ```ts
   this.input.keyboard!.on('keydown-D', () => {
     const dg = this.physics.world.debugGraphic;
     dg.setVisible(!dg.visible);
   });
   ```
4. Add a HUD text label: `this.add.text(10, 10, '[D] Toggle Debug', { fontSize: '14px', color: '#94a3b8' })`.
5. Add a comment block above the `createDebugGraphic()` call that documents the three debug colors:
   - Cyan (`0x00ffff`): body bounding box
   - Green (`0x00ff00`): blocked/touching direction indicators
   - Yellow (`0xffff00`): velocity vector arrows

## Target Files
- `src/modules/module-04-platformer/scenes/Module04PlatformerScene.ts`

## Why This Phaser Pattern Matters
The physics debug overlay is Phaser's most powerful first-debug tool for platformers. It makes invisible information visible: you can immediately see whether a platform's body is the wrong size, whether a body is offset from its sprite, and whether velocity vectors are pointing in the expected direction. Binding the toggle to a key rather than hardcoding `debug: true` in the config means you can ship with debug off by default and enable it instantly during a play session without a code change — critical for rapidly diagnosing collision bugs.

## Specific Change Example
```ts
create(): void {
  // ... existing setup (platforms, player, colliders) ...

  // Physics debug overlay — toggled with D key at runtime
  // Color guide:
  //   Cyan    (0x00ffff) — ArcadeBody bounding box
  //   Green   (0x00ff00) — blocked/touching face indicators
  //   Yellow  (0xffff00) — velocity vector arrows
  this.physics.world.createDebugGraphic();
  this.physics.world.debugGraphic.setVisible(false); // off by default

  this.input.keyboard!.on('keydown-D', () => {
    const dg = this.physics.world.debugGraphic;
    dg.setVisible(!dg.visible);
  });

  // HUD hint — set depth high so it renders above physics graphics
  this.add.text(10, 10, '[D] Toggle Debug', {
    fontSize: '14px',
    fontFamily: 'monospace',
    color: '#94a3b8',
  }).setDepth(100);
}
```

## What To Observe At Runtime
- Press D — cyan outlines appear around all physics bodies (player and every platform), confirming their actual collision boundaries rather than visual bounds.
- Move the player to a platform edge — observe that the green face indicators show which direction the body is currently blocked (pressed against a surface).
- Jump — with debug on, yellow velocity arrows appear on the player body showing the direction and approximate magnitude of the current velocity vector.

## Done Criteria
- [ ] Pressing D toggles the debug overlay on and off without requiring a reload.
- [ ] Debug starts hidden (`setVisible(false)`) — the overlay is not shown on scene start.
- [ ] A comment block documents all three debug colors with their hex values.
- [ ] Committed naming the Phaser API used (e.g. `createDebugGraphic`, `debugGraphic.setVisible`).

## Common Phaser Pitfalls
- Passing `debug: true` in the Arcade config enables the overlay but does so before `createDebugGraphic()` is called — the two approaches are independent and enabling both creates duplicate graphics. Use `createDebugGraphic()` in `create()` and leave `debug: false` in the config for the runtime-toggle pattern.
- The `debugGraphic` property is `undefined` until `createDebugGraphic()` is called. Calling `setVisible()` on it before that line throws a null reference error.
- Setting `this.physics.world.drawDebug = false` disables debug drawing at the world level but does not hide the existing `debugGraphic` object — it must be hidden separately via `debugGraphic.setVisible(false)`.

## References
- [Phaser.Physics.Arcade.World — createDebugGraphic](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.World-createDebugGraphic)
- [Phaser.Physics.Arcade.World — debugGraphic](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.World-debugGraphic)
- [Phaser Arcade Physics Concepts](https://docs.phaser.io/phaser/concepts/physics/arcade)
- [Phaser Example — Debug](https://phaser.io/examples/v3/view/physics/arcade/debug)
