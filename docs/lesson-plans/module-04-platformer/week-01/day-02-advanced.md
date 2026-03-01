# Advanced Phaser Track — Platformer — Week 1 — Day 2: Jump Feel — Coyote Time & Jump Buffer

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Implement coyote time and jump buffering so that jumps at ledge edges feel responsive rather than punishing — a standard quality-of-life pattern found in nearly every polished platformer.

## Phaser System Focus
`Phaser.Physics.Arcade.Body` — `body.blocked.down` for ground detection; `Phaser.Input.Keyboard` — `keydown` event listener for jump buffer; `update()` timing to track grounded state persistently across frames.

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect the current jump logic in `Module04PlatformerScene.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
Replace any naive `if (body.blocked.down) jump()` logic with the following two-part pattern:

**Part 1 — Coyote Time:**
1. Declare `private lastGroundedTime = 0` as a class property.
2. In `update()`, whenever `this.player.body.blocked.down` is true, set `this.lastGroundedTime = Date.now()`.
3. Define the coyote window as a `private readonly COYOTE_MS = 120` class constant.
4. Compute `canCoyoteJump = Date.now() - this.lastGroundedTime < this.COYOTE_MS` each frame.

**Part 2 — Jump Buffer:**
1. Declare `private jumpBufferTime = 0` as a class property.
2. In `create()`, register `this.input.keyboard!.on('keydown-SPACE', () => { this.jumpBufferTime = Date.now(); })`.
3. Define the buffer window as a `private readonly JUMP_BUFFER_MS = 100` class constant.
4. In `update()`, fire a jump if `Date.now() - this.jumpBufferTime < this.JUMP_BUFFER_MS` AND `(body.blocked.down || canCoyoteJump)`.
5. After a successful jump, reset the buffer: `this.jumpBufferTime = 0`.

## Target Files
- `src/modules/module-04-platformer/scenes/Module04PlatformerScene.ts`

## Why This Phaser Pattern Matters
`body.blocked.down` is only `true` for the frames when the body is physically resting against a surface. A player who presses SPACE one frame before landing will have their input ignored entirely without a buffer — the game feels unresponsive. Equally, a player who walks off a ledge loses `blocked.down` immediately even though human perception says they were "on the ground" a moment ago — the coyote window bridges that gap. Both issues feel unfair rather than difficult, and fixing them costs less than 15 lines of code.

## Specific Change Example
```ts
private lastGroundedTime = 0;
private jumpBufferTime = 0;
private readonly COYOTE_MS = 120;
private readonly JUMP_BUFFER_MS = 100;

create(): void {
  // ... existing physics/platform setup ...

  // Register jump buffer: capture the timestamp of the SPACE keydown
  this.input.keyboard!.on('keydown-SPACE', () => {
    this.jumpBufferTime = Date.now();
  });
}

update(): void {
  const body = this.player.body as Phaser.Physics.Arcade.Body;

  // Update coyote timer — track the last frame the player was on solid ground
  if (body.blocked.down) {
    this.lastGroundedTime = Date.now();
  }

  const canCoyoteJump = Date.now() - this.lastGroundedTime < this.COYOTE_MS;
  const jumpBuffered  = Date.now() - this.jumpBufferTime  < this.JUMP_BUFFER_MS;
  const isGrounded    = body.blocked.down || canCoyoteJump;

  if (jumpBuffered && isGrounded) {
    body.setVelocityY(-420); // use physicsDefaults.jumpVelocity in practice
    this.jumpBufferTime = 0;  // consume the buffered input so it fires only once
  }
}
```

## What To Observe At Runtime
- Walk off a platform edge and press SPACE within ~120ms of leaving — the player should still jump rather than falling helplessly.
- Press SPACE about 80ms before landing on a platform — the player should jump immediately on contact rather than requiring a second press.
- Rapid SPACE presses while airborne should not trigger a double-jump — the buffer only fires when grounded conditions are satisfied.

## Done Criteria
- [ ] Player can jump within 120ms of walking off a ledge (coyote time confirmed by observation).
- [ ] Pressing SPACE up to 100ms before landing triggers a jump on contact (buffer confirmed).
- [ ] `COYOTE_MS` and `JUMP_BUFFER_MS` are named class constants — no inline magic numbers.
- [ ] Committed naming the Phaser API used (e.g. `body.blocked.down`, `keydown-SPACE` event).

## Common Phaser Pitfalls
- Reading `body.blocked.down` inside a `keydown` event handler is unreliable — the blocked state reflects physics resolution at the time of polling in `update()`, not the moment of the key event, which fires asynchronously.
- Using `Phaser.Input.Keyboard.JustDown(key)` for the buffer check fails because `JustDown` is only true for one frame and resets immediately — it cannot be queried retroactively after the frame has passed.
- Forgetting to reset `jumpBufferTime` after a successful jump causes the buffer to re-trigger the next time the player lands, producing an unexpected instant bounce.

## References
- [Phaser ArcadeBody — blocked](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.Body-blocked)
- [Phaser Keyboard Events](https://docs.phaser.io/phaser/concepts/input/keyboard)
- [Phaser.Input.Keyboard.KeyboardPlugin](https://newdocs.phaser.io/docs/3.80.0/Phaser.Input.Keyboard.KeyboardPlugin)
- [Phaser Example — Cursor Keys](https://phaser.io/examples/v3/view/input/keyboard/cursor-keys)
