# Advanced Phaser Track — Quest + Dialogue RPG — Week 1 — Day 1: Container as Reusable UI Component

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Build a dialogue panel as a Phaser Container that encapsulates a background rectangle and a text label, positioned in world space, with a correctly declared hit area ready for pointer events.

## Phaser System Focus
`Phaser.GameObjects.Container` — local coordinate space, child management, `setSize().setInteractive()` for hit area declaration.

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect `Module05RpgScene.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
In `Module05RpgScene.ts`, replace the plain `this.add.text` call that renders `introDialogue.text` with a Container-based dialogue panel:

1. Create a `Phaser.GameObjects.Rectangle` at local `(0, 0)`, width 900, height 180, fill `0x1e1e2e`, alpha 0.95, origin `(0, 0)`.
2. Create a `Phaser.GameObjects.Text` at local `(20, 16)` showing `introDialogue.text`, monospace 18px, color `#fde68a`.
3. Add both to a Container at world `(40, 480)` via `this.add.container(40, 480, [bg, label])`.
4. Call `panel.setSize(900, 180).setInteractive()` so the hit area matches the rectangle.
5. On `pointerdown`, log `'dialogue panel clicked'` — placeholder for the advance-dialogue handler added on Day 3.

Keep everything inside `create()` for now — no separate class yet.

## Target Files
- `src/modules/module-05-rpg-quest-dialogue/scenes/Module05RpgScene.ts`
- `src/modules/module-05-rpg-quest-dialogue/logic/dialogue.ts`

## Why This Phaser Pattern Matters
A Container's children use its local coordinate space: a child at `(0, 0)` renders at the container's world position, not the canvas origin. Moving `container.x` repositions all children atomically — no per-child bookkeeping. `setSize` before `setInteractive` is mandatory because Containers have no intrinsic bounds; without an explicit size the hit area is zero and pointer events are silently swallowed with no error.

## Specific Change Example
```ts
create(): void {
  this.add.text(20, 20, 'Module 5: Quest + Dialogue RPG', {
    fontFamily: 'monospace',
    fontSize: '28px',
    color: '#f9fafb',
  });

  const bg = this.add
    .rectangle(0, 0, 900, 180, 0x1e1e2e)
    .setAlpha(0.95)
    .setOrigin(0, 0);

  const label = this.add.text(20, 16, introDialogue.text, {
    fontFamily: 'monospace',
    fontSize: '18px',
    color: '#fde68a',
  });

  const panel = this.add.container(40, 480, [bg, label]);
  panel.setSize(900, 180).setInteractive();
  panel.on('pointerdown', () => console.log('dialogue panel clicked'));

  this.input.keyboard?.on('keydown-H', () => this.scene.start('module-hub'));
}
```

## What To Observe At Runtime
- The yellow dialogue text appears inside a dark rectangle near the bottom of the canvas, not floating over the background.
- Clicking anywhere on the dark rectangle logs `'dialogue panel clicked'` in DevTools; clicking outside produces no output.
- In the browser console, inspect `scene.children.list` — the Container entry's `list` array contains both the Rectangle and the Text, confirming child ownership.

## Done Criteria
- [ ] A Container exists at world `(40, 480)` with a Rectangle and Text as children.
- [ ] `setSize(900, 180).setInteractive()` is called — clicks inside the panel fire the handler.
- [ ] `pointerdown` logs to the console, verified in DevTools.
- [ ] Committed naming the Phaser API used (`this.add.container`, `setInteractive`).

## Common Phaser Pitfalls
- Forgetting `setSize` before `setInteractive` on a Container: the hit area is `0×0` and clicks are silently ignored with no error or warning.
- Placing children at world coordinates instead of local coordinates — a text child intended to appear at screen `(60, 496)` inside a container at `(40, 480)` must use local `(20, 16)`, not `(60, 496)`.

## References
- [Phaser Containers Concept](https://docs.phaser.io/phaser/concepts/gameobjects/container)
- [Container API](https://newdocs.phaser.io/docs/3.80.0/Phaser.GameObjects.Container)
- [Interactive GameObjects](https://docs.phaser.io/phaser/concepts/input/interactive-gameobjects)
