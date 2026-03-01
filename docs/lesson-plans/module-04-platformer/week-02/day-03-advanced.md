# Advanced Phaser Track — Platformer — Week 2 — Day 3: Collectible Pattern

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Implement a set of collectible coins using a dynamic physics group, an overlap callback that disables each coin on collection, and a live score counter displayed as a Text object.

## Phaser System Focus
`Phaser.Physics.Arcade.Group` — `add()`, `getChildren()`; `GameObject.disableBody(disableGameObject, hideGameObject)`; `Phaser.GameObjects.Text` — `setText()`; the difference between `staticGroup` and dynamic `group` for collectibles.

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect `Module04PlatformerScene.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
1. Declare `private coins!: Phaser.Physics.Arcade.Group` and `private score = 0` as class properties.
2. Declare `private scoreText!: Phaser.GameObjects.Text`.
3. In `create()`, initialize the group: `this.coins = this.physics.add.group()`.
4. Spawn five coins at positions spread across the platforms. For each: `const coin = this.coins.create(x, y, '__DEFAULT') as Phaser.Physics.Arcade.Image`. Tint each one: `coin.setTint(0xfbbf24)`. Call `coin.body.setAllowGravity(false)` so coins float in place rather than falling.
5. Wire the overlap: `this.physics.add.overlap(this.player, this.coins, this.collectCoin, undefined, this)`.
6. Implement `private collectCoin(_player: Phaser.GameObjects.GameObject, coin: Phaser.GameObjects.GameObject): void` — inside: call `(coin as Phaser.Physics.Arcade.Image).disableBody(true, true)`, increment `this.score`, and call `this.scoreText.setText('Score: ' + this.score)`.
7. Create the score text in `create()` after the coins: `this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '20px', color: '#f9fafb' }).setDepth(50)`.

## Target Files
- `src/modules/module-04-platformer/scenes/Module04PlatformerScene.ts`

## Why This Phaser Pattern Matters
A dynamic `physics.add.group()` gives each member its own `ArcadeBody` automatically, enabling per-member overlap detection without a separate `collider()` call per coin. `disableBody(true, true)` is the correct removal pattern: it simultaneously deactivates the physics body (removes it from the simulation) and hides the sprite (sets `active = false`, `visible = false`). Calling `destroy()` instead is heavier and causes the group's `getChildren()` length to change mid-iteration, which corrupts overlap detection for the remaining coins in the same frame.

## Specific Change Example
```ts
private coins!: Phaser.Physics.Arcade.Group;
private score = 0;
private scoreText!: Phaser.GameObjects.Text;

create(): void {
  // ... existing setup ...

  this.coins = this.physics.add.group();

  const coinPositions = [
    { x: 200, y: 370 }, { x: 380, y: 180 }, { x: 600, y: 290 },
    { x: 750, y: 370 }, { x: 480, y: 100 },
  ];

  for (const pos of coinPositions) {
    const coin = this.coins.create(pos.x, pos.y, '__DEFAULT') as Phaser.Physics.Arcade.Image;
    coin.setTint(0xfbbf24);
    coin.body.setAllowGravity(false); // float in place — no physics drop
  }

  this.physics.add.overlap(this.player, this.coins, this.collectCoin, undefined, this);

  this.scoreText = this.add.text(16, 16, 'Score: 0', {
    fontSize: '20px',
    fontFamily: 'monospace',
    color: '#f9fafb',
  }).setDepth(50);
}

private collectCoin(
  _player: Phaser.GameObjects.GameObject,
  coin: Phaser.GameObjects.GameObject
): void {
  (coin as Phaser.Physics.Arcade.Image).disableBody(true, true);
  this.score++;
  this.scoreText.setText('Score: ' + this.score);
}
```

## What To Observe At Runtime
- Player walks into a coin — it disappears immediately (body disabled, sprite hidden) and the score increments.
- Remaining coins are unaffected when one is collected — group overlap continues working for active members.
- After collecting all five coins, the score reads 5 and no further overlap callbacks fire.

## Done Criteria
- [ ] Coins use `physics.add.group()` — each member has a physics body and `allowGravity = false`.
- [ ] `disableBody(true, true)` is called in the callback — the coin is removed from physics and hidden in one call.
- [ ] `scoreText.setText()` updates the display on each collection — verified by watching the on-screen counter.
- [ ] Committed naming the Phaser API used (e.g. `physics.add.group`, `disableBody`, `setText`).

## Common Phaser Pitfalls
- Calling `coin.destroy()` inside the overlap callback removes the object from the group mid-frame, which can cause Phaser to skip the overlap check for adjacent coins in the same resolution pass. Use `disableBody(true, true)` instead.
- Not calling `coin.body.setAllowGravity(false)` causes coins to fall through platforms unless you also add a collider between coins and platforms — adding unnecessary complexity. Float the coins explicitly.
- Typing the callback parameters as `Phaser.GameObjects.GameObject` is correct — the overlap callback receives the base type. Cast to the specific type inside the function body when calling physics methods.

## References
- [Phaser.Physics.Arcade.Group](https://newdocs.phaser.io/docs/3.80.0/Phaser.Physics.Arcade.Group)
- [Phaser ArcadeBody — disableBody](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.Body-enable)
- [Phaser.GameObjects.Text — setText](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.GameObjects.Text-setText)
- [Phaser Example — Overlap Group](https://phaser.io/examples/v3/view/physics/arcade/overlap)
