# Advanced Phaser Track - week-01 - day-05

## Audience
Developer with strong JavaScript/TypeScript skills and beginner Phaser knowledge.

## Phaser Learning Focus
Physics tuning, collision-driven gameplay, control feel, and debug instrumentation.

## Secondary Task (Phaser-First)
Run quick A/B tuning on gravity and jump velocity to compare control feel.


## Why This Phaser Change Matters
- This Phaser task (Run quick A/B tuning on gravity and jump velocity to compare control feel.) targets the engine competency for today: Physics tuning, collision-driven gameplay, control feel, and debug instrumentation..
- Practicing this now improves engine intuition, so future scene and gameplay features can be implemented with fewer trial-and-error loops.

## Phaser Documentation Takeaways
- Phaser physics concepts show how bodies, colliders, and overlaps should drive gameplay instead of manual checks.
- Check Phaser API signatures while implementing Run quick A/B tuning on gravity and jump velocity to compare control feel. to avoid incorrect assumptions about method behavior.
- Use Phaser examples as implementation references for Run quick A/B tuning on gravity and jump velocity to compare control feel., then adapt them to your module architecture.

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
