import React from 'react'
import { Button, Form as Formulario, Container, InputGroup, Row, Col } from 'react-bootstrap'
import UserService from '../../services/user'
import { useRouter } from 'next/dist/client/router'

export const Form = () => {

  const router = useRouter()

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordConfirm, setPasswordConfirm] = React.useState('')
  const [type, setType] = React.useState(null)


  React.useEffect(() => {
    console.log(type)
  }, [type])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserService.signUp({
        email: email, password: password,
        password_confirmation: passwordConfirm,
        name: name, profile: type
      })
      toast.success("Conta criada.")
      router.push('/login')
    } catch (error) {
      toast.error("Erro ao criar conta.")
      console.log(error)
    }
  }

  return (
    <Container className="text-center bg-light rounded pt-5 pb-5">
      <h3>Funcionário</h3>
      <Formulario className="pt-4 pb-4" onSubmit={(e) => handleSubmit(e)}>

        <Formulario.Group className="mb-3" controlId="formBasicName">
          <Formulario.Control
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(evt) => { setName(evt.target.value) }}
          />
        </Formulario.Group>

        <Formulario.Group className="mb-3" controlId="formBasicEmail">
          <Formulario.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(evt) => { setEmail(evt.target.value) }}
          />
        </Formulario.Group>

        <Formulario.Group className="mb-3" controlId="formBasicPassword">
          <Formulario.Control
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(evt) => { setPassword(evt.target.value) }}
          />
        </Formulario.Group>

        <Formulario.Group className="mb-3" controlId="formBasicPasswordConfirm">
          <Formulario.Control
            type="password"
            placeholder="Confirmar senha"
            value={passwordConfirm}
            onChange={(evt) => { setPasswordConfirm(evt.target.value) }}
          />
        </Formulario.Group>
        <Row className="mb-3">
          <Col className="col-4 col-sm-2 offset-sm-4 offset-2">
            <Formulario.Check
              type="radio"
              id={'default-radio'}
              label={'Garçom'}
              name="type"
              onClick={() => setType("waiter")}
            />
          </Col>
          <Col className="col-2">
            <Formulario.Check
              type="radio"
              label={'Cozinheiro'}
              id={'default-radio'}
              name="type"
              onClick={() => setType("kitchen")}
            />
          </Col>

        </Row>


        <Button variant="danger" type="submit">
          Cadastrar
        </Button>
      </Formulario>
    </Container>

  )
}