import React from 'react'
import { Navbar, Nav, Button,DropdownButton, Dropdown } from 'react-bootstrap'

export const Header = (props) => {

  if (props.double) {
    return (
      <>
        <Navbar bg="dark" expand="lg" className="fixed-top" variant="dark">
          <Navbar.Brand href="/login" className='ms-3 text-white'>2TOQ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <DropdownButton align="end" id="dropdown-basic-button" variant="outline-danger" title="Cadastro" className="justify-content-center d-flex me-lg-5">
              <Dropdown.Item href={props.path[1]}>Funcionário</Dropdown.Item>
              <Dropdown.Item href={props.path[2]}>Administrador</Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
  else {
    return (
      <>
        <Navbar bg="dark" expand="lg" className="fixed-top" variant="dark">
          <Navbar.Brand href="/login" className='ms-3 text-white'>2TOQ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            {
              props.new
              ?
              <>
              <Nav.Link href={props.path[1]} className="justify-content-center d-flex me-lg-4"><Button variant='outline-danger'>{props.path[0]}</Button></Nav.Link>
              <Nav.Link href="/order/new" className="justify-content-center d-flex me-lg-4"><Button variant='primary'>Novo Pedido</Button></Nav.Link>
              </>
              :
              <Nav.Link href={props.path[1]} className="justify-content-center d-flex me-lg-4"><Button variant='outline-danger'>{props.path[0]}</Button></Nav.Link>
            }
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}
