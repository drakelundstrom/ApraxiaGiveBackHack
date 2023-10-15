import { post } from './HttpClient'
import { HttpStatusCodes } from './HttpStatusCodes'
import { TaskRequest } from '../Models/TaskRequest'

const TASK_ENDPOINT = 'tasks'

export const generateSteps = async (data: TaskRequest) => {
	const response = await post(TASK_ENDPOINT + '/create', data)
	console.log(response)
	return response.status === HttpStatusCodes.Ok ? response.data : { id: '', steps: [{ number: 0, name: 'error generating steps, please try again' }], name: data.name }
}
