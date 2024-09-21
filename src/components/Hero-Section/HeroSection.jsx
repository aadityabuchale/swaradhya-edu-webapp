import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
	useGSAP(() => {
		const timeline = gsap.timeline();

		timeline
			.to(".hero__content", {
				y: -30,
				duration: 0.7,
				opacity: 1,
			})
			.to(
				".hero__img",
				{
					y: -50,
					duration: 0.7,
					opacity: 1,
				},
				"<0.25"
			);
	});

	return (
		<section>
			<Container>
				<Row>
					<Col lg='6' md='6'>
						<div className='hero__content'>
							<h2 className='mb-3 hero__title'>
								Anytime Anywhere <br /> Learn and Get <br />{" "}
								Indian Government Certification
							</h2>
							<p className='mb-5'>
								Join us for government-certified courses, where
								education is free for all. <br /> We provide
								high-quality learning supported by the Indian
								Government, helping you build skills and earn
								credentials that shape your future.
							</p>
						</div>
						{/* <div className='search'>
							<input type='text' placeholder='Search' />
							<button className='btn'>Search</button>
						</div> */}
					</Col>

					<Col lg='6' md='6'>
						<img src={heroImg} alt='' className='w-100 hero__img' />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default HeroSection;
