import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Order from './Order';
import styles from '../../styles/Order.module.css'

const KitchenOrders = () => {
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
  
    },
    {
      id: 6,
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
      <Container className={`overflow-scroll fixed-bottom ${styles.fullvh}`}>
            <Row className = "mt-4">
              {renderContent()}
            </Row>
      </Container>
    </>
  )

  // return (
  //   <Container className="d-flex flex-column align-items-center overflow-auto" style={{marginTop: 70, height:550}}>
  //     {renderContent()}
  //   </Container>
  // )
}
export default KitchenOrders;