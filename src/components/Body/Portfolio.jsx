import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default class Portfolio extends Component {
	render() {
		return (
			<Container fluid className="portContainer" id="portSect">
				<Row className="titleRow align-items-center">
					<Col className="text-center projectsTitle">Projects</Col>
				</Row>
				<Row className="projectRow align-items-center justify-content-center">
					<Col xl={4} lg={4} className="text-center">
						<Card>
							<Card.Img
								variant="top"
								src="https://i.ibb.co/rZQ4pCR/Screenshot-from-2020-04-22-21-02-51.png"
							/>
							<Card.Body>
								<Card.Title className="title">Rate Your Movie</Card.Title>
								<Card.Text className="desc">
									Weekend personal project on impactbyte coding bootcamp. You can mark your favorite
									movie, give it a star rating, review, and also check what other users say about it
								</Card.Text>
								<Row className="justify-content-around">
									<Button href="http://rymib20.surge.sh/" variant="primary">
										Live web
									</Button>
									<Button href="https://github.com/Targhib49/task-dom-api" variant="primary">
										View on Github
									</Button>
								</Row>
							</Card.Body>
						</Card>
					</Col>
					<Col xl={4} lg={4} className="text-center">
						<Card>
							<Card.Img
								variant="top"
								src="https://i.ibb.co/P1QJVBy/Screenshot-from-2020-04-22-21-00-26.png"
							/>
							<Card.Body>
								<Card.Title className="title">Explore Indonesia</Card.Title>
								<Card.Text className="desc">
									An ongoing personal project. You can explore every province in Indonesia and find
									out the best food, places, and others cultural info about that place. Completed with
									unique User experience
								</Card.Text>
								<Row className="justify-content-around">
									<OverlayTrigger
										overlay={<Tooltip id="tooltip-disabled">Currently not available</Tooltip>}
									>
										<span className="d-inline-block">
											<Button disabled style={{ pointerEvents: 'none' }} variant="primary">
												Live web
											</Button>
										</span>
									</OverlayTrigger>
									<OverlayTrigger
										overlay={<Tooltip id="tooltip-disabled">Currently not available</Tooltip>}
									>
										<span className="d-inline-block">
											<Button disabled style={{ pointerEvents: 'none' }} variant="primary">
												View on Github
											</Button>
										</span>
									</OverlayTrigger>
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}
