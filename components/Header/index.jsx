import React from 'react'
import Link from 'next/link'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'

export const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="fixed-top">
        {/* <Container> */}
          <Navbar.Brand href="#home" className='ms-3'>2TOQ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav.Link href="#" className="justify-content-center d-flex"><Button variant='outline-primary'>Cadastro</Button></Nav.Link>
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}
