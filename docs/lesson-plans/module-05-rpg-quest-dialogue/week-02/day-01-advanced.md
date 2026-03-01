# Advanced Phaser Track — Quest + Dialogue RPG — Week 2 — Day 1: Depth Layers for HUD Overlay

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Define a numeric depth constant table, assign dialogue and HUD GameObjects to explicit depth layers, and verify that world objects are correctly occluded by the dialogue panel without any manual ordering calls.

## Phaser System Focus
`Phaser.GameObjects.GameObject.setDepth()` — depth sorting, render order, the difference between display list order and depth value.

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect `Module05RpgScene.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
Add explicit depth management to `Module05RpgScene`:

1. Declare a depth constant table at module scope (above the class):
   ```ts
   const DEPTH = { WORLD: 0, NPC: 10, DIALOGUE: 50, HUD: 100 } as const;
   ```
2. Add a placeholder world object — a rectangle at `(200, 300)`, 80×80, fill `0x34d399` — and call `.setDepth(DEPTH.WORLD)` on it.
3. Set the dialogue panel Container's depth: `panel.setDepth(DEPTH.DIALOGUE)`.
4. Add a HUD text in the top-right corner showing `'[H] Hub'`, and call `.setDepth(DEPTH.HUD)` on it.
5. Position the world rectangle so it visually overlaps the dialogue panel's area (e.g., y around 480) — confirm the panel renders on top.

## Target Files
- `src/modules/module-05-rpg-quest-dialogue/scenes/Module05RpgScene.ts`

## Why This Phaser Pattern Matters
Phaser's default render order follows display list insertion order — the last object added renders on top. Depth values override this: higher depth renders later (on top) regardless of insertion order. A named constant table like `DEPTH` makes the layering intent explicit and searchable. Without it, scene features added in any order can accidentally render above the dialogue panel, requiring fragile display-list reordering to fix.

## Specific Change Example
```ts
const DEPTH = { WORLD: 0, NPC: 10, DIALOGUE: 50, HUD: 100 } as const;

// Inside create():
this.add.rectangle(200, 480, 80, 80, 0x34d399).setDepth(DEPTH.WORLD);

const panel = this.add.container(40, 480, [bg, label]);
panel.setDepth(DEPTH.DIALOGUE);

this.add.text(880, 20, '[H] Hub', {
  fontFamily: 'monospace',
  fontSize: '14px',
  color: '#9ca3af',
}).setDepth(DEPTH.HUD);
```

## What To Observe At Runtime
- The green world rectangle is partially covered by the dialogue panel even though both overlap at y=480 — depth wins over insertion order.
- The HUD text renders above everything, including the dialogue panel, because `DEPTH.HUD` (100) exceeds `DEPTH.DIALOGUE` (50).
- Moving the world rectangle's depth to `DEPTH.DIALOGUE + 1 = 51` causes it to appear above the dialogue panel — demonstrating fine-grained control.

## Done Criteria
- [ ] `const DEPTH` table is declared at module scope with at least four named layers.
- [ ] Dialogue panel Container has `.setDepth(DEPTH.DIALOGUE)` applied.
- [ ] HUD text has `.setDepth(DEPTH.HUD)` and renders above the dialogue panel visually.
- [ ] Committed naming the Phaser API used (`setDepth`, `const DEPTH`).

## Common Phaser Pitfalls
- Calling `setDepth` on a Container affects the Container itself but not its children individually — children inherit the container's depth context, so do not call `setDepth` on the children separately expecting additive behavior.
- Confusing display list index with depth: `bringToTop()` changes insertion order, not depth. If depth values are set, `bringToTop` has no visible effect.

## References
- [Phaser Depth Sorting](https://docs.phaser.io/phaser/concepts/gameobjects/depth-sorting)
- [GameObject setDepth API](https://newdocs.phaser.io/docs/3.80.0/Phaser.GameObjects.Components.Depth#setDepth)
- [Phaser Examples — Depth](https://phaser.io/examples/v3/view/display/depth-sorting)
