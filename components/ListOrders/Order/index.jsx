
import { Row, Button, Col, Card } from 'react-bootstrap'
import CancelOrderModal from '../../CancelOrderModal'
import { useState } from 'react';

const Order = (props) => {

  const [modalShow, setModalShow] = useState(false);

  return (

    <>
      <Row>
        <Col className="col-8 offset-sm-2 ">
          <Card className='mb-2'>
            <span>id do pedido: {props.id}</span>
            <span>Cliente: {props.customer_name}</span>
            <span>Produto: {props.product}</span>
            <span>valor R$ {props.total_value}</span>
          </Card>
        </Col>
        <Col className='col-2'>
          <Button variant="danger" onClick={() => setModalShow(true)} >Cancelar</Button>
        </Col>
        <CancelOrderModal
          id={props.id}
          show={modalShow}
          mutate = {props.mutate}
          onHide={() => setModalShow(false)}
        />
      </Row>
    </>
  )
}

export default Order