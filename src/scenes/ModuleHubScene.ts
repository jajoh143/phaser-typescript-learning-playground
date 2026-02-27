import Phaser from "phaser";

const MODULES = [
  { key: "module-01-room", label: "1. Interactive Room" },
  { key: "module-02-puzzle", label: "2. Tile Switch Puzzle" },
  { key: "module-03-adventure", label: "3. Top-Down Adventure" },
  { key: "module-04-platformer", label: "4. Platformer" },
  { key: "module-05-rpg", label: "5. Quest + Dialogue RPG" },
  { key: "module-06-capstone", label: "6. Capstone Hub" }
];

export class ModuleHubScene extends Phaser.Scene {
  constructor() {
    super("module-hub");
  }

  create(): void {
    this.add.text(24, 24, "Phaser + TypeScript Learning Hub", {
      fontFamily: "monospace",
      fontSize: "30px",
      color: "#f9fafb"
    });

    this.add.text(24, 64, "Press number keys (1-6) to open a module scene.", {
      fontFamily: "monospace",
      fontSize: "18px",
      color: "#cbd5e1"
    });

    MODULES.forEach((module, index) => {
      this.add.text(48, 130 + index * 44, `${module.label} (key ${index + 1})`, {
        fontFamily: "monospace",
        fontSize: "24px",
        color: "#93c5fd"
      });

      this.input.keyboard?.on(`keydown-${index + 1}`, () => {
        this.scene.start(module.key);
      });
    });
  }
}
