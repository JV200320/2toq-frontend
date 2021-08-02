import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Order from './Order';
import styles from '../../styles/Order.module.css'
import withAuthKitchen from '../withAuth/kitchen'
import OrdersService from '../../services/order';
import { useSelector } from 'react-redux';

const KitchenOrders = () => {

  const user_id = useSelector(state => state.auth.loggedUser)

  const getOrders = async () => {
    const res = await OrdersService.index()
    setOrders(res.data.orders)
  }

  const [orders, setOrders] = React.useState([])

  React.useEffect(() => {
    getOrders()
  }, [])

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
}
export default withAuthKitchen(KitchenOrders);