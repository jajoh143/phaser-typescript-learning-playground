# Advanced Phaser Track — Quest + Dialogue RPG — Week 1 — Day 2: Text Wrapping & Multi-Line Layout

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Configure a Phaser Text object to wrap long dialogue lines within a fixed panel width, read the rendered height to size the panel dynamically, and use `setBounds` to prevent text from overflowing its container.

## Phaser System Focus
`Phaser.GameObjects.Text` — `wordWrap` style option, `text.height` post-render measurement, `setBounds` for layout containment.

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect `Module05RpgScene.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
Starting from the dialogue panel built on Day 1, update the Text child to support word wrapping and use its rendered height to set the panel background height dynamically:

1. Add `wordWrap: { width: 860 }` to the Text style object so lines break before 860 px.
2. After creating the Text object, read `label.height` — this reflects the actual rendered height including all wrapped lines.
3. Use `label.height + 40` as the background rectangle's height instead of a hardcoded value.
4. Call `label.setBounds(0, 0, 860, label.height)` to clip any overflow. The bounds are in the Text's own local space, so `(0, 0)` is the text's own origin.
5. Update `panel.setSize(900, label.height + 40)` to keep the interactive hit area in sync.

Test with a dialogue node that has a string longer than 860 px worth of monospace characters to confirm wrapping fires.

## Target Files
- `src/modules/module-05-rpg-quest-dialogue/scenes/Module05RpgScene.ts`
- `src/modules/module-05-rpg-quest-dialogue/logic/dialogue.ts`

## Why This Phaser Pattern Matters
`text.height` is a live measurement made by Phaser's Canvas 2D text engine after the string is rendered — it accounts for font metrics, line spacing, and wrap breaks. Reading it immediately after creation gives you the true layout height so panels can resize to fit content rather than using guessed magic numbers. `setBounds` acts as a soft clip: text outside the bounds is not rendered, preventing overflow without requiring a Geometry Mask.

## Specific Change Example
```ts
const label = this.add.text(20, 16, introDialogue.text, {
  fontFamily: 'monospace',
  fontSize: '18px',
  color: '#fde68a',
  wordWrap: { width: 860 },
});

// height is now measured — use it to drive the background
const panelHeight = label.height + 40;
const bg = this.add
  .rectangle(0, 0, 900, panelHeight, 0x1e1e2e)
  .setAlpha(0.95)
  .setOrigin(0, 0);

label.setBounds(0, 0, 860, label.height);

const panel = this.add.container(40, 480, [bg, label]);
panel.setSize(900, panelHeight).setInteractive();
```

## What To Observe At Runtime
- A dialogue string longer than ~60 monospace characters wraps to a second line instead of overflowing horizontally.
- The background rectangle height changes when you swap in a shorter or longer `introDialogue.text` string — confirming the dynamic sizing.
- Text that exceeds `setBounds` height is clipped at the boundary, not truncated in the data — `label.text` still holds the full string.

## Done Criteria
- [ ] `wordWrap: { width: 860 }` is set on the dialogue Text style.
- [ ] Background rectangle height is derived from `label.height + 40`, not hardcoded.
- [ ] `label.setBounds` is called and its third/fourth args match the wrap width and text height.
- [ ] Committed naming the Phaser API used (`wordWrap`, `text.height`, `setBounds`).

## Common Phaser Pitfalls
- Reading `text.height` before the Text object is added to the scene: the value may be 0 because the canvas render pass has not completed. Always read it after `this.add.text(...)` returns.
- Setting `wordWrap.width` wider than the panel background — text will wrap correctly but visually overflow the rectangle edges because the wrap boundary and the visual boundary are independent values.

## References
- [Phaser Text Concept](https://docs.phaser.io/phaser/concepts/gameobjects/text)
- [Text API — wordWrap](https://newdocs.phaser.io/docs/3.80.0/Phaser.Types.GameObjects.Text.TextWordWrap)
- [Text API — setBounds](https://newdocs.phaser.io/docs/3.80.0/Phaser.GameObjects.Text#setBounds)
