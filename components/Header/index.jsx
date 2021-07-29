import React from 'react'
import { Navbar, Nav, Button,DropdownButton, Dropdown } from 'react-bootstrap'

export const Header = (props) => {

  if (props.double) {
    return (
      <>
        <Navbar bg="light" expand="lg" className="fixed-top">
          <Navbar.Brand href="/login" className='ms-3'>2TOQ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <DropdownButton align="end" id="dropdown-basic-button" variant="outline-primary" title="Cadastro" className="justify-content-center d-flex">
              <Dropdown.Item href={props.path[1]}>Funcionário</Dropdown.Item>
              <Dropdown.Item href={props.path[2]}>Estabelecimento</Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
  else {
    return (
      <>
        <Navbar bg="light" expand="lg" className="fixed-top">
          <Navbar.Brand href="/login" className='ms-3'>2TOQ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav.Link href={props.path[1]} className="justify-content-center d-flex"><Button variant='outline-primary'>{props.path[0]}</Button></Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}
