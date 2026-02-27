# Advanced Phaser Track - week-02 - day-05

## Audience
Developer with strong JavaScript/TypeScript skills and beginner Phaser knowledge.

## Phaser Learning Focus
Physics tuning, collision-driven gameplay, control feel, and debug instrumentation.

## Secondary Task (Phaser-First)
Add debug HUD showing grounded state, velocity, and collision flags.


## Why This Phaser Change Matters
- This Phaser task (Add debug HUD showing grounded state, velocity, and collision flags.) targets the engine competency for today: Physics tuning, collision-driven gameplay, control feel, and debug instrumentation..
- Practicing this now improves engine intuition, so future scene and gameplay features can be implemented with fewer trial-and-error loops.

## Phaser Documentation Takeaways
- Phaser physics concepts show how bodies, colliders, and overlaps should drive gameplay instead of manual checks.
- Check Phaser API signatures while implementing Add debug HUD showing grounded state, velocity, and collision flags. to avoid incorrect assumptions about method behavior.
- Use Phaser examples as implementation references for Add debug HUD showing grounded state, velocity, and collision flags., then adapt them to your module architecture.

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
