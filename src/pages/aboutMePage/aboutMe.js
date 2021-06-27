import React from "react";
import "./aboutMe.scss";
import { Container } from "react-bootstrap";
import NavbarComponent from "../../common/navbar/navbarComponent";
import FooterComp from "../../common/footer/footerComp";

const AboutMe = () => {
	return (
		<div>
			<NavbarComponent />
			<Container>
				<div className="about-me">
					Hi, nice to meet you. My Name is Aziza Az Zahrawani. In September
					2020, I graduated from State Polytechnic of Batam majoring in
					Multimedia and Networking. After graduation, I realized that staying
					in a comfort zone would make me out of date. Then I take a challenge
					and start my journey at Glints Academy as a Front-end Developer
					Student.
				</div>
			</Container>
			<FooterComp />
		</div>
	);
};

export default AboutMe;
