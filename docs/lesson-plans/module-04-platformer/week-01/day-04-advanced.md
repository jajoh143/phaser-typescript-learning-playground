# Advanced Phaser Track — Platformer — Week 1 — Day 4: Body Physics Tuning

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Tune the player's `ArcadeBody` velocity limits and drag values to create a distinct "grounded vs airborne" movement feel — and document each constant with a comment explaining the feel it achieves.

## Phaser System Focus
`Phaser.Physics.Arcade.Body` — `setMaxVelocityX`, `setDragX`, `setGravityY`; the difference between world gravity and per-body gravity offset; how drag is applied differently on ground vs in air to shape movement feel.

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect `physics.ts` and the player body setup in `Module04PlatformerScene.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
In `update()`, apply different drag values depending on whether the player is grounded or airborne:

1. Call `this.player.body.setMaxVelocityX(300)` once in `create()` — this caps horizontal speed regardless of how long the key is held.
2. In `update()`, check `body.blocked.down`:
   - If grounded: `body.setDragX(800)` — high drag, player stops quickly after releasing the key.
   - If airborne: `body.setDragX(200)` — low drag, player retains momentum mid-air.
3. In `physics.ts`, add two new exported constants: `groundDrag: 800` and `airDrag: 200`, each with a comment explaining the feel.
4. Add a comment on the `gravityY` constant explaining what value range feels "snappy arcade" vs "floaty". A value of `900` is snappy; `400` is floaty.
5. Use `body.setGravityY(0)` as a no-op call you can observe — confirm it does NOT override world gravity; it adds to it. Document this distinction in a code comment.

## Target Files
- `src/modules/module-04-platformer/scenes/Module04PlatformerScene.ts`
- `src/modules/module-04-platformer/logic/physics.ts`

## Why This Phaser Pattern Matters
A flat single drag value makes the player feel like they are sliding on ice when moving horizontally — input stops mattering once the player is in the air. Applying high drag on the ground (responsive, stops fast) and low drag in the air (momentum preserved, floaty) replicates the feel of virtually every precision platformer. The `setMaxVelocityX` cap prevents exponential speed buildup from physics integration, which can otherwise cause the player to clip through thin platforms at high velocities.

## Specific Change Example
```ts
// physics.ts
export const physicsDefaults = {
  gravityY: 900,      // px/s² — "snappy arcade"; use ~400 for floaty, ~1400 for heavy
  moveSpeed: 220,     // px/s applied as velocity per frame while key held
  jumpVelocity: -420, // negative = upward; less negative = lower jump arc
  groundDrag: 800,    // high drag on ground: player decelerates fast when key released
  airDrag: 200,       // low drag in air: preserves momentum for better platforming feel
};

// Module04PlatformerScene.ts — in create():
this.player.body.setMaxVelocityX(300); // hard cap regardless of acceleration

// In update():
const body = this.player.body as Phaser.Physics.Arcade.Body;
const onGround = body.blocked.down;

// Differentiated drag: ground = responsive stop, air = momentum preservation
body.setDragX(onGround ? physicsDefaults.groundDrag : physicsDefaults.airDrag);

if (cursors.left.isDown) {
  body.setVelocityX(-physicsDefaults.moveSpeed);
} else if (cursors.right.isDown) {
  body.setVelocityX(physicsDefaults.moveSpeed);
}
// No 'else setVelocityX(0)' — drag handles deceleration naturally
```

## What To Observe At Runtime
- Tap left or right briefly on the ground — the player moves a short distance and stops quickly due to high ground drag.
- Hold left while jumping, then release mid-air — the player continues drifting in that direction due to low air drag rather than stopping dead.
- Hold a direction key indefinitely — the player reaches max speed and holds there (velocity cap confirmed working).

## Done Criteria
- [ ] `groundDrag` and `airDrag` are separate named constants in `physics.ts`, each with a comment explaining the feel.
- [ ] `update()` switches drag value based on `body.blocked.down` — not a single static value applied unconditionally.
- [ ] `setMaxVelocityX` is called in `create()` with a comment explaining why a cap is needed.
- [ ] Committed naming the Phaser API used (e.g. `body.setDragX`, `body.setMaxVelocityX`).

## Common Phaser Pitfalls
- Calling `setVelocityX(0)` in the `else` branch (no key pressed) bypasses drag entirely — the player teleports to a stop rather than decelerating. Remove that branch and let drag do the work.
- Confusing `body.setGravityY(value)` with world gravity: `body.setGravityY` is an *additional* per-body offset added on top of `world.gravity.y`. Setting it to `0` does not disable gravity — it adds 0 to the world value, producing no change.
- Setting air drag too high (> 600) eliminates mid-air control entirely, which often feels worse than no drag differentiation at all.

## References
- [Phaser ArcadeBody — setDragX](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.Body-setDragX)
- [Phaser ArcadeBody — setMaxVelocityX](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.Body-setMaxVelocityX)
- [Phaser ArcadeBody — setGravityY](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.Body-setGravityY)
- [Phaser Example — Velocity and Drag](https://phaser.io/examples/v3/view/physics/arcade/drag)
