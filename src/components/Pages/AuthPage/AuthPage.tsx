import { FC } from "react";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { LoginForm } from "../../LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import { registrationWithOauth } from "../../../store/reducers/authReducer";
import { ThunkDispatch } from "redux-thunk";
declare var VK: any;

interface IAuthPageProps { };

export const AuthPage: FC<IAuthPageProps> = (props) => {

	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

	const vkAuth = () => {
		VK.Auth.login(function (response: any) {
			if (response.session) {
				console.log(response)
				// dispatch(registrationWithOauth(response.session))
				if (response.settings) {
					/* Выбранные настройки доступа пользователя, если они были запрошены */
				}
			} else {
				/* Пользователь нажал кнопку Отмена в окне авторизации */
			}
		});
	}
	return (
		<div className="container">
			<LoginForm />
			<GoogleLogin
				onSuccess={credentialResponse => {
					if (credentialResponse.credential) {
						const decoded = jwt_decode<any>(credentialResponse.credential);
						console.log(decoded.email)
						dispatch(registrationWithOauth(decoded.email))
					}

				}}
				onError={() => {
					console.log('Login Failed');
				}}
			/>

			<button onClick={vkAuth} style={{ padding: '20px' }}>vk</button>
		</div>
	);
}
