import { FC, useState } from "react";
interface ILoginFormProps { };

export const LoginForm: FC<ILoginFormProps> = (props) => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	return (
		<div>
			<form>
				<div>
					<input
						type="text"
						onChange={e => setEmail(e.target.value)}
						value={email}
						placeholder="email"
					/>
				</div>
				<div>
					<input
						type="password"
						onChange={e => setPassword(e.target.value)}
						value={password}
						placeholder="password"
					/>
				</div>
			</form>
		</div>
	);
}
