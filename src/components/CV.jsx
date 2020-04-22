import React, { Component, Fragment } from 'react';
import HeaderCV from './CV/HeaderCV';
import BodyCV from './CV/BodyCV';

export default class CV extends Component {
	render() {
		return (
			<Fragment>
				<HeaderCV />
				<BodyCV />
			</Fragment>
		);
	}
}
