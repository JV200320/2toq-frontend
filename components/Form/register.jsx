import React from 'react'
import { Button, Form as Formulario, Container} from 'react-bootstrap'

export const Form = () => {

  const [establishment, setEstablishment] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [cnpj, setCNPJ] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordConfirm, setPasswordConfirm] = React.useState('')

  return (
    <Container className="text-center bg-danger">
      <Formulario className="pt-4 pb-4">
        
        <Formulario.Group className="mb-3" controlId="formBasicEstablishment">
          <Formulario.Control
            type="text"
            placeholder="Estabelecimento"
            value={establishment}
            onChange={(evt) => {setEstablishment(evt.target.value)}}
          />
        </Formulario.Group>
        
        <Formulario.Group className="mb-3" controlId="formBasicEmail">
          <Formulario.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(evt) => {setEmail(evt.target.value)}}
          />
        </Formulario.Group>
        
        <Formulario.Group className="mb-3" controlId="formBasicCNPJ">
          <Formulario.Control
            type="number"
            placeholder="CNPJ"
            value={cnpj}
            onChange={(evt) => {setCNPJ(evt.target.value)}}
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
        
        <Formulario.Group className="mb-3" controlId="formBasicPasswordConfirm">
          <Formulario.Control
            type="password"
            placeholder="Confirmar senha"
            value={passwordConfirm}
            onChange={(evt) => {setPasswordConfirm(evt.target.value)}}
          />
        </Formulario.Group>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Formulario>
    </Container>
    
  )
}