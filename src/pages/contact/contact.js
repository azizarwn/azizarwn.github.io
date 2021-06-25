import React from "react";
import "./contact.scss";
import { Container } from "react-bootstrap";
import NavbarComponent from "../../common/navbar/navbarComponent";
import FooterComp from "../../common/footer/footerComp";

const ContactPage = () => {
	return (
		<div>
            <NavbarComponent/>
			<Container className="contact">
				This page still in progress. I can't wait to show you as soon as
				possible. See you soon.
			</Container>
            <FooterComp/>
		</div>
	);
};

export default ContactPage;
