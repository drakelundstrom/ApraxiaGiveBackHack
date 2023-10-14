import { Step } from "./Step";

export type TaskResponse = {
    readonly id: string;
    readonly task: number;
    readonly steps: Step[];
  };
  