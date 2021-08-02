import ListOrders from "../../components/ListOrders"
import { Header } from '../../components/Header'
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const Order = () => {

  const user = useSelector(state => state.auth.loggedUser)
  const router = useRouter()
  try {
    if (user.profile == "waiter") {
      return (
        <>
          <Header path={['Sair', '/login']} new={true} />
          <ListOrders />
        </>
      )
    } else if (user.profile == "kitchen") {
      router.push('/order')
      return null
    } else if (user.profile == "admin") {
      // router.push('/order')
      return null
    }
  } catch (error) {
    router.push('/login')
    return null
  }

}

export default Order