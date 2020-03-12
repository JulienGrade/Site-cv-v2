import React from 'react';
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

const DesktopNavbar = (props) => {
    return (
        <>
            <Nav defaultActiveKey="/" className="flex-column text-center desktop-nav sticky-top">
                <Nav.Link className="menu-link" as={Link} to="/" eventKey="/">Qui suis-je ?</Nav.Link>
                <Nav.Link className="menu-link" as={Link} to="/skills" eventKey="/skills">Mes skills</Nav.Link>
                <Nav.Link className="menu-link" as={Link} to="/formation" eventKey="/formation">Ma formation</Nav.Link>
                <Nav.Link className="menu-link" as={Link} to="/experiences" eventKey="/experiences">Mon expérience</Nav.Link>
                <Nav.Link className="menu-link" as={Link} to="/realisations" eventKey="/realisations">Mes réalisations</Nav.Link>
                <Nav.Link className="menu-link" as={Link} to="/contact" eventKey="/contact">Contact</Nav.Link>
            </Nav>
        </>
    );
};

export default DesktopNavbar;