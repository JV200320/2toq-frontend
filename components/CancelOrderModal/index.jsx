import {Modal, Card, Button,Row, Col} from 'react-bootstrap'
import OrdersService from '../../services/order'


const CancelOrderModal = (props) => {

  const handleDelete = async (id) => {
    await OrdersService.deleteOrder(id);
  }

  return(
    <Modal
      show={props.show}
      size='sm'
      keyboard={false}
      onHide={() => props.onHide()}
      className="text-center"
    >
      <Modal.Header className="d-flex justify-content-center">
        <h4>Cancelar Pedido</h4>
      </Modal.Header>
      <Modal.Body>
          <h5>Tem certeza que deseja cancelar o pedido?</h5>
          <Row className="pt-3">
            <Col><Button variant='danger' onClick={() => {handleDelete(props.id);props.onHide()}}>Sim</Button></Col> 
            <Col><Button onClick={() => {props.onHide()}}>Não</Button></Col> 
          </Row>
      </Modal.Body>
    </Modal>
  )
}

export default CancelOrderModal