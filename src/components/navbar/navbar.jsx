import React from 'react';
import { Link } from 'react-router-dom';

import { NavLink, ButtonNavLink } from './navbar.styles';

const Navbar = () => {
	return (
		<nav
			style={{
				display: 'flex',
				width: '100%',
				maxWidth: '94rem',
				height: '8rem',
				padding: '0 3rem',
				justifyContent: 'space-between',
				alignItems: 'center',
				margin: '0 auto'
			}}
		>
			<div>
				<h1>LOGO</h1>
			</div>

			<ul
				style={{
					display: 'flex',
					listStyle: 'none',
					fontSize: '1.8rem'
				}}
			>
				<li>
					<NavLink to="/signin">Sign in</NavLink>
				</li>
				<li>
					<ButtonNavLink to="/signup">Sign up</ButtonNavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
