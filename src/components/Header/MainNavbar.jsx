import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Link as NewLink } from 'react-router-dom';

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
						<NewLink to="/cv" className="navItems nav-link">
							CV
						</NewLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
