import React from 'react'
import { Button, Form as Formulario, Container} from 'react-bootstrap'
import {useRouter} from 'next/router'
import UserService from '../../services/user'

export const Form = () => {

  const router = useRouter()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserService.signIn({ email: email, password: password })
      router.push('/kitchen')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className="text-center bg-light rounded pt-5 pb-5">
      <Formulario className="d-flex flex-column align-items-center" onSubmit={(e) => handleSubmit(e)}>
        <Formulario.Group className="mb-3 w-75" controlId="formBasicEmail">
          <Formulario.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(evt) => {setEmail(evt.target.value)}}
          />
        </Formulario.Group>

        <Formulario.Group className="mb-3 w-75" controlId="formBasicPassword">
          <Formulario.Control
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(evt) => {setPassword(evt.target.value)}}
          />
        </Formulario.Group>
        <Button variant="danger" type="submit" className="w-25">
          Entrar
        </Button>
        <a href="#" className="mt-3 text-danger">Esqueci minha senha</a>
      </Formulario>
    </Container>
    
  )
}
