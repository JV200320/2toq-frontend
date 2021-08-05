import { Container, Row, Col } from 'react-bootstrap'
import Order from './Order'
import styles from '../../styles/Order.module.css'
import withAuthWaiter from '../withAuth/waiter'
import { useDispatch } from 'react-redux'
import { setCategories } from '../../store/modules/categories/reducer'
import { setProducts } from '../../store/modules/products/reducer'
import { useSelector } from 'react-redux'
import useSWR from 'swr'

import OrdersService from '../../services/order'

const ListOrders = () => {

  const dispatch = useDispatch()

  const { id } = useSelector(state => state.auth.loggedUser)
  // const { data, error} = useSWR(`/api/orders?user_id=${id}`, OrdersService.index)


  // if(!data){
  //   return null
  // }

  // console.log(data)

  const { data: categoriesData, error: categoriesError } = useSWR('/api/categories')
  const { data: productsData, error: productsError } = useSWR('/api/products')
  const { data: ordersData, error: ordersError, mutate } = useSWR(`/api/orders?user_id=${id}`)

  function renderOrders() {
    if (ordersData['data']) {
      return ordersData['data']['orders'].map((order, i) => <Order {...order} key={i} mutate={mutate} />)
    }
    return null
  }



  if (categoriesData) {
    dispatch(setCategories(categoriesData['data']['categories']))
  }
  if (productsData) {
    dispatch(setProducts(productsData['data']['products']))
  }

  return (
    <>
      <Container className={`overflow-scroll fixed-bottom ${styles.fullvh}`}>
        <Row className="mt-4">
          {ordersData
            ?
            renderOrders()
            :
            <Col className="text-light">Carregando...</Col>
          }
        </Row>
      </Container>
    </>
  )

}

export default withAuthWaiter(ListOrders)