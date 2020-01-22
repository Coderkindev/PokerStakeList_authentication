import React from 'react';

const PersonalInfo = ({ step, setStep }) => {
	return (
		<div>
			<h2>Good morning, let introduce yourself!</h2>
			<input type="text" placeholder="First name" />
			<input type="text" placeholder="Last name" />
			<button onClick={() => setStep(step - 1)}>Back</button>
			<button onClick={() => setStep(step + 1)}>Next</button>
		</div>
	);
};

export default PersonalInfo;
