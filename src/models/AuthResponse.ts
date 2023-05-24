
export interface LoginResponse {
	email: string
	userId: number
	message?: {
		message: string | undefined
	}
	role: [
		{
			value: string
		}
	]
	token: {
		token: string
	}
}

export interface RegistrationResponse {
	User: {
		id: number
		email: string
		password: string
		updatedAt: string
		createdAt: string
	},
	token: {
		token: string
	}
}

export interface checkTokenResponse {
	email: string
	message?: string
	exp: number
	iat: number
	id: number
}