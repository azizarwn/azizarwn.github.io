import React from "react";
import { Link } from "react-router-dom";
import {
	Container,
	Nav,
	Navbar,
} from "react-bootstrap";
import './navbarComponent.scss'

const NavbarComponent = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg">
				<Container className="navbar-container">
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="nav-container">
							<Link
								className="nav-item nav-link tab-nav"
								style={{ color: "#2B495D" }}
								to="/"
							>
								Home
							</Link>
							<Link
								className="nav-item nav-link tab-nav"
								style={{ color: "#2B495D" }}
								to="/about-me"
							>
								About Me
							</Link>
							<Link
								className="nav-item nav-link tab-nav"
								style={{ color: "#2B495D" }}
								to="/project"
							>
								Project
							</Link>
							<Link
								className="nav-item nav-link tab-nav"
								style={{ color: "#2B495D" }}
								to="/blog"
							>
								Blog
							</Link>
							<Link
								className="nav-item nav-link tab-nav"
								style={{ color: "#2B495D" }}
								to="/contact"
							>
								Contact
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavbarComponent;
