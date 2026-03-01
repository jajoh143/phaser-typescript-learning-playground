# Advanced Phaser Track — Platformer — Week 2 — Day 1: Overlap vs Collider

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Implement both a physical collider (for platforms) and a non-physical overlap (for a hazard zone) in the same scene — understanding precisely what each does and when to use each.

## Phaser System Focus
`Phaser.Physics.Arcade.ArcadePhysics` — `add.collider()` vs `add.overlap()`; the callback signature for overlap handlers; `disableBody` vs letting a body remain active; `removeAllListeners` to freeze input on win/loss.

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect `Module04PlatformerScene.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
1. Create a hazard zone using a static physics image: `this.hazard = this.physics.add.staticImage(700, 530, '__DEFAULT')`. Call `this.hazard.body.setSize(120, 20)` and `this.hazard.refreshBody()`. Tint it red: `this.hazard.setTint(0xff4444)`.
2. Wire an overlap (not a collider) between the player and the hazard:
   ```ts
   this.physics.add.overlap(this.player, this.hazard, this.onHazardHit, undefined, this);
   ```
3. Implement `onHazardHit()` as a private method that logs `'hazard hit'` to console and sets the player alpha to 0.4 — confirming the callback fires without physical bounce-back.
4. Create a goal zone as a separate static image near the top-right, tinted green. Wire another overlap for the win condition: `this.physics.add.overlap(this.player, this.goal, this.onWin, undefined, this)`.
5. In `onWin()`, display a "You Win!" text at center screen and call `this.input.keyboard!.removeAllListeners()` to freeze input.

## Target Files
- `src/modules/module-04-platformer/scenes/Module04PlatformerScene.ts`

## Why This Phaser Pattern Matters
`add.collider` resolves the physical penetration between two bodies — it pushes them apart and prevents overlap. `add.overlap` detects that two bodies intersect but does nothing physical — the sprites pass through each other and only the callback fires. Using a collider for a hazard zone would cause the player to bounce off it (wrong feel); using an overlap correctly allows the hazard to be walked through while triggering damage logic. This distinction is one of the most common sources of unexpected physics behavior for developers new to Arcade Physics.

## Specific Change Example
```ts
private hazard!: Phaser.Physics.Arcade.StaticImage;
private goal!: Phaser.Physics.Arcade.StaticImage;

create(): void {
  // ... existing platform + player + collider setup ...

  // Hazard — overlap, not collider: player passes through, callback fires
  this.hazard = this.physics.add.staticImage(700, 530, '__DEFAULT');
  this.hazard.body.setSize(120, 20);
  this.hazard.refreshBody();
  this.hazard.setTint(0xff4444);
  this.physics.add.overlap(this.player, this.hazard, this.onHazardHit, undefined, this);

  // Goal — overlap triggers win state
  this.goal = this.physics.add.staticImage(860, 100, '__DEFAULT');
  this.goal.body.setSize(40, 40);
  this.goal.refreshBody();
  this.goal.setTint(0x44ff44);
  this.physics.add.overlap(this.player, this.goal, this.onWin, undefined, this);
}

private onHazardHit(): void {
  console.log('hazard hit'); // verify callback fires
  this.player.setAlpha(0.4); // visual cue — no bounce-back
}

private onWin(): void {
  this.add.text(480, 300, 'You Win!', { fontSize: '48px', color: '#facc15' }).setOrigin(0.5);
  this.input.keyboard!.removeAllListeners(); // freeze all keyboard input
}
```

## What To Observe At Runtime
- Player walks into the red hazard zone and passes through it — the overlap fires (alpha dims) but no physical push-back occurs.
- Player collides with platforms and is blocked — the collider prevents penetration normally.
- Player reaches the green goal — "You Win!" text appears and no further movement is possible (keyboard listeners removed).

## Done Criteria
- [ ] Hazard uses `add.overlap` — player passes through physically but the callback fires.
- [ ] Platforms use `add.collider` — player is physically blocked and cannot pass through.
- [ ] `onWin()` calls `removeAllListeners()` — movement stops after reaching the goal.
- [ ] Committed naming the Phaser API used (e.g. `physics.add.overlap`, `physics.add.collider`).

## Common Phaser Pitfalls
- Passing `null` as the process callback (4th argument) causes a TypeScript type error in strict mode — pass `undefined` instead.
- If the overlap callback fires every frame (player is standing in the zone), the callback is called 60 times per second. Add a guard flag `private isHazardActive = true` and set it to `false` inside `onHazardHit` to prevent repeated firing.
- `removeAllListeners()` on the keyboard plugin removes ALL listeners including those registered by Phaser itself (e.g. focus/blur). Prefer removing specific listeners with `this.input.keyboard!.off('keydown-SPACE', ...)` if you need partial cleanup.

## References
- [Phaser ArcadePhysics — overlap](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.ArcadePhysics-overlap)
- [Phaser ArcadePhysics — collider](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.ArcadePhysics-collider)
- [Phaser Arcade Physics Concepts](https://docs.phaser.io/phaser/concepts/physics/arcade)
- [Phaser Example — Overlap vs Collider](https://phaser.io/examples/v3/view/physics/arcade/overlap-vs-collider)
