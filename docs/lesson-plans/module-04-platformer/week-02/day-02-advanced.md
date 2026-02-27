# Advanced Phaser Track - week-02 - day-02

## Audience
Developer with strong JavaScript/TypeScript skills and beginner Phaser knowledge.

## Phaser Learning Focus
Physics tuning, collision-driven gameplay, control feel, and debug instrumentation.

## Secondary Task (Phaser-First)
Extract input and movement into a PlayerController focused on Phaser body APIs.


## Why This Phaser Change Matters
- This Phaser task (Extract input and movement into a PlayerController focused on Phaser body APIs.) targets the engine competency for today: Physics tuning, collision-driven gameplay, control feel, and debug instrumentation..
- Practicing this now improves engine intuition, so future scene and gameplay features can be implemented with fewer trial-and-error loops.

## Phaser Documentation Takeaways
- Phaser input concepts clarify event-driven handlers (`pointerdown`, keyboard) so interaction code stays predictable.
- Check Phaser API signatures while implementing Extract input and movement into a PlayerController focused on Phaser body APIs. to avoid incorrect assumptions about method behavior.
- Use Phaser examples as implementation references for Extract input and movement into a PlayerController focused on Phaser body APIs., then adapt them to your module architecture.

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
