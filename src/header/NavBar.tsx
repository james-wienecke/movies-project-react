import React from "react";
import {Link} from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to={"/"}>Movies</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Link to={"/add"}>Add Movie</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}