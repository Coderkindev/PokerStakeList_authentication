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

const PersonalInfo = ({ step, setStep, firstname, setFirstname, lastname, setLastname }) => {
	return (
		<Container>
			<Header>
				<BoldWord>Hello,</BoldWord>
				<br />feel free to introduce <BoldWord>yourself</BoldWord>.
			</Header>
			<InputContainer
				type="text"
				placeholder="First name"
				value={firstname}
				onChange={(e) => setFirstname(e.target.value)}
				required
			/>
			<InputContainer
				type="text"
				placeholder="Last name"
				value={lastname}
				onChange={(e) => setLastname(e.target.value)}
				required
			/>
			<ControlsContainer>
				<ControlButtonBack onClick={() => setStep(step - 1)}>Back</ControlButtonBack>
				<ControlButtonNext onClick={() => setStep(step + 1)}>Next</ControlButtonNext>
			</ControlsContainer>
		</Container>
	);
};

export default PersonalInfo;
