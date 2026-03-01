# Advanced Phaser Track — Platformer — Week 1 — Day 3: StaticGroup Platforms from Config Array

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Replace any hardcoded individual platform calls with a typed config array that drives a single creation loop — separating level layout data from scene initialization code.

## Phaser System Focus
`Phaser.Physics.Arcade.StaticGroup` — `create()`, `body.setSize()`, `refreshBody()`; TypeScript interface for platform config; the architectural separation of declarative data from imperative Phaser calls.

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect how platforms are currently created in `Module04PlatformerScene.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
1. Define a TypeScript interface `PlatformConfig` with fields `x: number`, `y: number`, `w: number`, `h: number`.
2. Declare a `private readonly platformConfigs: PlatformConfig[]` class property (not a local variable in `create()`) initialized with at least 4 entries: a wide floor, two mid-height platforms, and one high platform.
3. In `create()`, replace any existing individual `platforms.create()` calls with a single loop:
   ```ts
   for (const cfg of this.platformConfigs) { ... }
   ```
4. Inside the loop: call `this.platforms.create(cfg.x, cfg.y, '__DEFAULT')`, cast the result to `Phaser.Physics.Arcade.Image`, then call `.body.setSize(cfg.w, cfg.h)` followed by `.refreshBody()`.
5. Add a short JSDoc comment above `platformConfigs` explaining why this data lives outside `create()`.
6. Verify each platform's body matches its intended dimensions by enabling debug mode.

## Target Files
- `src/modules/module-04-platformer/scenes/Module04PlatformerScene.ts`

## Why This Phaser Pattern Matters
When platforms are created with scattered hardcoded calls inside `create()`, adding, removing, or rebalancing the layout requires parsing imperative logic to understand what the level looks like. A config array makes the level data declarative — you can read it and visualize the layout without running the game. The `setSize` + `refreshBody` step is non-optional: `staticGroup.create()` assigns a default body matching the raw texture dimensions (32×32 for `'__DEFAULT'`), so every platform would have an identical tiny body regardless of visual scale unless you explicitly override the size and call `refreshBody()` to commit it.

## Specific Change Example
```ts
interface PlatformConfig {
  x: number;
  y: number;
  w: number; // physics body width in pixels
  h: number; // physics body height in pixels
}

// Separated from create() so layout data can be read, diffed, and replaced
// without touching scene lifecycle code. A future level loader can swap this
// array without modifying any Phaser API calls.
private readonly platformConfigs: PlatformConfig[] = [
  { x: 480, y: 550, w: 960, h: 32 }, // floor — full canvas width
  { x: 200, y: 400, w: 180, h: 20 }, // left mid platform
  { x: 600, y: 320, w: 200, h: 20 }, // right mid platform
  { x: 380, y: 210, w: 140, h: 20 }, // high platform near top
];

// Inside create():
this.platforms = this.physics.add.staticGroup();

for (const cfg of this.platformConfigs) {
  const plat = this.platforms.create(cfg.x, cfg.y, '__DEFAULT') as Phaser.Physics.Arcade.Image;
  plat.body.setSize(cfg.w, cfg.h);
  plat.refreshBody();
}

this.physics.add.collider(this.player, this.platforms);
```

## What To Observe At Runtime
- All four platforms are visible and the player lands correctly on each one — no fall-through at edges.
- With debug mode enabled, each platform's cyan body outline matches the `w` and `h` values in the config array rather than the default 32×32 square.
- Commenting out a single entry in `platformConfigs` removes that platform without changing any Phaser API calls — the data/behavior separation is confirmed working.

## Done Criteria
- [ ] A `PlatformConfig` TypeScript interface is defined and used to type the array.
- [ ] All platforms are created via a single loop over `platformConfigs` — no hardcoded individual `create()` calls remain in `create()`.
- [ ] Each platform body is sized with `setSize(w, h)` + `refreshBody()` and verified visually in debug mode.
- [ ] Committed naming the Phaser API used (e.g. `StaticGroup`, `body.setSize`, `refreshBody`).

## Common Phaser Pitfalls
- Calling `setScale(scaleX, scaleY)` on a static physics body scales the visual but does not update the body dimensions automatically — unlike dynamic bodies, static bodies require an explicit `refreshBody()` call after any transform change.
- Storing `platformConfigs` as a local `const` inside `create()` makes it inaccessible from other methods such as a procedural generator, a debug overlay, or a level-reload system.
- Using `this.physics.add.image()` instead of `this.platforms.create()` creates the sprite outside the group — it will not benefit from the group's batch collider and must have its own individual `collider()` call.

## References
- [Phaser.Physics.Arcade.StaticGroup](https://newdocs.phaser.io/docs/3.80.0/Phaser.Physics.Arcade.StaticGroup)
- [Phaser ArcadeBody — setSize](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.Body-setSize)
- [Phaser StaticBody — reset / refreshBody](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.StaticBody-reset)
- [Phaser Example — Static Group Platforms](https://phaser.io/examples/v3/view/physics/arcade/static-physics-group)
