import { Modal, Button, Row, Form } from 'react-bootstrap'
import React from 'react'

const ModalAddProducts = ({ show, onHide }) => {

  const [productId, setProductId] = React.useState(null)
  const [quantity, setQuantity] = React.useState(null)
  const [observation, setObservation] = React.useState('')

  const products = [
      {
        id:1,
        name:'Lasanha',
        price: 12.50
      },
      {
        id:2,
        name:'Arroz',
        price: 12.50
      },
      {
        id:3,
        name:'Bife',
        price: 12.50
      },
      {
        id:4,
        name:'Cebola',
        price: 12.50
      },
      {
        id:5,
        name:'Pizza',
        price: 12.50
      },
    ]

  return (
    <>
      <Modal
        show={show}
        size='sm'
        keyboard={false}
        onHide={() => onHide()}
        className='text-center'
      >
        <Modal.Header className="d-flex justify-content-center">
          <h4>Adicionar produto</h4>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          <Row>
            <span>Produto</span>
          </Row>
          <Row>
            <select className="form-control" id="exampleFormControlSelect1" onClick={(evt) => setProductId(evt.target.value)}>
              {products.map((product, i)=>(<option key={i} value={product['id']}>{product['name']}</option>))}
            </select>
          </Row>
          <Row className="mt-2">
            <span>Quantidade</span>
          </Row>
          <Row>
            <Form.Control type="number" min={0} size='sm' onBlur={(evt) => setQuantity(evt.target.value)}/>
          </Row>
          <Row className="mt-2">
            <span>Observação</span>
          </Row>
          <Row>
            <Form.Control type="textarea" size='md' value={observation} onChange={(evt) => setObservation(evt.target.value)}/>
          </Row>
          <Button variant="success" className="mt-3">Adicionar</Button>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default ModalAddProducts