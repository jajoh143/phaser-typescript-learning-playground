# Advanced Phaser Track - week-01 - day-04

## Audience
Developer with strong JavaScript/TypeScript skills and beginner Phaser knowledge.

## Phaser Learning Focus
Core Phaser object creation, interactivity, tweens, depth, and scene events.

## Secondary Task (Phaser-First)
Use scene lifecycle hooks to log when objects are created and when updates run.


## Why This Phaser Change Matters
- This Phaser task (Use scene lifecycle hooks to log when objects are created and when updates run.) targets the engine competency for today: Core Phaser object creation, interactivity, tweens, depth, and scene events..
- Practicing this now improves engine intuition, so future scene and gameplay features can be implemented with fewer trial-and-error loops.

## Phaser Documentation Takeaways
- Scene concepts define lifecycle boundaries, which is critical for reliable scene start/stop/return flow.
- Check Phaser API signatures while implementing Use scene lifecycle hooks to log when objects are created and when updates run. to avoid incorrect assumptions about method behavior.
- Use Phaser examples as implementation references for Use scene lifecycle hooks to log when objects are created and when updates run., then adapt them to your module architecture.

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
