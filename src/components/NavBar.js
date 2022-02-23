import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


function NavBar() {

  const logo = require('../assets/5026376.png')
  const linkedIn = require('../assets/linkedin.png')
  const gitHub = require('../assets/github.png')
  const email = require('../assets/email.png')

  return (
    <Navbar expand="lg" sticky="top">
      <Container fluid>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
        <Nav className='m-auto'>
        <Nav.Item style={{paddingRight: 10, paddingLeft: 10}}>
        <a href="https://www.linkedin.com/in/slatteryr/">
        <img
        src={linkedIn}
        width="30"
        height="30"
        alt="LinkedIn"
        backgroundColor= 'transparent'/>
        </a>
        </Nav.Item>
        <Nav.Item style={{paddingRight: 10, paddingLeft: 10}}>
        <a href="https://github.com/Slatteryr">
        <img
        src={gitHub}
        width="30"
        height="30"
        alt="GitHub"
        backgroundColor= 'transparent'/>
        </a>
        </Nav.Item>
        <Nav.Item style={{paddingRight: 20, paddingLeft: 10}}>
        <a href="mailto:ryan.slattz@gmail.com">
        <img
        src={email}
        width="30"
        height="30"
        alt="E-Mail"
        backgroundColor= 'transparent'/>
      </a>
      </Nav.Item>
      </Nav>
      <Navbar.Brand href="/">
      <img
        src={logo}
        width="40"
        height="40"
        alt="Slattery"
        backgroundColor= 'transparent'
        />
      </Navbar.Brand>
      <Nav style={{paddingTop: 3}}>
      <Nav.Item>
      <Nav.Link>projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link>blog</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link>contact</Nav.Link>
      </Nav.Item>
      </Nav>
      </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
