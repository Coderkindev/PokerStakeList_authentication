import React from 'react';

import {
	Container,
	Header,
	ControlsContainer,
	ControlButtonBack,
	ControlButtonNext,
	InputContainer,
	BoldWord
} from '../signup-form.styles';

const UserInfo = ({ step, setStep, firstname, ...otherprops }) => {
	const handleClick = () => {
		if (
			otherprops.email === '' ||
			otherprops.username === '' ||
			otherprops.password === '' ||
			otherprops.confirmPassword === ''
		) {
			return;
		}

		if (otherprops.password === otherprops.confirmPassword) {
			setStep(step + 1);
		}
	};

	return (
		<Container>
			<Header>
				Nice to meet you <BoldWord>{firstname}</BoldWord>
				<br />
				Now let's set up your <BoldWord>user</BoldWord> registration
			</Header>
			<InputContainer
				type="email"
				placeholder="E-mail"
				value={otherprops.email}
				onChange={(e) => otherprops.setEmail(e.target.value)}
			/>
			<InputContainer
				type="text"
				placeholder="Username"
				value={otherprops.username}
				onChange={(e) => otherprops.setUsername(e.target.value)}
			/>
			<InputContainer
				type="password"
				placeholder="Password"
				value={otherprops.password}
				onChange={(e) => otherprops.setPassword(e.target.value)}
			/>
			<InputContainer
				type="password"
				placeholder="Confirm password"
				value={otherprops.confirmPassword}
				onChange={(e) => otherprops.setConfirmPassword(e.target.value)}
			/>
			<ControlsContainer>
				<ControlButtonBack onClick={() => setStep(step - 1)}>Back</ControlButtonBack>
				<ControlButtonNext onClick={handleClick}>Next</ControlButtonNext>
			</ControlsContainer>
		</Container>
	);
};

export default UserInfo;
