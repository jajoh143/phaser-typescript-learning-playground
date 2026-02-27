import Phaser from "phaser";
import { createStarterGrid } from "../logic/puzzle";

export class Module02PuzzleScene extends Phaser.Scene {
  constructor() {
    super("module-02-puzzle");
  }

  create(): void {
    const grid = createStarterGrid();

    this.add.text(20, 20, "Module 2: Tile Switch Puzzle", {
      fontFamily: "monospace",
      fontSize: "28px",
      color: "#f9fafb"
    });

    this.add.text(20, 58, "Scaffold state loaded. Build toggle logic next.", {
      fontFamily: "monospace",
      fontSize: "16px",
      color: "#a5b4fc"
    });

    this.add.text(20, 120, `Starter grid: ${JSON.stringify(grid)}`, {
      fontFamily: "monospace",
      fontSize: "18px",
      color: "#dbeafe"
    });

    this.input.keyboard?.on("keydown-H", () => this.scene.start("module-hub"));
  }
}
