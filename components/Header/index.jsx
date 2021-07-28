import React from 'react'
import Link from 'next/link'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'

export const Header = ({ path }) => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="fixed-top">
        <Navbar.Brand href="/login" className='ms-3'>2TOQ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav.Link href={path[1]} className="justify-content-center d-flex"><Button variant='outline-primary'>{path[0]}</Button></Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
