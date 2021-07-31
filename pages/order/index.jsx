import ListOrders from "../../components/ListOrders"
import {Header} from '../../components/Header'

const Order = () => {
  return (
    <>
      <Header path={['Sair', '/login']} new={true}/>
      <ListOrders/>
    </>
  )
}

export default Order