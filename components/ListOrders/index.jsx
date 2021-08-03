import { Container, Row, Col } from 'react-bootstrap'
import Order from './Order'
import styles from '../../styles/Order.module.css'
import withAuthWaiter from '../withAuth/waiter'
import { useDispatch } from 'react-redux'
import { setCategories } from '../../store/modules/categories/reducer'
import { setProducts } from '../../store/modules/products/reducer'
import { useSelector } from 'react-redux'
import useSWR from 'swr'

const ListOrders = () => {

  const dispatch = useDispatch()

  const { id } = useSelector(state => state.auth.loggedUser)

  const { data: categoriesData, error: categoriesError } = useSWR('/api/categories')
  const { data: productsData, error: productsError } = useSWR('/api/products')
  const { data: ordersData, error: ordersError } = useSWR(`/api/orders?user_id=${id}`)

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
            ordersData['data']['orders'].map((order, i) => <Order {...order} key={i} />)
            :
            <Col className="text-light">Carregando...</Col>
          }
        </Row>
      </Container>
    </>
  )

}

export default withAuthWaiter(ListOrders)