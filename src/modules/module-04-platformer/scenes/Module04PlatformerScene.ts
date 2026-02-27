import Phaser from "phaser";
import { physicsDefaults } from "../logic/physics";

export class Module04PlatformerScene extends Phaser.Scene {
  constructor() {
    super("module-04-platformer");
  }

  create(): void {
    this.add.text(20, 20, "Module 4: Single-Level Platformer", {
      fontFamily: "monospace",
      fontSize: "28px",
      color: "#f9fafb"
    });

    this.add.text(20, 58, `Physics defaults: ${JSON.stringify(physicsDefaults)}`, {
      fontFamily: "monospace",
      fontSize: "16px",
      color: "#a5b4fc"
    });

    this.add.rectangle(480, 500, 920, 40, 0x64748b);
    this.add.rectangle(620, 390, 240, 22, 0x475569);

    this.input.keyboard?.on("keydown-H", () => this.scene.start("module-hub"));
  }
}
