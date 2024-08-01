import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbarComponent.scss";
import clsx from "clsx";

const navItem = [
  { label: "Home", href: "/" },
  { label: "Project", href: "/project" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="py-[30px]">
      <Container className="navbar-container">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="ml-auto"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-center">
          <Nav className="nav-container">
            {navItem.map((item, i) =>
              <Link
                key={i}
                className="nav-item nav-link !text-primary-2 mx-[10px] text-xl font-bold"
                to={item.href}
              >
                {item.label}
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
