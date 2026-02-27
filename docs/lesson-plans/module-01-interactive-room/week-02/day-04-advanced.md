# Advanced Phaser Track - week-02 - day-04

## Audience
Developer with strong JavaScript/TypeScript skills and beginner Phaser knowledge.

## Phaser Learning Focus
Core Phaser object creation, interactivity, tweens, depth, and scene events.

## Secondary Task (Phaser-First)
Build a lightweight HUD panel container that can be repositioned without rewriting child object coordinates.


## Why This Phaser Change Matters
- This Phaser task (Build a lightweight HUD panel container that can be repositioned without rewriting child object coordinates.) targets the engine competency for today: Core Phaser object creation, interactivity, tweens, depth, and scene events..
- Practicing this now improves engine intuition, so future scene and gameplay features can be implemented with fewer trial-and-error loops.

## Phaser Documentation Takeaways
- Phaser concepts provide the engine mental model needed to choose the right system (scene/input/physics/UI) for each change.
- Check Phaser API signatures while implementing Build a lightweight HUD panel container that can be repositioned without rewriting child object coordinates. to avoid incorrect assumptions about method behavior.
- Use Phaser examples as implementation references for Build a lightweight HUD panel container that can be repositioned without rewriting child object coordinates., then adapt them to your module architecture.

## Specific Change Example
```ts
const button = this.add.rectangle(x, y, 180, 60, 0x2563eb).setInteractive();
button.on("pointerover", () => this.tweens.add({ targets: button, scale: 1.05, duration: 100 }));
button.on("pointerout", () => this.tweens.add({ targets: button, scale: 1.0, duration: 100 }));
button.setDepth(10);
```

## What To Observe In Runtime
- Input behavior: pointer/keyboard actions produce predictable scene updates.
- Visual feedback: UI/game objects clearly communicate state changes.
- Scene architecture: game logic remains readable as Phaser-specific features are added.

## Done Criteria
- The base lesson still works after advanced changes.
- The advanced feature is visible in-game and can be demonstrated in under 1 minute.
- Notes include one Phaser concept learned and one Phaser API used.

## References
- [Phaser Concepts](https://docs.phaser.io/phaser/concepts)
- [Phaser API Docs](https://newdocs.phaser.io/docs/3.80.0)
- [Phaser Examples](https://phaser.io/examples)
