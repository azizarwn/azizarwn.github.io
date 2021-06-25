import React from "react";
import "./aboutMe.scss";
import { Container } from "react-bootstrap";
import NavbarComponent from "../../common/navbar/navbarComponent";
import FooterComp from "../../common/footer/footerComp";

const AboutMe = () => {
	return (
		<div>
            <NavbarComponent/>
			<Container className="about-me">
				This page still in progress. I can't wait to show you as soon as
				possible. See you soon.
			</Container>
            <FooterComp/>
		</div>
	);
};

export default AboutMe;
