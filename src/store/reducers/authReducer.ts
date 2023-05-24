import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AuthService from "../../services/AuthService"
import { IUser } from "../../models/IUser"

type authState = {
	user: IUser
	isAuth: boolean
	isAdmin: boolean
	error: any
}

const initialState: authState = {
	user: {
		email: '',
		userId: null
	},
	isAuth: false,
	isAdmin: false,
	error: ''
}

export const registration = createAsyncThunk(
	'auth/registration',
	async function (userData: any, { rejectWithValue }) {
		try {
			const response = await AuthService.registration(userData.email, userData.password)
			console.log(response)
			localStorage.setItem('token', response.data.token.token)
			return response
		} catch (error: any) {
			console.log(error.response.data.message)
			return rejectWithValue(error.response.data.message[0])
		}
	}
)

export const login = createAsyncThunk(
	'auth/login',
	async function (userData: any, { rejectWithValue }) {
		try {
			const response = await AuthService.login(userData.email, userData.password)
			console.log(response)
			localStorage.setItem('token', response.data.token.token)
			return response
		} catch (error: any) {
			console.log(error.response.data.message[0])
			return rejectWithValue(error.response.data.message[0])
		}
	}
)

export const registrationWithOauth = createAsyncThunk(
	'auth/registrationWithOauth',
	async function (email: string, { rejectWithValue }) {
		try {
			const response = await AuthService.loginWithOauth(email)
			console.log(response)
			localStorage.setItem('token', response.data.token.token)
			return response
		} catch (error: any) {
			console.log(error.response.data.message)
			return rejectWithValue(error.response.data.message[0])
		}
	}
)

export const checkToken = createAsyncThunk(
	'auth/checkToken',
	async function (_, { rejectWithValue }) {
		try {
			const response = await AuthService.checkToken()
			console.log(response)
			return response
		} catch (error: any) {
			console.log(error.response.data.message)
			return rejectWithValue(error.response.data.message)
		}
	}
)

// export const logout = createAsyncThunk(
// 	'auth/logout',
// 	async function () {
// 		try {
// 			localStorage.removeItem('token')
// 		} catch (error: any) {
// 			console.log(error.response.data.message)
// 		}
// 	}
// )

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: state => {
			localStorage.removeItem('token')
			state.user.email = ''
			state.user.userId = null
			state.isAuth = false
		}
	},
	extraReducers(builder) {
		builder.addCase(registration.fulfilled, (state, action) => {
			state.isAuth = true
			state.user.email = action.payload?.data.User.email
			state.error = ''
		})
		builder.addCase(registration.rejected, (state, action) => {
			state.error = action.payload
		})
		builder.addCase(login.fulfilled, (state, action) => {
			state.isAuth = true
			state.user.userId = action.payload?.data.userId
			state.user.email = action.payload?.data.email
			state.error = ''
			if (action.payload?.data.role[0].value === 'ADMIN') {
				state.isAdmin = true
			}
		})
		builder.addCase(login.rejected, (state, action) => {
			state.error = action.payload
		})
		builder.addCase(registrationWithOauth.fulfilled, (state, action) => {
			state.isAuth = true
			state.user.email = action.payload?.data.User.email
			state.user.userId = action.payload.data.User.id
			state.error = ''
		})
		builder.addCase(checkToken.fulfilled, (state, action) => {
			// if (action.payload?.data.role[0].value === 'ADMIN') {
			// 	state.isAdmin = true
			// }
			if (action.payload?.status === 200) {
				state.isAuth = true
				state.user.userId = action.payload.data.id
				state.user.email = action.payload?.data.email
				console.log('200')
			}
		})
		builder.addCase(checkToken.rejected, (state, action) => {
			state.error = action.payload
		})
	},
})

export const { logout } = authSlice.actions

export default authSlice.reducer