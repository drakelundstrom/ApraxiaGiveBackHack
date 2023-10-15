import axios from 'axios'
import { UseEnvironmentVariables } from './UseEnvironmentVariables'

export const post = async (uri: string, data: any, isOverrideUrl: boolean = false) => {
	const { url, header } = getRequestArgs(uri, isOverrideUrl)
	try {
		const response = await axios.post(url, data, header)
		console.log(response.data)
		return { status: response.status, data: response.data }
	} catch (errorResponse) {
		return getErrors(errorResponse)
	}
}

export const getBaseUrl = (): string => UseEnvironmentVariables().apiUri

const getRequestArgs = (uri: string, isOverrideUrl: boolean) => {
	const url = isOverrideUrl ? uri : getBaseUrl() + uri
	const token = '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'
	const header = {
		headers: {
			Authorization: `Bearer ${token}`,
			ContentType: 'application/json',
		},
	}
	if (header) return { url, header }
	return { url }
}

const getErrors = (errorResponse: any) => {
	const status = errorResponse?.response?.status ?? 0
	const data = errorResponse?.response?.data
	return data ? { status, data } : { status, data: 'Unknown network error' }
}
