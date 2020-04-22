import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareUp } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

export default class Contact extends Component {
	render() {
		return (
			<Container fluid className="contContainer" id="contactSect">
				<Row className="contactRow align-items-center">
					<Col className="text-center contactTitle">Contact</Col>
				</Row>
				<Row className="quesRow align-items-center">
					<Col className="text-center questTitle">Have a question or want to work together?</Col>
				</Row>
				<Row className="justify-content-center pt-5">
					<Col xl={4} className="text-center">
						<Form>
							<Form.Group>
								<Form.Control type="text" placeholder="Name" />
							</Form.Group>
							<Form.Group>
								<Form.Control type="email" placeholder="Enter Email" />
							</Form.Group>
							<Form.Group>
								<Form.Control className="text" as="textarea" rows="3" placeholder="Your Message" />
							</Form.Group>
							<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Currently not available</Tooltip>}>
								<span className="d-inline-block">
									<Button disabled style={{ pointerEvents: 'none' }} variant="outline-light">
										Submit
									</Button>
								</span>
							</OverlayTrigger>
						</Form>
					</Col>
				</Row>
				<Row className="pt-5 justify-content-between">
					<Col xl={1} lg={1} className="text-center">
						<a href="https://github.com/Targhib49">
							<FontAwesomeIcon className="github" icon={faGithub} />
						</a>
					</Col>
					<Col xl={1} lg={1} className="text-center">
						<Link to="homeSect" smooth={true} duration={1000}>
							<FontAwesomeIcon className="up" icon={faCaretSquareUp} />
						</Link>
					</Col>
				</Row>
			</Container>
		);
	}
}
