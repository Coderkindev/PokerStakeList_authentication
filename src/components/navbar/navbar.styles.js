import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
	display: flex;
	width: 100%;
	max-width: 94rem;
	height: 8rem;
	padding: 0 3rem;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
`;

export const NavbarUl = styled.ul`
	display: flex;
	list-style: none;
	font-size: 1.8rem;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    margin-left: 3rem;
    color: #000;
`;

export const ButtonNavLink = styled(NavLink)`
    color: #fff;
    background-color: #318ffb;
    padding: 1rem 3rem;
`;
