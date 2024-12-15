import React from "react";
import { Navbar, Nav, NavDropdown, Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.css";
const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="py-3">
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand href="#home">
            <img className={styles.logo} src="/assets/logo.png" alt="Logo" />
          </Navbar.Brand>

          {/* Toggle for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navigation Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={styles.navLink}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" className={styles.navLink}>
                About Us
              </Nav.Link>
              <Nav.Link href="#portfolio" className={styles.navLink}>
                Portfolio
              </Nav.Link>
              <Nav.Link href="#services" className={styles.navLink}>
                Our Services
              </Nav.Link>
              <Nav.Link href="#contact" className={styles.navLink}>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
