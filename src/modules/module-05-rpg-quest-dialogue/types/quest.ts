export type QuestStatus = "locked" | "active" | "complete";

export interface Quest {
  id: string;
  title: string;
  status: QuestStatus;
}
