import React from 'react'
import { Navbar, Nav, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { clearLoggedUser } from '../../store/modules/auth/reducer'
import { clearCategories } from '../../store/modules/categories/reducer'
import { clearProducts } from '../../store/modules/products/reducer'
import { clearList } from '../../store/modules/toAddList/reducer'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { useRouter } from 'next/dist/client/router'

export const Header = (props) => {

  const router = useRouter()
  const dispatch = useDispatch()

  const handleLogout = () => {
    toast.info("Você saiu da aplicação.")
    Cookies.remove("@api-data")
    dispatch(clearLoggedUser())
    dispatch(clearCategories())
    dispatch(clearProducts())
    dispatch(clearList())
    router.push("/login")
  }

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
                  <Nav.Link href="#" className="justify-content-center d-flex me-lg-4"><Button variant='outline-danger' onClick={() => handleLogout()}>{props.path[0]}</Button></Nav.Link>
                  <Nav.Link href="/order/new" className="justify-content-center d-flex me-lg-4"><Button variant='primary'>Novo Pedido</Button></Nav.Link>
                </>
                :
                <Nav.Link href="#" className="justify-content-center d-flex me-lg-4"><Button variant='outline-danger' onClick={() => handleLogout()}>{props.path[0]}</Button></Nav.Link>
            }
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}
