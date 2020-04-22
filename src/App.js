import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
	return (
		<Fragment>
			<Header />
			<Body />
			<Footer />
		</Fragment>
	);
}

export default App;
