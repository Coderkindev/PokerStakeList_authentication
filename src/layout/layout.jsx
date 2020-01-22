import React from 'react';

const Layout = ({ children }) => {
	return (
		<div
			style={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				// justifyContent: 'space-between',
				alignItems: 'center'
			}}
		>
			{/* <nav>Navbar</nav> */}
			<main>{children}</main>
			{/* <footer>Footer</footer> */}
		</div>
	);
};

export default Layout;
