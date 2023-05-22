
export interface LoginResponse {
	Email: string
	token: {
		token: string
	}
}

export interface RegistrationResponse {
	User: {
		id: string
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
	exp: number
	iat: number
	id: number
}