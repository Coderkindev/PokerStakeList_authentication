import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Signin from './pages/signin';
import Signup from './pages/signup';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/signin">
					<Signin />
				</Route>
				<Route path="/signup">
					<Signup />
				</Route>
				<Redirect from="*" to="/signin" />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
