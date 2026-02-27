import Phaser from "phaser";
import { roomObstacles } from "../logic/roomConfig";

export class Module03AdventureScene extends Phaser.Scene {
  constructor() {
    super("module-03-adventure");
  }

  create(): void {
    this.add.text(20, 20, "Module 3: Top-Down Adventure", {
      fontFamily: "monospace",
      fontSize: "28px",
      color: "#f9fafb"
    });

    roomObstacles.forEach((obstacle) => {
      this.add.rectangle(obstacle.x, obstacle.y, obstacle.width, obstacle.height, 0x334155);
    });

    this.add.text(20, 58, "Obstacle config loaded. Add movement/collision in tasks.", {
      fontFamily: "monospace",
      fontSize: "16px",
      color: "#a5b4fc"
    });

    this.input.keyboard?.on("keydown-H", () => this.scene.start("module-hub"));
  }
}
