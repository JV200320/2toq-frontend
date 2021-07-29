
import { Row, Button, Col, Card } from 'react-bootstrap'
import CancelOrderModal from '../../CancelOrderModal'
import { useState } from 'react';

const Order = (props) => {
  
  const [ modalShow, setModalShow ] = useState(false);


  return (

    <>
      <Row>
        <Col>
          <Card className = 'mb-2'>
            <span>id do pedido: {props.id}</span> 
            <span>Cliente: {props.customer_name}</span>
            <span>Produto: {props.product}</span> 
            <span>valor R$ {props.price}</span> 
          </Card>
        </Col>
        <Col className=' me-0'>
          <Button variant="danger" onClick={() => setModalShow(true)} >Cancelar</Button>
        </Col>
        <CancelOrderModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          onShow={() => setModalShow(true)}      
        />
      </Row>



    </>
  )
}

export default Order