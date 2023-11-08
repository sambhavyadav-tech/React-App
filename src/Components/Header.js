import React from 'react'

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Header = () => {

  return (
    <Navbar bg="light "expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href="#buzz">
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="50" viewBox="0 0 200 50">
            <text x="10" y="40" font-family="Arial, sans-serif" font-size="40" fill="#007bff">bytebuzzio</text>
          </svg>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#buzz">Buzz</Nav.Link>
            <Nav.Link href="#trends">Trends</Nav.Link>
            <NavDropdown title="Topics" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Byte Science</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Byte AI</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Byte Tech</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header