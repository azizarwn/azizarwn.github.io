import React from "react";
import "./landing.scss";
import { Container } from "react-bootstrap";
import AzizaPic from "../../assets/shape-aziza-ok.png"
import FooterComp from "../../common/footer/footerComp";
import NavbarComponent from "../../common/navbar/navbarComponent";

const LandingPage = () => {
	return (
		<div className="cover">
            <NavbarComponent/>
			<Container>
				<div className="cover-landing">
					<div className="cover-text">
						<div className="name-intro">
							{" "}
							<span
								class="iconify"
								data-icon="emojione-waving-hand"
								data-inline="false"
							></span>{" "}
							Hi there, I am
						</div>
						<div className="name">Aziza Az Zahrawani</div>
						<div>and I am a front-end enthusiast based in Batam, Indonesia.</div>
					</div>
					<div className="cover-pic">
						<img className="pic" src={AzizaPic} alt="pic" />
					</div>
				</div>
			</Container>

			{/* <FooterComp /> */}
		</div>
	);
};

export default LandingPage;
