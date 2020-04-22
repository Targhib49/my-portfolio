import React, { Component, Fragment } from 'react';
import MainJumbotron from './Header/MainJumbotron';
import MainNavbar from './Header/MainNavbar';

export default class Header extends Component {
	render() {
		return (
			<Fragment>
				<MainJumbotron />
				<MainNavbar />
			</Fragment>
		);
	}
}
