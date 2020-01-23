import React from 'react';

import { NavLink, ButtonNavLink, NavbarContainer, NavbarUl } from './navbar.styles';

const Navbar = () => {
	return (
		<NavbarContainer>
			<div>
				<h1>LOGO</h1>
			</div>

			<NavbarUl>
				<li>
					<NavLink to="/signin">Sign in</NavLink>
				</li>
				<li>
					<ButtonNavLink to="/signup">Sign up</ButtonNavLink>
				</li>
			</NavbarUl>
		</NavbarContainer>
	);
};

export default Navbar;
