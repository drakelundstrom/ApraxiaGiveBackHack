import { Step } from './Step'

export type TaskResponse = {
	readonly id: number
	readonly name: string
	readonly steps: Step[]
}
