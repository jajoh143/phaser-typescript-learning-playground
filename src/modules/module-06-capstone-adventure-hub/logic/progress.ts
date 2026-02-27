import type { GateProgress } from "../types/progress";

export const createInitialProgress = (): GateProgress => ({
  puzzleGate: false,
  platformGate: false,
  questGate: false
});
