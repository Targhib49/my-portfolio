import React, { Component, Fragment } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class Main extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Body />
				<Footer />
			</Fragment>
		);
	}
}
