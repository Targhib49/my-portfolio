import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import CV from './components/CV';

function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/cv" component={CV} />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
