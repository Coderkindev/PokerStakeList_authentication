import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PersonalInfo from './formsteps/personal-info';
import UserInfo from './formsteps/user-info';
import Confirm from './formsteps/confirm';
import Success from './formsteps/success';

const SignupForm = () => {
	const [ step, setStep ] = useState(1);
	const [ firstname, setFirstname ] = useState('');
	const [ lastname, setLastname ] = useState('');
	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');

	switch (step) {
		case 1:
			return (
				<div>
					<h1>Join our comunity!</h1>
					<button onClick={() => setStep(step + 1)}>Join now!</button>
					<Link to="/signin">Already have an account?</Link>
				</div>
			);
		case 2:
			return (
				<PersonalInfo
					firstname={firstname}
					setFirstname={setFirstname}
					lastname={lastname}
					setLastname={setLastname}
					step={step}
					setStep={setStep}
				/>
			);
		case 3:
			return (
				<UserInfo
					firstname={firstname}
					email={email}
					setEmail={setEmail}
					username={username}
					setUsername={setUsername}
					password={password}
					setPassword={setPassword}
					confirmPassword={confirmPassword}
					setConfirmPassword={setConfirmPassword}
					step={step}
					setStep={setStep}
				/>
			);
		case 4:
			return (
				<Confirm
					firstname={firstname}
					lastname={lastname}
					email={email}
					username={username}
					step={step}
					setStep={setStep}
				/>
			);
		case 5:
			return <Success />;
		default:
			return <div>Error</div>;
	}
};

export default SignupForm;
