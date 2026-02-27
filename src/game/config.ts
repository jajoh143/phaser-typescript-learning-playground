import Phaser from "phaser";
import { BootScene } from "../scenes/BootScene";
import { ModuleHubScene } from "../scenes/ModuleHubScene";
import { Module01RoomScene } from "../modules/module-01-interactive-room/scenes/Module01RoomScene";
import { Module02PuzzleScene } from "../modules/module-02-tile-switch-puzzle/scenes/Module02PuzzleScene";
import { Module03AdventureScene } from "../modules/module-03-top-down-adventure/scenes/Module03AdventureScene";
import { Module04PlatformerScene } from "../modules/module-04-platformer/scenes/Module04PlatformerScene";
import { Module05RpgScene } from "../modules/module-05-rpg-quest-dialogue/scenes/Module05RpgScene";
import { Module06CapstoneScene } from "../modules/module-06-capstone-adventure-hub/scenes/Module06CapstoneScene";

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "game-root",
  width: 960,
  height: 540,
  backgroundColor: "#111827",
  scene: [
    BootScene,
    ModuleHubScene,
    Module01RoomScene,
    Module02PuzzleScene,
    Module03AdventureScene,
    Module04PlatformerScene,
    Module05RpgScene,
    Module06CapstoneScene
  ]
};
