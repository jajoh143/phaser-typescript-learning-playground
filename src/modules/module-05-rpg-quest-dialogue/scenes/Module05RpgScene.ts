import Phaser from "phaser";
import { introDialogue } from "../logic/dialogue";

export class Module05RpgScene extends Phaser.Scene {
  constructor() {
    super("module-05-rpg");
  }

  create(): void {
    this.add.text(20, 20, "Module 5: Quest + Dialogue RPG", {
      fontFamily: "monospace",
      fontSize: "28px",
      color: "#f9fafb"
    });

    this.add.text(20, 82, introDialogue.text, {
      fontFamily: "monospace",
      fontSize: "20px",
      color: "#fde68a"
    });

    this.add.text(20, 126, "Choices are scaffolded in data and ready for logic wiring.", {
      fontFamily: "monospace",
      fontSize: "16px",
      color: "#a5b4fc"
    });

    this.input.keyboard?.on("keydown-H", () => this.scene.start("module-hub"));
  }
}
