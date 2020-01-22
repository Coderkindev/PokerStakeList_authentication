import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
	return (
		<div>
			<h2>Your signing up was successful!</h2>
			<p>You will be redirect in few seconds, if not,</p>
			<Link to="/">Click here!</Link>
		</div>
	);
};

export default Success;
