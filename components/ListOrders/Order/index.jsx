
import { Row, Button, Col, Card } from 'react-bootstrap'



const Order = (props) => {
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
          <Button variant="danger">Cancelar</Button>
        </Col>
      </Row>



    </>
  )
}

export default Order