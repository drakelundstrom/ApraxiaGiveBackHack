import { Step } from './Step'

export type TaskResponse = {
	readonly id: string
	readonly task: string
	readonly steps: Step[]
}
