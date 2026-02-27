# Advanced Phaser Track - week-01 - day-02

## Audience
Developer with strong JavaScript/TypeScript skills and beginner Phaser knowledge.

## Phaser Learning Focus
Multi-scene orchestration, state handoff, save/load, and production-style polish.

## Secondary Task (Phaser-First)
Pass puzzle completion via scene data payloads on return.


## Why This Phaser Change Matters
- This Phaser task (Pass puzzle completion via scene data payloads on return.) targets the engine competency for today: Multi-scene orchestration, state handoff, save/load, and production-style polish..
- Practicing this now improves engine intuition, so future scene and gameplay features can be implemented with fewer trial-and-error loops.

## Phaser Documentation Takeaways
- Scene concepts define lifecycle boundaries, which is critical for reliable scene start/stop/return flow.
- Check Phaser API signatures while implementing Pass puzzle completion via scene data payloads on return. to avoid incorrect assumptions about method behavior.
- Use Phaser examples as implementation references for Pass puzzle completion via scene data payloads on return., then adapt them to your module architecture.

## Specific Change Example
```ts
this.scene.launch("module-02-puzzle", { returnTo: "module-06-capstone" });
this.events.on("puzzle:complete", () => {
  progress.puzzleGate = true;
  refreshGateUi();
});
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
