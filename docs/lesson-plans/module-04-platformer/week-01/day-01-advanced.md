# Advanced Phaser Track — Platformer — Week 1 — Day 1: Arcade World Gravity & Physics Sprite

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Configure Arcade Physics with world gravity and create a physics-enabled player sprite that falls onto a static floor group — producing visible gravity-driven motion in `Module04PlatformerScene`.

## Phaser System Focus
`Phaser.Physics.Arcade` — world gravity configuration, `add.sprite` vs `physics.add.sprite`, `ArcadeBody` properties, and `staticGroup` for immovable collision surfaces.

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect `Module04PlatformerScene.ts` and `physics.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
In `Module04PlatformerScene`, do all of the following:

1. Set world gravity inside `create()` using `this.physics.world.gravity.y = physicsDefaults.gravityY` — import `physicsDefaults` from `../logic/physics` rather than using the magic number `900`.
2. Create the player with `this.physics.add.sprite(100, 100, '__DEFAULT')` and store it as a class property typed as `Phaser.Physics.Arcade.Sprite`.
3. Call `this.player.body.setAllowGravity(true)` explicitly — it is true by default, but stating it documents intent for code reviewers.
4. Create a floor static group: `this.platforms = this.physics.add.staticGroup()`, then call `.create(480, 550, '__DEFAULT').setScale(30, 1).refreshBody()` on it.
5. Wire the collider: `this.physics.add.collider(this.player, this.platforms)`.
6. Enable `debug: true` in the Arcade config so physics body outlines are visible during development.

## Target Files
- `src/modules/module-04-platformer/scenes/Module04PlatformerScene.ts`
- `src/modules/module-04-platformer/logic/physics.ts`

## Why This Phaser Pattern Matters
Arcade Physics is a simplified AABB-based system — it trades physical accuracy for performance and predictability. Setting gravity on the world applies it uniformly to every body that has `allowGravity = true`, which is the correct default rather than per-body gravity offsets. Without a `staticGroup` floor registered with a collider, the player sprite will fall through any visual rectangle because `add.rectangle` creates only a display object — it has no physics body, and the collider will never fire.

## Specific Change Example
```ts
// physics.ts — centralize tunable constants
export const physicsDefaults = {
  gravityY: 900,      // px/s² — snappy arcade feel
  moveSpeed: 220,     // px/s horizontal max
  jumpVelocity: -420  // negative = upward in Phaser's Y-down coordinate space
};

// Module04PlatformerScene.ts
import { physicsDefaults } from '../logic/physics';

export class Module04PlatformerScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite;
  private platforms!: Phaser.Physics.Arcade.StaticGroup;

  create(): void {
    // World gravity — pulls all allowGravity bodies downward each frame
    this.physics.world.gravity.y = physicsDefaults.gravityY;

    // StaticGroup — bodies with infinite mass, zero velocity, never move
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(480, 550, '__DEFAULT').setScale(30, 1).refreshBody();

    // Physics sprite — has both a Sprite (visual) and an ArcadeBody (physics)
    this.player = this.physics.add.sprite(100, 100, '__DEFAULT');
    this.player.body.setAllowGravity(true); // explicit for documentation clarity

    // Collider — resolves overlap so player stops on top of platform
    this.physics.add.collider(this.player, this.platforms);
  }
}
```

## What To Observe At Runtime
- The player rectangle falls from y=100 and lands on the floor — world gravity is applied and the body accelerates downward each frame.
- The player does not pass through the floor — the collider between the physics sprite and the static group resolves correctly.
- With `debug: true`, cyan outlines surround both the player body and floor body, confirming they are physics objects rather than plain display objects.

## Done Criteria
- [ ] Player sprite falls and rests on the static floor without clipping through.
- [ ] `physicsDefaults.gravityY` is used as the gravity value — no magic `900` literal appears in the scene file.
- [ ] Debug outlines are visible in-game (cyan rectangles around player and platform bodies).
- [ ] Committed naming the Phaser API used (e.g. `physics.add.staticGroup`, `physics.add.collider`).

## Common Phaser Pitfalls
- Calling `this.add.sprite()` instead of `this.physics.add.sprite()` creates a display-only object. It has no `body` property and throws `Cannot read properties of undefined (reading 'setAllowGravity')` at runtime.
- Forgetting `refreshBody()` after `setScale()` on a static body leaves the physics body at its original unscaled dimensions. The player clips through platform edges even though the visual looks correct.
- Setting `gravity.y` in the game config AND calling `this.physics.world.gravity.y =` in `create()` is not harmful but creates ambiguity about which value is authoritative. Pick one approach and document it.

## References
- [Phaser Arcade Physics Concepts](https://docs.phaser.io/phaser/concepts/physics/arcade)
- [Phaser.Physics.Arcade.World](https://newdocs.phaser.io/docs/3.80.0/Phaser.Physics.Arcade.World)
- [Phaser.Physics.Arcade.StaticGroup](https://newdocs.phaser.io/docs/3.80.0/Phaser.Physics.Arcade.StaticGroup)
- [ArcadeBody — setAllowGravity](https://newdocs.phaser.io/docs/3.80.0/focus/Phaser.Physics.Arcade.Body-setAllowGravity)
- [Phaser Example — Simple Body](https://phaser.io/examples/v3/view/physics/arcade/simple-body)
