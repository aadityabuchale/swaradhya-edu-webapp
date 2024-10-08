import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import Testimonials from "../components/Testimonial/Testimonials";
import Footer from "../components/Footer/Footer";
import { Element } from "react-scroll";

const Home = () => {
	return (
		<Fragment>
			<Header />
			<Element name='hero'>
				<HeroSection />
			</Element>
			<Element name='aboutus'>
				<AboutUs />
			</Element>
			<Element name='courses'>
				<Courses />
			</Element>
			<Element name='chooseus'>
				<ChooseUs />
			</Element>
			<Element name='features'>
				<Features />
			</Element>
			<Element name='testimonials'>
				<Testimonials />
			</Element>
			<Footer />
		</Fragment>
	);
};

export default Home;
