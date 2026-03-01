# Advanced Phaser Track — Quest + Dialogue RPG — Week 1 — Day 3: Interactive Text Buttons with Hover States

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Generate clickable choice buttons as Phaser Text GameObjects, implement visual hover feedback by swapping text styles, wire each button to a choice handler, and correctly destroy old buttons before creating new ones when the dialogue advances.

## Phaser System Focus
`Phaser.GameObjects.Text` — `setInteractive()`, `pointerover`/`pointerout` style events, `destroy()` for per-node button cleanup.

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect `Module05RpgScene.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
Add a `renderChoices(node: DialogueNode)` method to the scene that dynamically creates one Text button per choice in the current dialogue node:

1. Keep a `private choiceButtons: Phaser.GameObjects.Text[] = []` array on the scene class.
2. At the start of `renderChoices`, call `button.destroy()` on every item in `choiceButtons`, then clear the array — this prevents stale buttons from accumulating across nodes.
3. For each `choice` in `node.choices`, create a Text at `(60, 520 + index * 40)` with the choice label, color `#a5b4fc`, monospace 16px.
4. Call `button.setInteractive()` on each Text (no size arg needed — Text auto-sizes its hit area).
5. On `pointerover`: call `button.setStyle({ color: '#f59e0b' })`.
6. On `pointerout`: call `button.setStyle({ color: '#a5b4fc' })`.
7. On `pointerdown`: call your `applyChoice(choice)` handler (stub it as `console.log(choice.targetId)` for now).
8. Push each button into `choiceButtons`.

Call `renderChoices(introDialogue)` at the end of `create()`.

## Target Files
- `src/modules/module-05-rpg-quest-dialogue/scenes/Module05RpgScene.ts`
- `src/modules/module-05-rpg-quest-dialogue/logic/dialogue.ts`

## Why This Phaser Pattern Matters
Phaser's input system attaches directly to individual GameObjects — there is no separate DOM button layer. `Text.setInteractive()` uses the text's auto-computed bounding box as the hit area, which is exactly what you want for word-sized buttons. Calling `destroy()` removes the object from the scene's display list, the input manager, and the update loop in a single step — skipping this before spawning replacements leaves orphaned objects that continue intercepting clicks.

## Specific Change Example
```ts
private choiceButtons: Phaser.GameObjects.Text[] = [];

private renderChoices(node: DialogueNode): void {
  for (const btn of this.choiceButtons) btn.destroy();
  this.choiceButtons = [];

  node.choices.forEach((choice, i) => {
    const btn = this.add.text(60, 520 + i * 40, `> ${choice.label}`, {
      fontFamily: 'monospace',
      fontSize: '16px',
      color: '#a5b4fc',
    });
    btn.setInteractive();
    btn.on('pointerover', () => btn.setStyle({ color: '#f59e0b' }));
    btn.on('pointerout',  () => btn.setStyle({ color: '#a5b4fc' }));
    btn.on('pointerdown', () => console.log(choice.targetId));
    this.choiceButtons.push(btn);
  });
}
```

## What To Observe At Runtime
- Hovering over a choice label turns it amber; moving off restores the indigo color — no pointer style set on the canvas cursor.
- Clicking a choice logs its `targetId` string in DevTools.
- If you call `renderChoices` a second time (e.g., via a keyboard shortcut), the old buttons disappear and new ones appear — no stacking of invisible click zones.

## Done Criteria
- [ ] `choiceButtons` array is cleared with `destroy()` before each `renderChoices` call.
- [ ] Each Text button has `pointerover` / `pointerout` handlers that swap the color style.
- [ ] `pointerdown` fires a handler (even if stubbed) — confirmed in DevTools.
- [ ] Committed naming the Phaser API used (`setInteractive`, `setStyle`, `destroy`).

## Common Phaser Pitfalls
- Calling `setStyle` with a partial style object replaces only the specified keys — but forgetting to call `setStyle` and instead mutating `button.style.color` directly has no visual effect because Phaser tracks style through its own internal object.
- Using `button.setVisible(false)` instead of `button.destroy()` to clean up: the button is hidden but still intercepts pointer events, causing phantom clicks on invisible targets.

## References
- [Phaser Text Input Events](https://docs.phaser.io/phaser/concepts/input/interactive-gameobjects)
- [Text API — setStyle](https://newdocs.phaser.io/docs/3.80.0/Phaser.GameObjects.Text#setStyle)
- [GameObject destroy](https://newdocs.phaser.io/docs/3.80.0/Phaser.GameObjects.GameObject#destroy)
