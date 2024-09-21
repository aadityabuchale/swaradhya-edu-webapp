import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-scroll"; // Import Link for smooth scrolling
import "./footer.css";

const footerQuickLinks = [
	{
		display: "Home",
		url: "hero",
	},
	{
		display: "About US",
		url: "aboutus",
	},

	{
		display: "Courses",
		url: "courses",
	},

	{
		display: "Features",
		url: "features",
	},
];

const footerInfoLinks = [
	// {
	// 	display: "Privacy Policy",
	// 	url: "#",
	// },
	// {
	// 	display: "Membership",
	// 	url: "#",
	// },
	// {
	// 	display: "Purchases Guide",
	// 	url: "#",
	// },
	// {
	// 	display: "Terms of Service",
	// 	url: "#",
	// },
];

const Footer = () => {
	return (
		<footer className='footer'>
			<Container>
				<Row>
					<Col lg='4' md='6' className='mb-4'>
						<h2
							className=' d-flex align-items-center justify-content-center justify-content-sm-start gap-1'
							style={{ fontSize: 20 }}
						>
							<i className='ri-macbook-line'></i> Swaradhya MWS
						</h2>

						<div className='follows'>
							<p className='mb-0'>Follow us on social media</p>
							<span>
								{" "}
								<a href='facebook.com'>
									<i className='ri-facebook-line'></i>
								</a>
							</span>

							<span>
								{" "}
								<a href='facebook.com'>
									<i className='ri-instagram-line'></i>
								</a>
							</span>

							<span>
								{" "}
								<a href='facebook.com'>
									<i className='ri-linkedin-line'></i>
								</a>
							</span>

							<span>
								{" "}
								<a href='facebook.com'>
									<i className='ri-twitter-line'></i>
								</a>
							</span>
						</div>
					</Col>

					<Col lg='4' md='6' className='mb-4'>
						<h6 className='fw-bold'>Explore</h6>
						<ListGroup className='link__list'>
							{footerQuickLinks.map((item, index) => (
								<ListGroupItem
									key={index}
									className='border-0 ps-0 link__item'
								>
									{" "}
									<Link
										to={item.url} // The name of the section in Home.jsx
										spy={true}
										smooth={true}
										offset={70} // Optional, adjusts scroll position to account for fixed headers
										duration={500}
									>
										{item.display}
									</Link>
								</ListGroupItem>
							))}
						</ListGroup>
					</Col>

					{/* <Col lg='3' md='6' className='mb-4'>
						<h6 className='fw-bold'>Information</h6>
						<ListGroup className='link__list'>
							{footerInfoLinks.map((item, index) => (
								<ListGroupItem
									key={index}
									className='border-0 ps-0 link__item'
								>
									{" "}
									<a href={item.url}>{item.display}</a>
								</ListGroupItem>
							))}
						</ListGroup>
					</Col> */}

					<Col lg='4' md='6'>
						<h6 className='fw-bold'>Get in Touch</h6>

						<p>Address: Parbhani,Maharashtra(431401)</p>
						<p> Phone: +91 8888358117 </p>
						<p>Email: contact@swaradhyamultiworkskills.in</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
