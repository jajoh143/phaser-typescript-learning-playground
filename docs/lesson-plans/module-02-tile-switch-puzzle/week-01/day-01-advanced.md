# Advanced Phaser Track - week-01 - day-01

## Audience
Developer with strong JavaScript/TypeScript skills and beginner Phaser knowledge.

## Phaser Learning Focus
Input coordinate mapping, efficient rendering updates, containers, and animation feedback.

## Secondary Task (Phaser-First)
Render tiles as persistent Phaser objects and update state visually without recreating all objects every move.


## Why This Phaser Change Matters
- This Phaser task (Render tiles as persistent Phaser objects and update state visually without recreating all objects every move.) targets the engine competency for today: Input coordinate mapping, efficient rendering updates, containers, and animation feedback..
- Practicing this now improves engine intuition, so future scene and gameplay features can be implemented with fewer trial-and-error loops.

## Phaser Documentation Takeaways
- Phaser concepts provide the engine mental model needed to choose the right system (scene/input/physics/UI) for each change.
- Check Phaser API signatures while implementing Render tiles as persistent Phaser objects and update state visually without recreating all objects every move. to avoid incorrect assumptions about method behavior.
- Use Phaser examples as implementation references for Render tiles as persistent Phaser objects and update state visually without recreating all objects every move., then adapt them to your module architecture.

## Specific Change Example
```ts
const row = Math.floor((pointer.y - boardY) / tileSize);
const col = Math.floor((pointer.x - boardX) / tileSize);
if (row >= 0 && row < rows && col >= 0 && col < cols) {
  toggleTile(grid, row, col);
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
