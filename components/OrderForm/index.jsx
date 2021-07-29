import { Button, Col, Row, Form as Formulario, Container } from 'react-bootstrap'
import ModalAddProducts from '../ModalAddProducts'
import { useState } from 'react';
const OrderForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [ modalShow, setModalShow ] = useState(false);


  return (


    <Container className="text-center bg-danger">
      <h4>Cadastrar Novo Pedido</h4>
      <Formulario className="pt-4 pb-4 d-flex flex-column align-items-center">
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
                <h4>Adicionar Produto</h4>
              </Col>
              <Col>
                <Button onClick={() => setModalShow(true)}>Novo</Button>
              </Col>
            </Row>

            <Row className='mt-4'>
              <Col>
                Produto
              </Col>
              <Col>
                Quantidade
              </Col>

              <Col className>
                <Button variant="dark">Remover</Button>
              </Col>

              <Col className>
                <Button variant="success">Alterar</Button>
              </Col>
            </Row>
          </Row>

        </Formulario.Group>

        <ModalAddProducts
        
        show={modalShow}
        onHide={() => setModalShow(false)}
        onShow={() => setModalShow(true)}  
        />

        <Button 
          variant="primary" type="submit" className="w-25 mt-4">
          Confirmar Pedido
        </Button>

      </Formulario>
    </Container>

  )
}

export default OrderForm