import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import { Link } from "react-scroll"; // Import Link for smooth scrolling

const navLinks = [
	{
		display: "Home",
		url: "hero", // The section names correspond to the Element names in Home.jsx
	},
	{
		display: "About",
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

const Header = () => {
	const menuRef = useRef();

	const menuToggle = () => menuRef.current.classList.toggle("active__menu");

	return (
		<header className='header'>
			<Container>
				<div className='navigation d-flex align-items-center justify-content-between'>
					<div className='logo'>
						<h2 className=' d-flex align-items-center gap-1'>
							<i className='ri-macbook-line'></i> Swaradhya MWS
						</h2>
					</div>

					<div className='nav d-flex align-items-center gap-5'>
						<div
							className='nav__menu'
							ref={menuRef}
							onClick={menuToggle}
						>
							<ul className='nav__list'>
								{navLinks.map((item, index) => (
									<li key={index} className='nav__item'>
										{/* Use Link component from react-scroll */}
										<Link
											to={item.url} // The name of the section in Home.jsx
											spy={true}
											smooth={true}
											offset={70} // Optional, adjusts scroll position to account for fixed headers
											duration={500}
										>
											{item.display}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div className='nav__right'>
							<p className='mb-0 d-flex align-items-center gap-2'>
								<i className='ri-phone-line'></i> +91 8888358117
							</p>
						</div>
					</div>

					<div className='mobile__menu'>
						<span>
							<i
								className='ri-menu-line'
								onClick={menuToggle}
							></i>
						</span>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
