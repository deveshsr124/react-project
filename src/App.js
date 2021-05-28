import React from 'react';
import RegisterPage from './Components/RegisterPage';
import LandingPage from './Components/LandingPage';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home';
import AdmissionServices from './Components/AdmissionServices';
import ResourcesPage from './Components/ResourcesPage';
import AskQuestion from './Components/AskQuestion';
import Progress from './Components/Progress';
import SearchPage from './Components/SearchPage';
import Details from './Components/Details';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// eslint-disable-next-line
const App = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/register" component={RegisterPage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/home" component={Home} />
					<Route path="/AdmissionServices" component={AdmissionServices} />
					<Route path="/details" component={Details} />
					<Route path="/search" component={SearchPage} />
					<Route path="/askQuestion" component={AskQuestion} />
					<Route path="/progress" component={Progress} />
					<Route path="/resources" component={ResourcesPage} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
