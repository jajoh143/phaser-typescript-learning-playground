# Advanced Phaser Track - week-02 - day-01

## Audience
Developer with strong JavaScript/TypeScript skills and beginner Phaser knowledge.

## Phaser Learning Focus
UI composition with containers/text, interaction flow, and event-driven state updates.

## Secondary Task (Phaser-First)
Add objective markers in-scene that react to quest state changes.


## Why This Phaser Change Matters
- This Phaser task (Add objective markers in-scene that react to quest state changes.) targets the engine competency for today: UI composition with containers/text, interaction flow, and event-driven state updates..
- Practicing this now improves engine intuition, so future scene and gameplay features can be implemented with fewer trial-and-error loops.

## Phaser Documentation Takeaways
- Scene concepts define lifecycle boundaries, which is critical for reliable scene start/stop/return flow.
- Check Phaser API signatures while implementing Add objective markers in-scene that react to quest state changes. to avoid incorrect assumptions about method behavior.
- Use Phaser examples as implementation references for Add objective markers in-scene that react to quest state changes., then adapt them to your module architecture.

## Specific Change Example
```ts
const panel = this.add.container(20, 360);
const bg = this.add.rectangle(0, 0, 920, 150, 0x111827).setOrigin(0, 0);
const line = this.add.text(16, 14, currentNode.text, textStyle);
panel.add([bg, line]);
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
