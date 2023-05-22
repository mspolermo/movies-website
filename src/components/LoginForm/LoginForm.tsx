import { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { login, registration } from "../../store/reducers/authReducer";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Button from "../UI/Buttons/Button/Button";
import MyInput from "../UI/Inputs/MyInput/MyInput"

interface ILoginFormProps {
};

export const LoginForm: FC<ILoginFormProps> = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
	const userEmail = useTypedSelector(state => state.auth.email)
	const isAuth = useTypedSelector(state => state.auth.isAuth)

	useEffect(() => {
		console.log(isAuth)
	}, [isAuth])


	return (
		<div>
			{
				isAuth &&
				<h1 style={{ color: 'white' }}>
					{userEmail}
				</h1>
			}

			<MyInput
				search={false}
				placeholder="Email"
				cl={true}
				result={[]}
				searchQuery={email}
				setSearchQuery={setEmail}
				renderResult={Button} />
			<MyInput
				search={false}
				placeholder="Пароль"
				cl={false}
				result={[]}
				searchQuery={password}
				setSearchQuery={setPassword}
				renderResult={Button} />
			<Button
				color="red"
				onClick={() => dispatch(registration({ email, password }))}
				title={[
					'Зарегестрироваться'
				]}
			/>
			<Button
				color="red"
				onClick={() => dispatch(login({ email, password }))}
				title={[
					'Войти'
				]}
			/>
		</div>
	);
}
