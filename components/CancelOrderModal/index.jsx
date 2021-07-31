import {Modal, Card, Button,Row, Col} from 'react-bootstrap'


const CancelOrderModal = (props) => {
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
            <Col><Button variant='danger'>Sim</Button></Col> 
            <Col><Button onClick={() => {props.onHide()}}>Não</Button></Col> 
          </Row>
      </Modal.Body>
    </Modal>
  )
}

export default CancelOrderModal