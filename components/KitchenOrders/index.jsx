import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Order from './Order';
import styles from '../../styles/Order.module.css'
import withAuthKitchen from '../withAuth/kitchen'
import OrdersService from '../../services/order';
import useSWR from 'swr';
import { Col } from 'react-bootstrap';

const KitchenOrders = () => {

  const { data, error } = useSWR('/api/orders')



  const renderContent = () => {
    if (!data) {
      return <Col className="text-light">Carregando...</Col>
    } else {
      return data['data']['orders'].map((order, i) => <Order {...order} key={i} />)
    }
  }

  return (
    <>
      <Container className={`overflow-scroll fixed-bottom ${styles.fullvh}`}>
        <Row className="mt-4">
          {renderContent()}
        </Row>
      </Container>
    </>
  )
}
export default withAuthKitchen(KitchenOrders);