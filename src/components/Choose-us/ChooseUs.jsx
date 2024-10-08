import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
	const [showVideo, setShowVideo] = useState(false);
	return (
		<section>
			<Container>
				<Row>
					<Col lg='6' md='6'>
						<div className='choose__content'>
							<h2>Why Choose Us</h2>
							<p>
								At our platform, we are committed to your
								success. Our courses are designed to be
								comprehensive, engaging, and hands-on, ensuring
								you gain real-world skills that set you apart.
								With expert instructors, flexible learning
								schedules, and continuous support, we provide
								the perfect environment for you to grow and
								thrive. Join us today and take the next step
								towards a brighter future.
							</p>
						</div>
					</Col>

					<Col lg='6' md='6'>
						<div className='choose__img'>
							{showVideo ? (
								<ReactPlayer
									url='https://www.youtube.com/watch?v=qFp27TR4Yew'
									controls
									width='100%'
									height='350px'
								/>
							) : (
								<img src={chooseImg} alt='' className='w-100' />
							)}

							{!showVideo && (
								<span className='play__icon'>
									<i
										className='ri-play-circle-line'
										onClick={() => setShowVideo(!showVideo)}
									></i>
								</span>
							)}
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ChooseUs;
