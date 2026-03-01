# Advanced Phaser Track — Quest + Dialogue RPG — Week 2 — Day 4: Pure Logic Separation

## Audience
Senior JavaScript/TypeScript developer learning Phaser. This lesson is fully self-contained — no need to reference the beginner track.

## Session Goal
Refactor `dialogue.ts` so every exported function takes plain data as arguments and returns plain data — zero Phaser imports — establishing a hard boundary between "logic land" and "Phaser land" that makes the logic testable with plain Node.js.

## Phaser System Focus
Architecture boundary — what belongs in `logic/dialogue.ts` (zero Phaser) versus what belongs in the scene (all Phaser). Not a new Phaser API — but the most important structural decision in this module.

## What To Build (30 Minutes)
- 5 min: Read this lesson and inspect `Module05RpgScene.ts` and `logic/dialogue.ts`.
- 20 min: Implement the task below.
- 5 min: Run the game, verify the behavior visually, and write one observation note.

## Implementation Task
Refactor `logic/dialogue.ts` to be a pure data module:

1. Ensure `dialogue.ts` has **zero imports from Phaser** — if any exist, remove them.
2. Export two pure functions:
   - `getNode(tree: DialogueNode[], id: string): DialogueNode | undefined` — finds a node by id.
   - `applyChoice(tree: DialogueNode[], currentId: string, choiceIndex: number): string | null` — returns the `targetId` of the chosen choice, or `null` if the choice index is out of range.
3. Both functions take only plain TypeScript data (arrays, strings, numbers) and return plain data. No `this`, no scene references, no Phaser types.
4. In `Module05RpgScene.ts`, import and call these functions from the scene's input handlers. The scene is the only place that reads `.text` from a node and calls `label.setText()`.
5. Verify the boundary: open `dialogue.ts` and confirm there is no `import Phaser` or `import { Scene }` statement anywhere in the file.

## Target Files
- `src/modules/module-05-rpg-quest-dialogue/logic/dialogue.ts`
- `src/modules/module-05-rpg-quest-dialogue/scenes/Module05RpgScene.ts`

## Why This Phaser Pattern Matters
When `dialogue.ts` has zero Phaser imports, you can run its functions in a plain Node.js test without booting Phaser at all — no `jsdom`, no canvas, no game loop. The boundary between "logic land" (pure TS) and "Phaser land" (the scene) is the single import line in the scene file. Everything that crosses that boundary should be plain data: strings, numbers, plain objects, arrays. Phaser GameObjects, Scene references, and EventEmitters must never appear in `dialogue.ts`.

## Specific Change Example
```ts
// logic/dialogue.ts — zero Phaser imports
export interface DialogueChoice {
  label: string;
  targetId: string | null;
}

export interface DialogueNode {
  id: string;
  text: string;
  choices: DialogueChoice[];
}

export function getNode(tree: DialogueNode[], id: string): DialogueNode | undefined {
  return tree.find(n => n.id === id);
}

export function applyChoice(
  tree: DialogueNode[],
  currentId: string,
  choiceIndex: number
): string | null {
  const node = getNode(tree, currentId);
  return node?.choices[choiceIndex]?.targetId ?? null;
}
```

```ts
// Module05RpgScene.ts — Phaser land only calls pure functions, never defines logic
import { getNode, applyChoice, DialogueNode } from '../logic/dialogue';

// In choice handler:
const nextId = applyChoice(dialogueTree, this.currentNodeId, choiceIndex);
if (nextId) {
  this.currentNodeId = nextId;
  const next = getNode(dialogueTree, nextId);
  if (next) this.renderNode(next);
}
```

## What To Observe At Runtime
- Advancing dialogue still works correctly — the visible behaviour is unchanged.
- Open `dialogue.ts` in the editor and confirm the import list contains only TypeScript — no Phaser line.
- Run `tsc --noEmit` in the terminal; the pure module compiles with zero errors without Phaser being available to the type checker.

## Done Criteria
- [ ] `dialogue.ts` has zero Phaser imports — confirmed by inspection.
- [ ] `getNode` and `applyChoice` take only plain data and return plain data.
- [ ] The scene calls `getNode`/`applyChoice` and passes results to Phaser display calls.
- [ ] Committed naming the Phaser API used (none in `dialogue.ts` — that's the point; name the boundary pattern).

## Common Phaser Pitfalls
- Passing a `Phaser.GameObjects.Text` reference into a logic function "just to update it": this couples the logic to Phaser and breaks the boundary. Return the new text string from the function and let the scene call `setText`.
- Importing `Phaser` in `dialogue.ts` only for a type annotation (e.g., `scene: Phaser.Scene`): use a plain callback or event pattern instead to avoid the dependency entirely.

## References
- [TypeScript Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)
- [Phaser Scene Architecture](https://docs.phaser.io/phaser/concepts/scenes)
- [Pure Functions (concept)](https://en.wikipedia.org/wiki/Pure_function)
