import { Button, Col, Row, Form as Formulario, Container, ButtonGroup } from 'react-bootstrap'
import ModalAddProducts from '../ModalAddProducts'
import { useState } from 'react';

const OrderForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [modalShow, setModalShow] = useState(false);


  return (
    <Container className="text-center rounded bg-light p-3">
      <h4>Cadastrar Novo Pedido</h4>
      <Formulario className="d-flex flex-column align-items-center">
        <Formulario.Group >
          <Row>
            <Col>
              <Formulario.Control
                type="email"
                placeholder="Nome do Cliente"
                value={email}
                onChange={(evt) => { setEmail(evt.target.value) }}
              />
            </Col>
            <Col>
              <select class="form-select" aria-label="Default select example">
                <option selected>Mesa</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </Col>
          </Row>
          <Row className="mt-4">
            <Row>
              <Col>
                <Button onClick={() => setModalShow(true)} className="w-75" variant="success">Adicionar novo produto</Button>
              </Col>
            </Row>
            <Row className='mt-4 d-flex justify-content-center align-items-center'>
              <Col className="col-4">
                <ButtonGroup aria-label="Basic example">
                  <Button disabled variant="dark" className="text-light">Produto</Button>
                  <Button disabled variant="dark" className="text-light">30</Button>
                </ButtonGroup>
              </Col>
              <Col className="col-2">
                <Button variant="primary">Alterar</Button>
              </Col>
              <Col className="col-2">
                <Button variant="danger">Remover</Button>
              </Col>
            </Row>
          </Row>
        </Formulario.Group>
        <Button
          variant="primary" type="submit" className="w-25 mt-4">
          Confirmar Pedido
        </Button>
      </Formulario>
      <ModalAddProducts
        show={modalShow}
        onHide={() => setModalShow(false)}
        onShow={() => setModalShow(true)}
      />
    </Container>
  )
}

export default OrderForm