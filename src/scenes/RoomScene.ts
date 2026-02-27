import Phaser from "phaser";

type RoomState = {
  clickedCount: number;
};

export class RoomScene extends Phaser.Scene {
  private state: RoomState = { clickedCount: 0 };
  private label?: Phaser.GameObjects.Text;

  constructor() {
    super("room");
  }

  create(): void {
    this.add
      .text(24, 24, "Module 1: Interactive Room", {
        fontFamily: "monospace",
        fontSize: "28px",
        color: "#f3f4f6"
      })
      .setDepth(1);

    const prompt = this.add
      .rectangle(480, 280, 420, 160, 0x2563eb)
      .setInteractive({ useHandCursor: true });

    this.label = this.add.text(310, 260, "Click the blue panel", {
      fontFamily: "monospace",
      fontSize: "24px",
      color: "#dbeafe"
    });

    prompt.on("pointerdown", () => {
      this.state.clickedCount += 1;
      this.updateLabel();
    });

    this.updateLabel();
  }

  private updateLabel(): void {
    if (!this.label) {
      return;
    }

    const count = this.state.clickedCount;
    this.label.setText(`Panel clicks: ${count}`);
  }
}
