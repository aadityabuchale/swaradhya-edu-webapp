import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
	{
		id: "01",
		title: "Web Developement BootCamp for Beginners",
		lesson: 5,
		students: 20,
		rating: 3.8,
		imgUrl: courseImg1,
	},

	{
		id: "02",
		title: "CCTV Repairing and architecture",
		lesson: 8,
		students: 50,
		rating: 4.2,
		imgUrl: courseImg2,
	},

	{
		id: "03",
		title: "Personality Development and Communication",
		lesson: 7,
		students: 100,
		rating: 4.5,
		imgUrl: courseImg3,
	},
];

const Courses = () => {
	return (
		<section>
			<Container>
				<Row>
					<Col lg='12' className='mb-5'>
						<div className='course__top d-flex justify-content-between align-items-center'>
							<div className='course__top__left w-lg-50 w-sm-100'>
								<h2>Our Popular Courses</h2>
								<p>
									Explore our top courses designed to enhance
									your skills and boost your career with
									expert-led content and hands-on projects.
								</p>
							</div>

							{/* <div className='w-50 text-end'>
								<button className='btn'>See All</button>
							</div> */}
						</div>
					</Col>
					{coursesData.map((item) => (
						<Col lg='4' md='6' sm='6' key={item.id}>
							<CourseCard item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Courses;
