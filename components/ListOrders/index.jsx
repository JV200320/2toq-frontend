import {Container, Row, Col} from 'react-bootstrap'
import Order from './Order'
import CategoriesService from '../../services/category'
import ProductsService from '../../services/product'
import OrdersService from '../../services/order'
import styles from '../../styles/Order.module.css'
import { useEffect } from 'react'
import withAuthWaiter from '../withAuth/waiter'
import {useDispatch} from 'react-redux'
import {setCategories} from '../../store/modules/categories/reducer'
import {setProducts} from '../../store/modules/products/reducer'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const ListOrders = () => {

  const loggedUser = useSelector(state => state.auth.loggedUser)

  const [orders, setOrders] = useState([])

  const getCategories = async () => {
    const res = await CategoriesService.index()
    dispatch(setCategories(res.data['categories']))
  }
  const getProducts = async () => {
    const res = await ProductsService.index()
    dispatch(setProducts(res.data['products']))
  }
  const getOrders = async () => {
    const res = await OrdersService.indexWaiter(loggedUser['id'])
    console.log(res.data)
    setOrders(res.data['orders'])
  }

  const dispatch = useDispatch()

  useEffect(async () => {
    getCategories()
    getProducts()
    getOrders()
    setInterval(() => {
      getCategories()
      getProducts()
      getOrders()
    }, 2000);
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

export default withAuthWaiter(ListOrders)