import { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { login, registration } from "../../store/reducers/authReducer";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Button from "../UI/Buttons/Button/Button";
import MyInput from "../UI/Inputs/MyInput/MyInput"
import { useTranslation } from "react-i18next";

interface ILoginFormProps {
};

export const LoginForm: FC<ILoginFormProps> = () => {

	const { t, i18n } = useTranslation([]);

	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [isRegistration, setIsRegistration] = useState<boolean>(false)

	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

	const userEmail = useTypedSelector(state => state.auth.user.email)
	const error = useTypedSelector(state => state.auth.error)
	const isAuth = useTypedSelector(state => state.auth.isAuth)

	useEffect(() => {
		console.log(isAuth)
	}, [isAuth])


	return (
		<div className="authPage">
			{
				isAuth &&
				<h1 style={{ color: 'white' }}>
					{userEmail}
				</h1>
			}
			<div className="authPage__title">
				<h1>{isRegistration ? t('authPage.signUp') : t('authPage.signIn')}</h1>
			</div>

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
				placeholder={isRegistration ? t('authPage.createPassword') : t('authPage.password')}
				cl={false}
				result={[]}
				searchQuery={password}
				setSearchQuery={setPassword}
				renderResult={Button} />
			<div className="authPage__error">
				{error}
			</div>
			<div className="authPage__authType">
				{
					isRegistration ?
						<span onClick={() => setIsRegistration(false)}>{t('authPage.switchToSignIn')}</span>
						:
						<span onClick={() => setIsRegistration(true)}>{t('authPage.switchToSignUp')}</span>
				}
			</div>
			<div className="authPage__btn">
				{
					isRegistration ?
						<Button
							color="red"
							onClick={() => dispatch(registration({ email, password }))}
							type="ultraWide"
							title={[
								t('authPage.signUpBtn')
							]}
						/>
						:
						<Button
							color="red"
							onClick={() => dispatch(login({ email, password }))}
							type="ultraWide"
							title={[
								t('authPage.signInBtn')
							]}
						/>
				}
			</div>

		</div>
	);
}
