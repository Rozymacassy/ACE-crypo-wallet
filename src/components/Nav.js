import React from "react";
import "./Nav.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="" variant="dark" className="homeNav">
      <Container>
        <Navbar.Brand href="#home" className="logobox"><img src="images/ace-logo.svg" alt="logo" className="logo" />
</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav" className="list">
          <Nav className="me-auto">
          </Nav>

          <Nav >
            
          <Nav.Link href="#home" className="listitems">Home</Nav.Link>
            <Nav.Link href="#about" className="listitems">About</Nav.Link>
            <Nav.Link href="#features" className="listitems">Features</Nav.Link>
            <Nav.Link href="#FAQ" className="listitems">FAQ</Nav.Link>
            <Nav.Link href="#documentation" className="listitems">Documentation</Nav.Link>
            <button className="cryptoBtn">My Crypto</button>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default CollapsibleExample;