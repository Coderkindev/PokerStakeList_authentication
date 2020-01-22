import React from 'react';

const Confirm = ({ firstname, lastname, email, username, step, setStep }) => {
	return (
		<div>
			<h2>Thank you, now here is the summary</h2>
			<div>
				<p>First name:</p>
				<span>{firstname}</span>
			</div>
			<div>
				<p>Last name:</p>
				<span>{lastname}</span>
			</div>
			<div>
				<p>E-mail:</p>
				<span>{email}</span>
			</div>
			<div>
				<p>Username:</p>
				<span>{username}</span>
			</div>

			<button onClick={() => setStep(step - 1)}>Back</button>
			<button onClick={() => setStep(step + 1)}>Next</button>
		</div>
	);
};

export default Confirm;
