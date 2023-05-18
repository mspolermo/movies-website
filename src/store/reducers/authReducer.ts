import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AuthService from "../../services/AuthService"

type authState = {
	email: any
	isAuth: boolean
}

const initialState: authState = {
	email: '',
	isAuth: false
}

export const registration = createAsyncThunk(
	'auth/registration',
	async function (userData: any) {
		try {
			const response = await AuthService.registration(userData.email, userData.password)
			console.log(response)
			localStorage.setItem('token', response.data.token.token)
			return response
		} catch (error: any) {
			console.log(error.response.data.message)
		}
	}
)

export const login = createAsyncThunk(
	'auth/login',
	async function (userData: any) {
		try {
			const response = await AuthService.login(userData.email, userData.password)
			console.log(response)
			localStorage.setItem('token', response.data.token.token)
			return response
		} catch (error: any) {
			console.log(error.response.data.message)
		}
	}
)

export const registrationWithOauth = createAsyncThunk(
	'auth/registrationWithOauth',
	async function (email: string) {
		try {
			const response = await AuthService.loginWithOauth(email)
			console.log(response)
			localStorage.setItem('token', response.data.token.token)
			return response
		} catch (error: any) {
			console.log(error.response.data.message)
		}
	}
)

export const logout = createAsyncThunk(
	'auth/logout',
	async function () {
		try {
			localStorage.removeItem('token')
		} catch (error: any) {
			console.log(error.response.data.message)
		}
	}
)

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {

	},
	extraReducers(builder) {
		builder.addCase(registration.fulfilled, (state, action) => {
			state.isAuth = true
			state.email = action.payload?.data.User.email
		})
		builder.addCase(login.fulfilled, (state, action) => {
			state.isAuth = true
			state.email = action.payload?.data.Email
		})
		builder.addCase(registrationWithOauth.fulfilled, (state, action) => {
			state.isAuth = true
			state.email = action.payload?.data.User.email
		})
		builder.addCase(logout.fulfilled, (state, action) => {
			state.isAuth = false
			state.email = ''
		})
	},
})

export const { } = authSlice.actions

export default authSlice.reducer