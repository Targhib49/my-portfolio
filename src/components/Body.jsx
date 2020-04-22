import React, { Component, Fragment } from 'react';
import About from './Body/About';
import Portfolio from './Body/Portfolio';

export default class Body extends Component {
	render() {
		return (
			<Fragment>
				<About />
				<Portfolio />
			</Fragment>
		);
	}
}
