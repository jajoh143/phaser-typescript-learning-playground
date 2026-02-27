# Phaser + TypeScript Learning Playground

Starter workspace for a bi-weekly learning plan focused on JavaScript/TypeScript first and Phaser second.

## Quick start

```bash
npm install
npm run dev
```

Open the local Vite URL shown in your terminal.

## Project structure

- `docs/lesson-plan.md`: High-level 12-week curriculum overview
- `docs/lesson-plans/`: Day-by-day plans by module/week/day (60 files total)
- `src/main.ts`: App entrypoint
- `src/game/config.ts`: Phaser game configuration
- `src/scenes/`: Boot and module hub scenes
- `src/modules/`: One isolated folder per mini-game module

## Module layout

Each module is isolated under `src/modules/module-0X-*` with:

- `scenes/`: Phaser scene(s) for that module
- `logic/`: Framework-agnostic game logic
- `types/`: TypeScript models and interfaces

This keeps all six games scaffolded at once while avoiding tangled dependencies.

## Branching baseline

- `main`: stable teaching baseline
- `dev-a` and `dev-b`: one long-lived branch per developer
- Optional short-lived feature branches from each dev branch when a module grows
- Setup commands: `./scripts/setup-git-branches.sh`
- Full git workflow notes: `docs/git-setup.md`
