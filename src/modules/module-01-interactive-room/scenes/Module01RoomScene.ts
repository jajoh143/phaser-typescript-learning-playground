import Phaser from "phaser";
import { createInitialRoomState } from "../logic/helpers";
import type { RoomState } from "../types/state";

export class Module01RoomScene extends Phaser.Scene {
  private state: RoomState = createInitialRoomState();
  private status?: Phaser.GameObjects.Text;

  constructor() {
    super("module-01-room");
  }

  create(): void {
    this.add.text(20, 20, "Module 1: Interactive Room", {
      fontFamily: "monospace",
      fontSize: "28px",
      color: "#f9fafb"
    });

    this.add.text(20, 58, "Press H to return to module hub", {
      fontFamily: "monospace",
      fontSize: "16px",
      color: "#a5b4fc"
    });

    const panel = this.add.rectangle(300, 260, 240, 140, 0x2563eb).setInteractive();
    const lamp = this.add.circle(620, 240, 70, 0xf59e0b).setInteractive();

    panel.on("pointerdown", () => {
      this.state.panelClicks += 1;
      this.refreshStatus();
    });

    lamp.on("pointerdown", () => {
      this.state.lampClicks += 1;
      this.refreshStatus();
    });

    this.status = this.add.text(20, 440, "", {
      fontFamily: "monospace",
      fontSize: "20px",
      color: "#dbeafe"
    });

    this.input.keyboard?.on("keydown-H", () => this.scene.start("module-hub"));
    this.refreshStatus();
  }

  private refreshStatus(): void {
    if (!this.status) {
      return;
    }

    this.status.setText(
      `Panel clicks: ${this.state.panelClicks} | Lamp clicks: ${this.state.lampClicks}`
    );
  }
}
