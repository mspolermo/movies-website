import { FC, useEffect, useState } from "react";
import axios from "axios";

interface IVerifyPageProps { };

export const VerifyPage: FC<IVerifyPageProps> = (props) => {

	// const fetchVkUser = async (token: string) => {
	// 	const res = await axios.post('https://api.vk.com/method/status.get&v=5.131', {
	// 		headers: {
	// 			Authorization: `Bearer ${token}`
	// 		}
	// 	})
	// 	console.log(res.data)
	// }

	useEffect(() => {
		const token = window.location.hash.substr(14);
		// fetchVkUser(token)
		console.log(token)
	}, [])

	return (
		<div>

		</div>
	);
}
