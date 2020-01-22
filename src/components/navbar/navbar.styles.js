import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
