# Advanced Phaser Track — Quest + Dialogue RPG — Week 2 — Day 2: Rectangle Mask for Panel Clipping

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Create a Geometry Mask from a Graphics rectangle and apply it to a scrolling Text object so that text content overflowing the visible panel area is hard-clipped at the panel boundary.

## Phaser System Focus
`Phaser.GameObjects.Graphics` — `createGeometryMask()`, `Phaser.Display.Masks.GeometryMask`, `GameObject.setMask()`.

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect `Module05RpgScene.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
Add a Geometry Mask to the dialogue Text object so it is hard-clipped to the visible panel area:

1. Create a `Phaser.GameObjects.Graphics` object using `this.add.graphics()`.
2. On it, call `.fillRect(40, 480, 900, 180)` — this rectangle defines the visible clip region in **world space** (not local space).
3. Call `const mask = graphics.createGeometryMask()` to produce a `GeometryMask` from the filled shape.
4. Call `dialogueLabel.setMask(mask)` to apply it.
5. To test the clipping, temporarily pad `introDialogue.text` with repeated lines until the text overflows 180px — confirm that text beyond the bottom edge is invisible.
6. The Graphics object that backs the mask does not render visually — it is used only as a clipping shape. You do not need to set its alpha.

## Target Files
- `src/modules/module-05-rpg-quest-dialogue/scenes/Module05RpgScene.ts`

## Why This Phaser Pattern Matters
`setBounds` (from Day 2) is a soft rendering clip that still takes up layout space. A Geometry Mask is a GPU-level stencil: pixels outside the mask shape are not rendered at all, regardless of layout. This matters for scrollable dialogue logs where content genuinely exceeds the panel height — the mask keeps pixels from bleeding outside the panel without you needing to calculate text truncation points. The mask's shape is defined in world space, so it must match the panel's world position exactly.

## Specific Change Example
```ts
// Create the mask shape in world space, matching the panel position exactly
const maskGraphics = this.add.graphics();
maskGraphics.fillRect(40, 480, 900, 180);
const mask = maskGraphics.createGeometryMask();

// Apply the mask to the text child (not the container)
dialogueLabel.setMask(mask);
```

## What To Observe At Runtime
- Text that wraps past the 180px panel height is hard-clipped at the lower edge of the rectangle — no bleed.
- Moving the panel Container's y position (e.g., `panel.y = 300`) leaves the mask in place at y=480, causing a visible mismatch — this demonstrates that the mask does not follow the Container automatically.
- Setting `maskGraphics.setVisible(false)` has no effect on the mask itself — the Graphics shape is only read as geometry, not rendered.

## Done Criteria
- [ ] A `Graphics` object with `fillRect` matching the panel's world bounds creates the mask.
- [ ] `dialogueLabel.setMask(mask)` is called and overflow text is clipped.
- [ ] Tested with text content that genuinely overflows the 180px height.
- [ ] Committed naming the Phaser API used (`createGeometryMask`, `setMask`).

## Common Phaser Pitfalls
- Defining the mask rectangle in local/container space instead of world space: the clip area appears offset from the visible panel because masks always use world coordinates.
- Applying the mask to the Container instead of the Text child: `Container.setMask` applies the mask to the entire container including its background, which will clip the background rectangle too.

## References
- [Phaser Masks Concept](https://docs.phaser.io/phaser/concepts/gameobjects/masks)
- [GeometryMask API](https://newdocs.phaser.io/docs/3.80.0/Phaser.Display.Masks.GeometryMask)
- [Phaser Examples — Geometry Mask](https://phaser.io/examples/v3/view/masks/geometry-mask)
