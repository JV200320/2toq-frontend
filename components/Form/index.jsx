import React from 'react'
import { Button, Form as Formulario, Container} from 'react-bootstrap'

export const Form = () => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <Container className="text-center bg-danger">
      <Formulario className="pt-4 pb-4">
        <Formulario.Group className="mb-3" controlId="formBasicEmail">
          <Formulario.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(evt) => {setEmail(evt.target.value)}}
          />
        </Formulario.Group>

        <Formulario.Group className="mb-3" controlId="formBasicPassword">
          <Formulario.Control
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(evt) => {setPassword(evt.target.value)}}
          />
        </Formulario.Group>
        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Formulario>
    </Container>
    
  )
}
