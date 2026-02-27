import Phaser from "phaser";
import { BootScene } from "../scenes/BootScene";
import { RoomScene } from "../scenes/RoomScene";

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "game-root",
  width: 960,
  height: 540,
  backgroundColor: "#1f2937",
  scene: [BootScene, RoomScene]
};
