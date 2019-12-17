//  use it later to create the abiity to input home address. 

import React from 'react';
import { col, Row, Container } from 'react-bootstrap';
import { Button, Navbar, Nav,NavDropdown, Form, FormControl } from 'react-bootstrap';

// import './Header.css';
import "./Header.scss";

const Header = ()=>{
    return (   
        <Navbar bg="light" expand="md">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">How it works</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Nav.Link href="#link">Why Us</Nav.Link>
            <Nav.Link href="#link">Testimonials</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <Nav.Link href="#link">Ph: 800-288-8500</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    ); 
}
export default Header; 