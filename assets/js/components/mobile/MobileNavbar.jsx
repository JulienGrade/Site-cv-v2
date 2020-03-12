import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Link from "react-router-dom/Link";

const MobileNavbar = (props) => {
    return (
        <>
            <Navbar className="navbar-dark" collapseOnSelect expand="lg">
                <NavbarToggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-center">
                        <Nav.Item>
                            <Nav.Link className="menu-link" as={Link} to="/" eventKey="/">Qui suis-je ?</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="menu-link" as={Link} to="/skills" eventKey="/skills">Mes skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="menu-link" as={Link} to="/formation" eventKey="/formation">Ma formation</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="menu-link" as={Link} to="/experiences" eventKey="/experiences">Mon expérience</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="menu-link" as={Link} to="/realisations" eventKey="/realisations">Mes réalisations</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="menu-link" as={Link} to="/contact" eventKey="/contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </>
    );
};

export default MobileNavbar;