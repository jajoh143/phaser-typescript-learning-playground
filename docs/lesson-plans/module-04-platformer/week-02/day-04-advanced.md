# Advanced Phaser Track - week-02 - day-04

## Audience
Developer with strong JavaScript/TypeScript skills and beginner Phaser knowledge.

## Phaser Learning Focus
Physics tuning, collision-driven gameplay, control feel, and debug instrumentation.

## Secondary Task (Phaser-First)
Build HUD counters with smooth text transitions for lives and score updates.


## Why This Phaser Change Matters
- This Phaser task (Build HUD counters with smooth text transitions for lives and score updates.) targets the engine competency for today: Physics tuning, collision-driven gameplay, control feel, and debug instrumentation..
- Practicing this now improves engine intuition, so future scene and gameplay features can be implemented with fewer trial-and-error loops.

## Phaser Documentation Takeaways
- Scene concepts define lifecycle boundaries, which is critical for reliable scene start/stop/return flow.
- Check Phaser API signatures while implementing Build HUD counters with smooth text transitions for lives and score updates. to avoid incorrect assumptions about method behavior.
- Use Phaser examples as implementation references for Build HUD counters with smooth text transitions for lives and score updates., then adapt them to your module architecture.

## Specific Change Example
```ts
if (jumpPressedRecently && (player.body.blocked.down || coyoteTimer > 0)) {
  player.body.setVelocityY(jumpVelocity);
  jumpPressedRecently = false;
}
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
