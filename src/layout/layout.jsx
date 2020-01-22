import React from 'react';

import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

import { MainContainer, LayoutContainer } from './layout.styles';

const Layout = ({ children }) => {
	return (
		<LayoutContainer>
			<Navbar />
			<MainContainer>{children}</MainContainer>
			<Footer />
		</LayoutContainer>
	);
};

export default Layout;
