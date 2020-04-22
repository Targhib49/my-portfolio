import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

export default class MainNavbar extends Component {
	render() {
		return (
			<Navbar expand="lg" className="mainNav fixed-top">
				<Navbar.Toggle className="navToggle" aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Link to="homeSect" className="navItems nav-link" smooth={true} duration={1000}>
							Home
						</Link>
						<Link to="aboutSect" className="navItems nav-link" smooth={true} duration={1000}>
							About
						</Link>
						<Link to="portSect" className="navItems nav-link " smooth={true} duration={1000}>
							Portfolio
						</Link>
						<Link to="contactSect" className="navItems nav-link" smooth={true} duration={1000}>
							Contact
						</Link>
						<Nav.Link href="CV" className="navItems">
							CV
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
