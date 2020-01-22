import React from 'react';

import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const Layout = ({ children }) => {
	return (
		<div
			style={{
				width: '100%',
				minHeight: '100vh'
			}}
		>
			<Navbar />
			<main
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
					// paddingTop: '15rem'
				}}
			>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
