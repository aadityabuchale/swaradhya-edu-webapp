import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
	return (
		<section className='about-us' id='#about'>
			<Container>
				<Row>
					<Col lg='6' md='6'>
						<div className='about__img'>
							<img src={aboutImg} alt='' className='w-100' />
						</div>
					</Col>

					<Col lg='6' md='6'>
						<div className='about__content'>
							<h2>About Us</h2>
							<p>
								We are an offline education platform based in
								Maharashtra, offering free, high-quality courses
								to students. Our mission is to empower learners
								with government-certified education that
								enhances their skills and provides official
								recognition. Through our partnership with the
								Indian Government, we ensure every student can
								access valuable knowledge and certifications at
								no cost, helping them unlock future
								opportunities.
							</p>

							<div className='about__counter'>
								<div className=' d-flex gap-5 align-items-center justify-content-center'>
									<div className='single__counter'>
										<span className='counter'>
											<CountUp
												start={0}
												end={5}
												duration={2}
												suffix='+'
											/>
										</span>

										<p className='counter__title'>
											Total Centers
										</p>
									</div>

									<div className='single__counter'>
										<span className='counter'>
											<CountUp
												start={0}
												end={1000}
												duration={2}
												suffix='+'
											/>
										</span>

										<p className='counter__title'>
											Overall Students
										</p>
									</div>
								</div>

								<div className=' d-flex gap-5 align-items-center justify-content-center'>
									{/* <div className='single__counter'>
										<span className='counter'>
											<CountUp
												start={0}
												end={95}
												duration={2}
												suffix='M'
											/>
										</span>

										<p className='counter__title'>
											Ideas Raised Funds
										</p>
									</div> */}

									<div className='single__counter'>
										<span className='counter'>
											<CountUp
												start={0}
												end={10}
												duration={2}
												prefix='More than '
											/>
										</span>

										<p className='counter__title'>
											Subjects Served
										</p>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default AboutUs;
