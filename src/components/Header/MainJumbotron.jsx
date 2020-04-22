import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

export default class MainJumbotron extends Component {
	render() {
		return (
			<Jumbotron fluid className="headerJumbotron" id="homeSect">
				<Container className="headerContainer">
					<Row className="headerRow align-items-center justify-content-center">
						<Col xl={6} className="text-center">
							<h1>Hello, I'm Targhib Ibrahim</h1>
							<p>A freelance frontend web developer</p>
							<Link to="aboutSect" smooth={true} duration={1000}>
								<Button variant="outline-light" size="md">
									Check my work
								</Button>
							</Link>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		);
	}
}
