import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link as NewLink } from 'react-router-dom';

export default class HeaderCV extends Component {
	render() {
		return (
			<Navbar expand="lg" className="mainNav fixed-top">
				<Navbar.Toggle className="navToggle" aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NewLink to="/" className="navItems nav-link">
							Back to Home
						</NewLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
