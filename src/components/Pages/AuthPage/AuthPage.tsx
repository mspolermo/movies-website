import { FC, useState, useEffect } from "react";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import axios from "axios";
import { LoginForm } from "../../LoginForm/LoginForm";
import { Link } from "react-router-dom";

interface IAuthPageProps { };

export const AuthPage: FC<IAuthPageProps> = (props) => {

	const VkClientId = '51645497'

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const paramValue = searchParams.get('access_token');
		console.log(paramValue)
	}, [])


	// const fetchUser = async (email: string) => {
	// 	const res = await axios.post('http://localhost:5000/registration', {
	// 		email: email,
	// 		password: '1234'
	// 	})
	// 	console.log(res.data)
	// 	return res.data
	// }
	const getVkAccessToken = async () => {
		const searchParams = new URLSearchParams(window.location.search);
		const paramValue = searchParams.get('access_token');
	}
	// https://oauth.vk.com/authorize?client_id=1&display=page&redirect_uri=http://example.com/callback&scope=friends&response_type=token&v=5.131&state=123456
	return (
		<div className="container">
			<LoginForm />
			<GoogleLogin
				onSuccess={credentialResponse => {
					if (credentialResponse.credential) {
						const decoded = jwt_decode<any>(credentialResponse.credential);
						console.log(decoded.email)
						// fetchUser(decoded.email)
					}

				}}
				onError={() => {
					console.log('Login Failed');
				}}
			/>;
			<Link to={`https://oauth.vk.com/authorize?client_id=${VkClientId}&display=page&redirect_uri=http://localhost:3000&scope=1026&response_type=token&v=5.131&state=123456`}>
				<button>vk</button>
			</Link>
		</div>
	);
}
