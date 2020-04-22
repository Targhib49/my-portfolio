import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default class BodyCV extends Component {
	render() {
		return (
			<Container className="cvCont pt-5">
				<Row className="cvRow pt-5">
					<Col>
						<Row className="justify-content-between title align-items-center">
							<Col className="text-center" xl={2}>
								<Image src="https://i.ibb.co/nC59pVZ/Targhib-Ibrahim.png" rounded />
							</Col>
							<Col className="text-left">
								<Row>
									<h1>Curriculum Vitae</h1>
								</Row>
								<Row>
									<Col xl={2}>Nama Lengkap</Col>
									<Col xl={1}>:</Col>
									<Col xl={3}>Targhib Ibrahim</Col>
									<Col xl={2}>Language Skill</Col>
									<Col xl={1}>:</Col>
								</Row>
								<Row>
									<Col xl={2}>TTL</Col>
									<Col xl={1}>:</Col>
									<Col xl={3}>Jakarta, 4/9/1998</Col>
									<Col xl={3}>English (Certified: Toefl(588))</Col>
									<Col xl={3}>Japanese (Not certified-Passive)</Col>
								</Row>
								<Row>
									<Col xl={2}>Domisili</Col>
									<Col xl={1}>:</Col>
									<Col xl={3}>Karawang, Jawa Barat</Col>
									<Col xl={3}>Arabic (Not certified-Passive)</Col>
									<Col xl={3}>Spanish (Not certified-Passive)</Col>
								</Row>
								<Row>
									<Col xl={2}>Email</Col>
									<Col xl={1}>:</Col>
									<Col xl={3}>targhib.ibrahim49@gmail.com</Col>
								</Row>
							</Col>
						</Row>
						<Row className="mt-3 px-2 dataRow">
							<Col className="skillCol">
								<Row>
									<Col>
										<h3>#Skills</h3>
									</Col>
								</Row>
								<Row>
									<Col className="text-center">
										<p>Front End Web Dev</p>
									</Col>
								</Row>
								<Row>
									<Col>
										<ul>
											<li>HTML5</li>
											<li>CSS3</li>
											<li>Bootstrap</li>
										</ul>
									</Col>
									<Col>
										<ul>
											<li>Sass</li>
											<li>Javascript</li>
										</ul>
									</Col>
								</Row>
								<Row>
									<Col className="text-center">
										<p>Management and personal skill</p>
									</Col>
								</Row>
								<Row>
									<Col>
										<ul>
											<li>Fast Learner</li>
											<li>Eye of Detail</li>
											<li>Solution Oriented</li>
										</ul>
									</Col>
									<Col>
										<ul>
											<li>Good Planning and Coordinating skill</li>
										</ul>
									</Col>
								</Row>
							</Col>
							<Col>
								<Col className="skillCol">
									<Row>
										<Col>
											<h3>#Education History</h3>
										</Col>
									</Row>
									<Row>
										<Col className="text-center">
											<p>SDIT Al Irsyad Karawang (2004-2010)</p>
										</Col>
									</Row>
									<Row>
										<Col className="text-center">
											<p>SMPIT Al Binaa IBS Bekasi (2010-2013)</p>
										</Col>
									</Row>
									<Row>
										<Col className="text-center">
											<p>SMAIT Al Binaa IBS Bekasi (2013-2016)</p>
										</Col>
									</Row>
									<Row>
										<Col className="text-center">
											<p>
												Electrical Engineering, Institut Teknologi Bandung (2016-present-<br />expected
												grad: 2021/2022)
											</p>
										</Col>
									</Row>
								</Col>
							</Col>
							<Col>
								<Col className="skillCol">
									<Row>
										<Col>
											<h3>#Experience</h3>
										</Col>
									</Row>
									<Row>
										<Col className="text-left">
											<ul>
												<li>General Chairman of ITB Robotic Club (2018-2019)</li>
												<li>
													Volunteer Mentor of CITY Youth Entrepreneur Camp Bandung-Capter
													(2018)
												</li>
												<li>
													Vice Field Coordinator of Electrical Engineering Student Orientation
													(2018)
												</li>
												<li>
													Chief Executive Officer-Student Reps of Electrical Engineering Days
													(2018)
												</li>
											</ul>
										</Col>
									</Row>
								</Col>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		);
	}
}
