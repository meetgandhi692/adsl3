import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 

import React from 'react'

function Navbarr() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Management Information System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="read">Read Data</Nav.Link>
            <Nav.Link href="insert">Insert Data</Nav.Link>
            <Nav.Link href="update">Update Data</Nav.Link>
            <Nav.Link href="delete">Delete Data</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbarr