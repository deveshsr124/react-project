import React from 'react';
import RegisterPage from './Components/RegisterPage';
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home';
import ResourcesPage from './Components/ResourcesPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// eslint-disable-next-line
const App = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/next" component={RegisterPage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/home" component={Home} />
					<Route path="/resources" component={ResourcesPage} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
