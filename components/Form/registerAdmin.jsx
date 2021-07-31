import React from 'react'
import { Button, Form as Formulario, Container} from 'react-bootstrap'

export const Form = () => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordConfirm, setPasswordConfirm] = React.useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserService.signUp({ email: email, password: password,
                                   password_confirmation:passwordConfirm})
      router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className="text-center bg-light rounded pt-5 pb-5">
        <h3>Administrador</h3>
      <Formulario onSubmit={() => handleSubmit()}>
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
        
        <Formulario.Group className="mb-3" controlId="formBasicPasswordConfirm">
          <Formulario.Control
            type="password"
            placeholder="Confirmar senha"
            value={passwordConfirm}
            onChange={(evt) => {setPasswordConfirm(evt.target.value)}}
          />
        </Formulario.Group>
        <Button variant="danger" type="submit">
          Cadastrar
        </Button>
      </Formulario>
    </Container>
    
  )
}