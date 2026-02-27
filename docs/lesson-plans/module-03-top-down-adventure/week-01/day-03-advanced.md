# Advanced Phaser Track - week-01 - day-03

## Audience
Developer with strong JavaScript/TypeScript skills and beginner Phaser knowledge.

## Phaser Learning Focus
Arcade Physics movement/collisions, camera behavior, and scene transitions.

## Secondary Task (Phaser-First)
Spawn world entities from config data to practice Phaser object creation loops.


## Why This Phaser Change Matters
- This Phaser task (Spawn world entities from config data to practice Phaser object creation loops.) targets the engine competency for today: Arcade Physics movement/collisions, camera behavior, and scene transitions..
- Practicing this now improves engine intuition, so future scene and gameplay features can be implemented with fewer trial-and-error loops.

## Phaser Documentation Takeaways
- Phaser concepts provide the engine mental model needed to choose the right system (scene/input/physics/UI) for each change.
- Check Phaser API signatures while implementing Spawn world entities from config data to practice Phaser object creation loops. to avoid incorrect assumptions about method behavior.
- Use Phaser examples as implementation references for Spawn world entities from config data to practice Phaser object creation loops., then adapt them to your module architecture.

## Specific Change Example
```ts
const speed = 180;
player.body.setVelocity(0);
if (cursors.left?.isDown) player.body.setVelocityX(-speed);
if (cursors.right?.isDown) player.body.setVelocityX(speed);
if (cursors.up?.isDown) player.body.setVelocityY(-speed);
if (cursors.down?.isDown) player.body.setVelocityY(speed);
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
