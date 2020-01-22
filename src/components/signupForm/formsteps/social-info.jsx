import React from 'react';

const SocialInfo = ({ step, setStep }) => {
	return (
		<div>
			<h2>Cool, now tell us where we can find you.</h2>
			<input type="text" placeholder="Facebook" />
			<input type="text" placeholder="Twitch" />
			<input type="text" placeholder="Google+" />
			<input type="text" placeholder="Anything" />
			<button onClick={() => setStep(step - 1)}>Back</button>
			<button onClick={() => setStep(step + 1)}>Next</button>
		</div>
	);
};

export default SocialInfo;
