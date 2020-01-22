import React from 'react';

import {
	Container,
	Header,
	ControlsContainer,
	ControlButtonBack,
	ControlButtonNext,
	RowContainer,
	BoldWord
} from '../signup-form.styles';

const Confirm = ({ firstname, lastname, email, username, step, setStep }) => {
	return (
		<Container>
			<Header>
				Almost <BoldWord>done</BoldWord>,
				<br />
				please check if everything's <BoldWord>perfect</BoldWord>.
			</Header>
			<RowContainer>
				<p>First name:</p>
				<span>{firstname}</span>
			</RowContainer>
			<RowContainer>
				<p>Last name:</p>
				<span>{lastname}</span>
			</RowContainer>
			<RowContainer>
				<p>E-mail:</p>
				<span>{email}</span>
			</RowContainer>
			<RowContainer>
				<p>Username:</p>
				<span>{username}</span>
			</RowContainer>
			<ControlsContainer>
				<ControlButtonBack onClick={() => setStep(step - 1)}>Back</ControlButtonBack>
				<ControlButtonNext onClick={() => setStep(step + 1)}>Next</ControlButtonNext>
			</ControlsContainer>
		</Container>
	);
};

export default Confirm;
