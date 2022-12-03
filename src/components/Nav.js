import React from "react";
import "../styles/Nav.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';



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
            <LinkContainer to="/"> 
          <Nav.Link className="listitems">Home</Nav.Link>
           </LinkContainer> 
            <Nav.Link className="listitems">About</Nav.Link>
            <Nav.Link className="listitems">Features</Nav.Link>
            <Nav.Link className="listitems">FAQ</Nav.Link>
            <Nav.Link href="#documentation" className="listitems">Documentation</Nav.Link>
            <LinkContainer to="/page/connect"> 
            <Button variant="primary" size="md">My Crypto</Button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default CollapsibleExample;