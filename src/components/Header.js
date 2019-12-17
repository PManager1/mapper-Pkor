import React from 'react';
import { col, Row, Container } from 'react-bootstrap';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import "./Header.scss";
import image from "../Images/mylogo.png";
import { Link } from 'react-router-dom'; 


const Header = ()=>{
    return (   
        <Navbar bg="light" expand="md" className="HeaderHeight">
        <Navbar.Brand style={{backgroundImage: `url(${image}` }} href="#home">Liberty LTG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link  as={Link} to="/HowItWorks"> How It Works? </Nav.Link>
            <Nav.Link  as={Link} to="/Faq"> FAQ </Nav.Link>
            <Nav.Link  as={Link} to="/WhyUs"> Why Us </Nav.Link>

            <Nav.Link  as={Link} to="/Testimonials"> Testimonials </Nav.Link>
            <Nav.Link  as={Link} to="/ContactUs"> ContactUs </Nav.Link>
            
            <Nav.Link className="header-phoneno" href="#link"> <span className="glyphicon glyphicon-phone-alt"> </span>  800-288-8500</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    ); 
}
export default Header; 