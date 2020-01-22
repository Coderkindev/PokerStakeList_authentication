import React from 'react';

const UserInfo = ({ step, setStep, firstname }) => {
	return (
		<div>
			<h2>Nice to meet you {firstname}, now your user details.</h2>
			<input type="text" placeholder="Email" />
			<input type="text" placeholder="Username" />
			<input type="text" placeholder="Password" />
			<input type="text" placeholder="Confirm password" />
			<button onClick={() => setStep(step - 1)}>Back</button>
			<button onClick={() => setStep(step + 1)}>Next</button>
		</div>
	);
};

export default UserInfo;
