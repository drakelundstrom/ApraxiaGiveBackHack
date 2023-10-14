import { post } from './HttpClient'
import { HttpStatusCodes } from './HttpStatusCodes'
import { TaskRequest } from '../Models/TaskRequest'

const TASK_ENDPOINT = 'bands'

export const generateSteps = async (data: TaskRequest) => {
	const response = await post(TASK_ENDPOINT, data)
	console.log(response)
	return response.status === HttpStatusCodes.Ok ? response.data : { recommendations: ['No recommendations found'] }
}
