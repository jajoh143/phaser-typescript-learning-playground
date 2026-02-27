import Phaser from "phaser";
import { createInitialProgress } from "../logic/progress";

export class Module06CapstoneScene extends Phaser.Scene {
  constructor() {
    super("module-06-capstone");
  }

  create(): void {
    const progress = createInitialProgress();

    this.add.text(20, 20, "Module 6: Capstone Adventure Hub", {
      fontFamily: "monospace",
      fontSize: "28px",
      color: "#f9fafb"
    });

    this.add.text(20, 58, "Combine all prior mechanics in this module.", {
      fontFamily: "monospace",
      fontSize: "16px",
      color: "#a5b4fc"
    });

    this.add.text(20, 120, `Initial progress: ${JSON.stringify(progress)}`, {
      fontFamily: "monospace",
      fontSize: "18px",
      color: "#dbeafe"
    });

    this.input.keyboard?.on("keydown-H", () => this.scene.start("module-hub"));
  }
}
