# Advanced Phaser Track - week-02 - day-01

## Audience
Developer with strong JavaScript/TypeScript skills and beginner Phaser knowledge.

## Phaser Learning Focus
Arcade Physics movement/collisions, camera behavior, and scene transitions.

## Secondary Task (Phaser-First)
Implement doorway transitions with fade-out/fade-in and controlled spawn positions.


## Why This Phaser Change Matters
- This Phaser task (Implement doorway transitions with fade-out/fade-in and controlled spawn positions.) targets the engine competency for today: Arcade Physics movement/collisions, camera behavior, and scene transitions..
- Practicing this now improves engine intuition, so future scene and gameplay features can be implemented with fewer trial-and-error loops.

## Phaser Documentation Takeaways
- Scene concepts define lifecycle boundaries, which is critical for reliable scene start/stop/return flow.
- Check Phaser API signatures while implementing Implement doorway transitions with fade-out/fade-in and controlled spawn positions. to avoid incorrect assumptions about method behavior.
- Use Phaser examples as implementation references for Implement doorway transitions with fade-out/fade-in and controlled spawn positions., then adapt them to your module architecture.

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
