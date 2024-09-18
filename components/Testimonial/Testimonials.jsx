import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
	const settings = {
		infinite: true,
		dots: true,
		speed: 500,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToScroll: 1,
	};
	return (
		<section>
			<Container>
				<Row>
					<Col lg='10' md='12' className='m-auto'>
						<div className='testimonial__wrapper d-flex justify-content-between align-items-center flex-lg-row flex-column'>
							<div className='testimonial__img w-50'>
								<img src={img} alt='' className='w-100' />
							</div>

							<div className='testimonial__content col-12 col-lg-6'>
								<h2 className='mb-4'>Our Students Voice</h2>

								<Slider {...settings}>
									<div>
										<div className='single__testimonial'>
											<h6 className='mb-3 fw-bold'>
												Fantastic Learning Experience
											</h6>
											<p>
												This course exceeded my
												expectations. The instructors
												were top-notch, and the hands-on
												projects helped me apply the
												concepts effectively. I feel
												more confident in my skills now!
											</p>

											<div className='student__info mt-4'>
												<h6 className='fw-bold'>
													Ramesh Vairagar
												</h6>
												<p>Parbhani, Maharashtra</p>
											</div>
										</div>
									</div>

									<div>
										<div className='single__testimonial'>
											<h6 className='mb-3 fw-bold'>
												Highly Recommend!
											</h6>
											<p>
												The content was well-structured,
												and the support from the
												instructors was invaluable. I’ve
												gained practical knowledge that
												has already benefited me in my
												career.
											</p>

											<div className='student__info mt-4'>
												<h6 className='fw-bold'>
													Ram Jadhav
												</h6>
												<p>Hingoli, Maharashtra</p>
											</div>
										</div>
									</div>

									<div>
										<div className='single__testimonial'>
											<h6 className='mb-3 fw-bold'>
												Best Course I've Taken
											</h6>
											<p>
												The course material was
												comprehensive and easy to
												follow. The real-world examples
												and projects were incredibly
												helpful in solidifying my
												understanding of the topics.
											</p>

											<div className='student__info mt-4'>
												<h6 className='fw-bold'>
													Shekhar Patil
												</h6>
												<p>Parbhani, Maharashra</p>
											</div>
										</div>
									</div>
								</Slider>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Testimonials;
