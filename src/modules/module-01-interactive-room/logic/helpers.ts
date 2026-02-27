import type { RoomState } from "../types/state";

export const createInitialRoomState = (): RoomState => ({
  panelClicks: 0,
  lampClicks: 0
});
