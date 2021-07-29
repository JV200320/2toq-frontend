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
      await UserService.login({ email: email, password: password })
      router.push('/kitchen')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className="text-center bg-danger">
      <Formulario className="pt-4 pb-4 d-flex flex-column align-items-center" onSubmit={(e) => handleSubmit(e)}>
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
        <Button variant="primary" type="submit" className="w-25">
          Entrar
        </Button>
        <a href="#">Esqueci minha senha</a>
      </Formulario>
    </Container>
    
  )
}
