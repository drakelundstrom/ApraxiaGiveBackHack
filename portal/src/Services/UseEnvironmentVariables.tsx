export type EnvironmentVariables = {
	apiUri: string
}

export const UseEnvironmentVariables = (): EnvironmentVariables => {
	const EnvironmentVars: EnvironmentVariables = {
		apiUri: 'https://autism-armory.fly.dev/',
	}
	return EnvironmentVars
}
