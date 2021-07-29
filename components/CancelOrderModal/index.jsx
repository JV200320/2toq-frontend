import {Modal, Card, Button,Row, Col} from 'react-bootstrap'


const CancelOrderModal = (props) => {
  return(

    <>
    <Modal
      show={props.show}
      size='sm'
      // aria-labelledby='contained-modal-title-vcenter'
      // centered
      keyboard={false}
      onHide={() => props.onHide()}
    >
      <Modal.Header>
        <h4 className = 'text-center'>Cancelar Pedido</h4>
      </Modal.Header>
      <Modal.Body>
      <Card>
          <h5 className = 'text-center'>Tem certeza que deseja cancelar o pedido</h5>
          <Row>
            <Col><Button   variant = 'danger'>Sim</Button></Col> 
            <Col><Button className = 'me-0'>Nao</Button></Col> 

          </Row>
      </Card>
      </Modal.Body>
    </Modal>
    
    </>
  )
}

export default CancelOrderModal