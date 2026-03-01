# Advanced Phaser Track — Platformer — Week 2 — Day 4: Respawn with DelayedCall

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Implement a hazard-triggered respawn sequence using `this.time.delayedCall` — fading the player out, pausing movement, then repositioning and restoring after 1200ms — with a lives counter that triggers game over at zero.

## Phaser System Focus
`Phaser.Time.Clock` — `delayedCall(delay, callback, args, scope)`; `Phaser.Physics.Arcade.Body` — `setVelocity(0, 0)` for momentum clearing; `Phaser.GameObjects.Text` — `setText()` for live HUD updates; scene `restart()` for full reset.

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect the hazard overlap setup from the previous day in `Module04PlatformerScene.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
1. Declare `private lives = 3` and `private isRespawning = false` as class properties. Declare `private livesText!: Phaser.GameObjects.Text`.
2. In `create()`, create the lives text: `this.livesText = this.add.text(16, 40, 'Lives: 3', { fontSize: '20px', color: '#f9fafb' }).setDepth(50)`.
3. Define `private readonly SPAWN_X = 100` and `private readonly SPAWN_Y = 100` as class constants matching the player's starting position.
4. Replace or update `onHazardHit()` to call `this.respawnPlayer()` instead of only setting alpha.
5. Implement `private respawnPlayer(): void`:
   - Guard: `if (this.isRespawning) return;`
   - Set `this.isRespawning = true`.
   - Dim the player: `this.player.setAlpha(0.4)`.
   - Clear momentum: `(this.player.body as Phaser.Physics.Arcade.Body).setVelocity(0, 0)`.
   - Schedule the restore: `this.time.delayedCall(1200, () => { this.player.setPosition(this.SPAWN_X, this.SPAWN_Y); this.player.setAlpha(1); this.isRespawning = false; })`.
   - Decrement lives and update text: `this.lives--; this.livesText.setText('Lives: ' + this.lives)`.
   - If `this.lives <= 0`: show "Game Over" text and call `this.time.delayedCall(2000, () => this.scene.restart())`.

## Target Files
- `src/modules/module-04-platformer/scenes/Module04PlatformerScene.ts`

## Why This Phaser Pattern Matters
`this.time.delayedCall` is Phaser's built-in timer system — it runs inside the game loop and is automatically paused/resumed with the scene. Using `setTimeout` instead would continue firing even if the scene is paused or destroyed, causing callbacks to run against null references. The `isRespawning` guard prevents the hazard overlap from triggering `respawnPlayer` 60 times per second while the player is already mid-respawn. Clearing velocity before the delay ensures the player does not drift to an unexpected position during the 1200ms window.

## Specific Change Example
```ts
private lives = 3;
private isRespawning = false;
private livesText!: Phaser.GameObjects.Text;
private readonly SPAWN_X = 100;
private readonly SPAWN_Y = 100;

create(): void {
  // ... existing setup ...
  this.livesText = this.add.text(16, 40, 'Lives: 3', {
    fontSize: '20px', fontFamily: 'monospace', color: '#f9fafb'
  }).setDepth(50);
}

private respawnPlayer(): void {
  if (this.isRespawning) return; // prevent re-entry while timer is active
  this.isRespawning = true;

  this.player.setAlpha(0.4);
  (this.player.body as Phaser.Physics.Arcade.Body).setVelocity(0, 0);

  this.lives--;
  this.livesText.setText('Lives: ' + this.lives);

  if (this.lives <= 0) {
    this.add.text(480, 300, 'Game Over', { fontSize: '48px', color: '#ef4444' }).setOrigin(0.5).setDepth(100);
    this.time.delayedCall(2000, () => this.scene.restart());
    return;
  }

  this.time.delayedCall(1200, () => {
    this.player.setPosition(this.SPAWN_X, this.SPAWN_Y);
    this.player.setAlpha(1);
    this.isRespawning = false;
  });
}
```

## What To Observe At Runtime
- Player touches the hazard — alpha drops to 0.4 immediately and the lives counter decrements.
- After exactly 1200ms, the player snaps back to spawn position and alpha restores to 1.
- Touching the hazard repeatedly during the 1200ms window does not fire additional respawn sequences — the guard flag prevents re-entry.
- At 0 lives, "Game Over" text appears and the scene restarts after 2 seconds — all state resets cleanly.

## Done Criteria
- [ ] `isRespawning` guard prevents multiple overlapping respawn sequences.
- [ ] `this.time.delayedCall` is used — not `setTimeout` — so the timer respects scene pause/resume.
- [ ] `body.setVelocity(0, 0)` is called before the delay so the player doesn't drift during the respawn window.
- [ ] Committed naming the Phaser API used (e.g. `time.delayedCall`, `scene.restart`).

## Common Phaser Pitfalls
- Using `setTimeout` instead of `this.time.delayedCall` means the callback fires even after the scene is stopped or restarted, causing `this.player.setPosition` to run against a destroyed object and throw a runtime error.
- Forgetting `this.isRespawning = false` inside the `delayedCall` callback permanently locks the player out of future respawns for the rest of the scene session.
- Calling `scene.restart()` immediately on game over (without a delay) destroys the scene before the "Game Over" text has been on screen for any time — the player sees a flash rather than a message.

## References
- [Phaser.Time.Clock — delayedCall](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Time.Clock-delayedCall)
- [Phaser.Scene — restart](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Scene-restart)
- [Phaser ArcadeBody — setVelocity](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.Body-setVelocity)
- [Phaser Example — Delayed Call](https://phaser.io/examples/v3/view/time/delayed-call)
