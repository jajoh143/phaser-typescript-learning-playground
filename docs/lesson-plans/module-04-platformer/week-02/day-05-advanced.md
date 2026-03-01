# Advanced Phaser Track — Platformer — Week 2 — Day 5: Platform Generation Patterns

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Compare three platform layout strategies — hardcoded positions, config array loop, and procedural generation with `Phaser.Math.RND` — implement the config array approach, and document the trade-offs of each in a comment block.

## Phaser System Focus
`Phaser.Physics.Arcade.StaticGroup` — `create()`, `refreshBody()`; `Phaser.Math.RND` — `between()` for procedural generation; TypeScript named constants replacing magic numbers in the scene; the "clean `update()` loop" architecture milestone.

## What To Build (30 Minutes)
- 5 min: Read this lesson and audit the current scene file for magic numbers and inline platform creation calls.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
1. Add a comment block at the top of the platforms section in `create()` comparing the three approaches:
   - **Hardcoded**: simplest, inflexible, breaks on resize or rebalance
   - **Config array**: readable, diffable, easy to swap — recommended for this project
   - **Procedural (`Phaser.Math.RND`)**: scalable, non-deterministic without a seed — good for roguelikes
2. Audit the scene for every magic number (speed, jump velocity, platform sizes, spawn positions). Move each one to a named constant in `physics.ts` or as a `private readonly` class constant with a descriptive name and a comment.
3. Refactor `update()` so it contains no inline physics logic — all movement calls delegate to `playerController.update()` (from day-02 of this week). The `update()` body should be under 10 lines.
4. Add a `private buildPlatforms(): void` helper method that contains the entire `staticGroup` creation loop. Call it from `create()` as `this.buildPlatforms()`. This keeps `create()` under 30 lines.
5. Add a brief procedural demo: write (but do not activate) a `private buildPlatformsProceduralDemo(): void` method that uses `Phaser.Math.RND.between(minX, maxX)` to place 5 random platforms, with a comment explaining why you would need a seeded RNG for reproducible levels.

## Target Files
- `src/modules/module-04-platformer/scenes/Module04PlatformerScene.ts`
- `src/modules/module-04-platformer/logic/physics.ts`

## Why This Phaser Pattern Matters
A clean `update()` loop is the single clearest indicator of well-structured Phaser scene code. When `update()` exceeds 30 lines, every future feature (camera shake, pause logic, cutscenes) must compete for space with movement math. Extracting `buildPlatforms()` into a helper method also creates a natural seam for a future level-loader that could call `this.buildPlatforms(levelData)` — the same scene handles multiple levels without modification. `Phaser.Math.RND` is worth knowing even if you do not use it today: it provides a seeded random number generator that makes procedural generation reproducible, which is essential for saving and replaying levels.

## Specific Change Example
```ts
// physics.ts — all tunable values centralized with comments
export const physicsDefaults = {
  gravityY: 900,       // px/s² — snappy arcade; ~400 = floaty, ~1400 = heavy
  moveSpeed: 220,      // px/s horizontal target speed
  jumpVelocity: -420,  // px/s upward impulse — more negative = higher jump
  groundDrag: 800,     // fast deceleration on ground
  airDrag: 200,        // momentum preservation in air
};

// Module04PlatformerScene.ts
create(): void {
  this.physics.world.gravity.y = physicsDefaults.gravityY;
  this.player = this.physics.add.sprite(SPAWN_X, SPAWN_Y, '__DEFAULT');
  this.player.body.setMaxVelocityX(300);
  this.platforms = this.physics.add.staticGroup();
  this.buildPlatforms();                          // extracted helper
  this.physics.add.collider(this.player, this.platforms);
  this.playerController = new PlayerController(this, this.player);
  this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '20px', color: '#f9fafb' });
}

update(): void {
  this.playerController.update(this.cursors);     // all movement delegated
}

// Trade-off comment block lives inside buildPlatforms():
// Approach 1 — Hardcoded: create(200, 400, '__DEFAULT') — simple but breaks on any layout change
// Approach 2 — Config array (used here): declarative, diffable, replaceable without touching Phaser calls
// Approach 3 — Procedural (Phaser.Math.RND): scalable but non-deterministic; requires seeded RNG for saves
private buildPlatforms(): void {
  for (const cfg of this.platformConfigs) {
    const plat = this.platforms.create(cfg.x, cfg.y, '__DEFAULT') as Phaser.Physics.Arcade.Image;
    plat.body.setSize(cfg.w, cfg.h);
    plat.refreshBody();
  }
}

private buildPlatformsProceduralDemo(): void {
  // NOT active — reference implementation for procedural generation
  // Phaser.Math.RND.between() is non-deterministic without a seed.
  // For reproducible levels, call: Phaser.Math.RND.init(['my-seed-string'])
  for (let i = 0; i < 5; i++) {
    const x = Phaser.Math.RND.between(100, 860);
    const y = Phaser.Math.RND.between(150, 480);
    const plat = this.platforms.create(x, y, '__DEFAULT') as Phaser.Physics.Arcade.Image;
    plat.body.setSize(160, 20);
    plat.refreshBody();
  }
}
```

## What To Observe At Runtime
- The scene plays identically to before the refactor — no behavioral changes, only structural improvements.
- The `update()` method in the source file is under 10 lines — confirm by opening the file during the session.
- Temporarily swapping `this.buildPlatforms()` for `this.buildPlatformsProceduralDemo()` in `create()` produces a different random layout on each reload — the procedural demo works but is non-deterministic.

## Done Criteria
- [ ] All magic numbers in the scene file are replaced with named constants from `physics.ts` or `private readonly` class properties.
- [ ] `update()` is under 10 lines and contains no inline physics velocity or drag calls.
- [ ] A comment block inside `buildPlatforms()` documents the trade-offs of all three platform generation approaches.
- [ ] Committed naming the Phaser API used (e.g. `Phaser.Math.RND.between`, `StaticGroup`, `refreshBody`).

## Common Phaser Pitfalls
- Extracting `buildPlatforms()` but accessing `this.platforms` before it is initialized in `create()` throws a null reference error — ensure `this.platforms = this.physics.add.staticGroup()` runs before `this.buildPlatforms()`.
- `Phaser.Math.RND.between(min, max)` is inclusive on both ends and returns an integer. For floating-point random values use `Phaser.Math.RND.frac()` multiplied by your range.
- A "clean `update()` loop" means readable delegation, not necessarily short in absolute line count — if each delegate call needs a comment, that comment belongs there and is acceptable.

## References
- [Phaser.Math.RND](https://newdocs.phaser.io/docs/3.80.0/Phaser.Math.RandomDataGenerator)
- [Phaser.Physics.Arcade.StaticGroup](https://newdocs.phaser.io/docs/3.80.0/Phaser.Physics.Arcade.StaticGroup)
- [Phaser Arcade Physics Concepts](https://docs.phaser.io/phaser/concepts/physics/arcade)
- [Phaser Example — Random Data Generator](https://phaser.io/examples/v3/view/math/random-data-generator/between)
