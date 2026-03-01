# Advanced Phaser Track — Platformer — Week 2 — Day 2: PlayerController Class

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Extract all player movement and jump logic out of the scene into a standalone `PlayerController` class — the scene's `update()` loop should reduce to a single method call.

## Phaser System Focus
`Phaser.Physics.Arcade.Sprite` and `Phaser.Physics.Arcade.Body` used as dependencies injected into a plain TypeScript class; `Phaser.Types.Input.Keyboard.CursorKeys` as the controller's input interface; scene lifecycle delegation pattern.

## What To Build (30 Minutes)
- 5 min: Read this lesson and identify all movement/jump logic currently inline in `Module04PlatformerScene.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
1. Create a new file `src/modules/module-04-platformer/PlayerController.ts`.
2. Define a class `PlayerController` with a constructor that accepts `scene: Phaser.Scene` and `sprite: Phaser.Physics.Arcade.Sprite`. Store both as `private` fields.
3. Move all velocity, drag, jump, and coyote/buffer logic from the scene into this class. The class should own `private lastGroundedTime`, `private jumpBufferTime`, and the timing constants.
4. Register the `keydown-SPACE` jump buffer listener on `scene.input.keyboard!` inside the constructor.
5. Expose a single public method: `update(cursors: Phaser.Types.Input.Keyboard.CursorKeys): void` that contains all per-frame movement logic.
6. In `Module04PlatformerScene`, replace the inline player logic with: declare `private playerController!: PlayerController`; instantiate it in `create()`; call `this.playerController.update(this.cursors)` in `update()`.

## Target Files
- `src/modules/module-04-platformer/PlayerController.ts` (new file)
- `src/modules/module-04-platformer/scenes/Module04PlatformerScene.ts`

## Why This Phaser Pattern Matters
Inline movement logic inside a Phaser `Scene` class grows quickly — within a week the `update()` method becomes the longest method in the codebase. A `PlayerController` class does not extend any Phaser class; it is a plain TypeScript object that holds Phaser API references as dependencies. This pattern is directly reusable: the same controller can be instantiated in a test scene, a tutorial scene, or a multiplayer variant without inheriting scene lifecycle constraints. The scene's `update()` loop stays under 10 lines and communicates intent rather than mechanics.

## Specific Change Example
```ts
// PlayerController.ts
import { physicsDefaults } from './logic/physics';

export class PlayerController {
  private readonly sprite: Phaser.Physics.Arcade.Sprite;
  private lastGroundedTime = 0;
  private jumpBufferTime = 0;
  private readonly COYOTE_MS = 120;
  private readonly JUMP_BUFFER_MS = 100;

  constructor(scene: Phaser.Scene, sprite: Phaser.Physics.Arcade.Sprite) {
    this.sprite = sprite;
    scene.input.keyboard!.on('keydown-SPACE', () => {
      this.jumpBufferTime = Date.now();
    });
  }

  update(cursors: Phaser.Types.Input.Keyboard.CursorKeys): void {
    const body = this.sprite.body as Phaser.Physics.Arcade.Body;
    const onGround = body.blocked.down;

    if (onGround) this.lastGroundedTime = Date.now();

    body.setDragX(onGround ? physicsDefaults.groundDrag : physicsDefaults.airDrag);

    if (cursors.left.isDown)       body.setVelocityX(-physicsDefaults.moveSpeed);
    else if (cursors.right.isDown) body.setVelocityX(physicsDefaults.moveSpeed);

    const canJump = onGround || (Date.now() - this.lastGroundedTime < this.COYOTE_MS);
    if (canJump && Date.now() - this.jumpBufferTime < this.JUMP_BUFFER_MS) {
      body.setVelocityY(physicsDefaults.jumpVelocity);
      this.jumpBufferTime = 0;
    }
  }
}

// Module04PlatformerScene.ts — create():
this.playerController = new PlayerController(this, this.player);

// Module04PlatformerScene.ts — update():
this.playerController.update(this.cursors);
```

## What To Observe At Runtime
- All movement and jump behavior is identical to before the refactor — the controller is behaviorally transparent from the player's perspective.
- The scene's `update()` method contains only the `playerController.update()` call — no inline velocity or drag code remains.
- Temporarily removing the `keydown-SPACE` listener from the constructor and verifying that jump no longer works confirms the controller owns its input lifecycle.

## Done Criteria
- [ ] `PlayerController` is in its own file, not defined inside the scene.
- [ ] The constructor accepts `scene` and `sprite` — no global references, no singleton pattern.
- [ ] All timing state (`lastGroundedTime`, `jumpBufferTime`) is `private` to the controller.
- [ ] Committed naming the Phaser API used (e.g. `Phaser.Physics.Arcade.Sprite`, `CursorKeys`).

## Common Phaser Pitfalls
- Passing `this` (the scene) to the controller constructor is correct — but storing it as a `private scene` field and calling `this.scene.physics...` inside the controller re-couples the controller to the scene lifecycle, defeating the encapsulation goal. Only call scene APIs in the constructor, not in `update()`.
- Accessing `sprite.body` returns `Phaser.Physics.Arcade.Body | Phaser.Physics.Arcade.StaticBody` — cast it explicitly to `Phaser.Physics.Arcade.Body` inside the controller to access dynamic-body methods like `setVelocityX`.
- Forgetting to call `this.playerController.update(this.cursors)` from the scene's `update()` causes the controller to exist but never run — movement stops working silently.

## References
- [Phaser.Physics.Arcade.Sprite](https://newdocs.phaser.io/docs/3.80.0/Phaser.Physics.Arcade.Sprite)
- [Phaser.Types.Input.Keyboard.CursorKeys](https://newdocs.phaser.io/docs/3.80.0/Phaser.Types.Input.Keyboard.CursorKeys)
- [Phaser Keyboard Concepts](https://docs.phaser.io/phaser/concepts/input/keyboard)
- [Phaser Example — Sprite Physics](https://phaser.io/examples/v3/view/physics/arcade/sprite-vs-group)
