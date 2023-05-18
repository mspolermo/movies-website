import { FC, useState, useEffect } from "react";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { LoginForm } from "../../LoginForm/LoginForm";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registrationWithOauth } from "../../../store/reducers/authReducer";
import { ThunkDispatch } from "redux-thunk";

interface IAuthPageProps { };

export const AuthPage: FC<IAuthPageProps> = (props) => {

	const VkClientId = '51645497'
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()


	// https://oauth.vk.com/authorize?client_id=1&display=page&redirect_uri=http://example.com/callback&scope=friends&response_type=token&v=5.131&state=123456
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
			/>;
			<Link to={`https://oauth.vk.com/authorize?client_id=${VkClientId}&display=page&redirect_uri=http://localhost:3000/movies-website/verify/&scope=email&response_type=token&v=5.131&state=123456`}>
				<button>vk</button>
			</Link>
		</div>
	);
}
