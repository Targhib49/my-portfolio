import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

export default class About extends Component {
	render() {
		return (
			<Container className="bodyContainer" id="aboutSect">
				<Row className="titleRow align-items-center pt-5">
					<Col className="text-center aboutTitle">About</Col>
				</Row>
				<Row className="skillRow align-items-center pt-5">
					<Col className="text-center aboutSkill">
						<FontAwesomeIcon icon={faEye} className="fontIcon" />
						<h6 className="pt-2 skillTitle">Eye of details</h6>
						<p className="skillDetail pt-1">No detail will be left unchecked in all of my website</p>
					</Col>
					<Col className="text-center aboutSkill">
						<FontAwesomeIcon icon={faLightbulb} className="fontIcon" />
						<h6 className="pt-2 skillTitle">Easy to use</h6>
						<p className="skillDetail pt-1">I have strong preference for easy to use and intuitive UI/UX</p>
					</Col>
					<Col className="text-center aboutSkill">
						<FontAwesomeIcon icon={faRocket} className="fontIcon" />
						<h6 className="pt-2 skillTitle">Dynamic</h6>
						<p className="skillDetail pt-1">I love making page comes to life and easy to be updated</p>
					</Col>
				</Row>
				<Row className="bioRow align-items-center pt-3">
					<Col className="text-center aboutSkill">
						<Image src="https://i.ibb.co/nC59pVZ/Targhib-Ibrahim.png" roundedCircle />
						<p className="pt-2 bioTitle">Who's this guy?</p>
						<p className="bioDetail pt-1">
							I'm currently on coding bootcamp at Impactbyte Jakarta<br />
							I have serious passion in both frontend and backend.<br /> Especially intuitive UI, fast
							website, and animations<br />
							<a href="#cv">Check out my CV here for better knowledge about me</a>
						</p>
					</Col>
				</Row>
			</Container>
		);
	}
}
