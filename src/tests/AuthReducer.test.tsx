import { login } from "../store/reducers/authReducer"

describe('auth async thunks', () => {

	it('should return user data', async () => {
		const response = {
			email: 'abc@gmail.com',
			userId: 3,
			role: [{
				id: 2,
				value: "USER",
			}],
		}
		const dispatch = jest.fn()
		const thunk = login({ email: 'abc@gmail.com', password: '1234' })
		//@ts-ignore
		await thunk(dispatch, () => ({}))

		const { calls } = dispatch.mock
		expect(calls).toHaveLength(2)

		const [start, end] = calls

		expect(start[0].type).toBe('auth/login/pending')
		expect(end[0].type).toBe('auth/login/fulfilled')
		expect(end[0].payload.status).toBe(201)
		expect(end[0].payload.data.role[0].value).toBe(response.role[0].value)
		expect(end[0].payload.data.email).toBe(response.email)
	})


	it('should return email validation error', async () => {
		const error = "email - Некорректный email"

		const dispatch = jest.fn()
		const thunk = login({ email: 'abcgmail.com', password: '1234' })
		//@ts-ignore
		await thunk(dispatch, () => ({}))

		const { calls } = dispatch.mock
		expect(calls).toHaveLength(2)

		const [start, end] = calls

		expect(start[0].type).toBe('auth/login/pending')
		expect(end[0].type).toBe('auth/login/rejected')
		expect(end[0].payload).toBe(error)
	})

	it('should return password validation error', async () => {
		const error = "password - Не меньше 4 и не больше 16"

		const dispatch = jest.fn()
		const thunk = login({ email: 'abc@gmail.com', password: '123' })
		//@ts-ignore
		await thunk(dispatch, () => ({}))

		const { calls } = dispatch.mock
		expect(calls).toHaveLength(2)

		const [start, end] = calls

		expect(start[0].type).toBe('auth/login/pending')
		expect(end[0].type).toBe('auth/login/rejected')
		expect(end[0].payload).toBe(error)
	})
})