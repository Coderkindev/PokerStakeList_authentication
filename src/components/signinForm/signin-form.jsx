import React, { useState } from 'react';
import { Container, Header, InputContainer, GetStartedButton } from '../signupForm/signup-form.styles';

const SigninForm = () => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	return (
		<Container>
			<Header>Sign in</Header>
			<InputContainer
				type="text"
				placeholder="E-mail"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<InputContainer
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>

			<GetStartedButton>Login</GetStartedButton>
		</Container>
	);
};

export default SigninForm;
