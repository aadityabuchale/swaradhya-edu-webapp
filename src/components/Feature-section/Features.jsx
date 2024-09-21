import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
	{
		title: "Well Equipped Labs",
		desc: "Our state-of-the-art labs are designed to provide hands-on experience with the latest technology and tools, ensuring you gain practical skills in a real-world environment.",
		icon: "ri-draft-line",
	},

	{
		title: "Experienced Teachers",
		desc: "Learn from professionals with good of experience who are dedicated to guiding you through every step of your educational journey.",
		icon: "ri-discuss-line",
	},

	{
		title: "Government Certification",
		desc: "Receive an accredited certification upon completion, recognized by Skill India government, boosting your credibility and enhancing your career prospects.",
		icon: "ri-contacts-book-line",
	},
];

const Features = () => {
	return (
		<section>
			<Container>
				<Row>
					{FeatureData.map((item, index) => (
						<Col lg='4' md='6' key={index}>
							<div className='single__feature text-center px-4'>
								<h2 className='mb-3'>
									<i className={item.icon}></i>
								</h2>
								<h6>{item.title}</h6>
								<p>{item.desc}</p>
							</div>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Features;
