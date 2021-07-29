
import {Container, Row , Card, Button} from 'react-bootstrap'
import Order from './Order'
import Link from 'next/link'






const ListOrders = () => {
  const orders = [
    {
      id: 1,
      customer_name: 'jefferson',
      table: 2,
      product: "lasanha",
      price: 12.50
  
    },
    {
      id: 2,
      customer_name: 'Renan',
      table: 2,
      product: "Macarronada",
      price: 12.50
  
    },
    {
      id: 3,
      customer_name: 'Joao',
      table: 2,
      product: "Humburguer",
      price: 12.50
  
    }, 
    {
      id: 4,
      customer_name: 'Nicolas',
      table: 2,
      product: "batata frita",
      price: 12.50
  
    },
    {
      id: 5,
      customer_name: 'Rodrigo',
      table: 2,
      product: "lasanha",
      price: 12.50
  
    }
  
  ]

  const renderContent = ()=>{
    if (orders.lenght == 0 ){
      return <Col>Nunhum pedido realizado</Col>
    }else{
      return orders.map((order, i)=> <Order {...order} key = {i}/> )
    }
  }
  


  return (
    <>
    <Container className = "mt-4">
      <Link href = '/order/new'>
          <Button>Novo Pedido</Button>
      
      </Link>
      <Row className = "mt-4">
        {renderContent()}
      </Row>
    </Container> 
    </>
  )
}

export default ListOrders