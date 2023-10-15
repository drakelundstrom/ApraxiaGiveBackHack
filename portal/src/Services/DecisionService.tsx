import { post } from './HttpClient'
import { HttpStatusCodes } from './HttpStatusCodes'
import { DecisionRequest } from '../Models/DecisionRequest'

const DECISIONS_ENDPOINT = 'decisions'

export const generateDecision = async (data: DecisionRequest) => {
	const response = await post(DECISIONS_ENDPOINT, data)
	console.log(response)
	return response.status === HttpStatusCodes.Ok ? response.data : { decision: 'Error generating decision, please try again', justification: [] }
}
