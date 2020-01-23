import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header } from '../signup-form.styles';

const Success = () => {
	return (
		<Container>
			<Header>Your signing up was successful!</Header>
			<p>You will be redirect in few seconds, if not,</p>
			<Link to="/">Click here!</Link>
		</Container>
	);
};

export default Success;
