import React from 'react'
import KitchenOrders from '../../components/KitchenOrders';
import { Header } from '../../components/Header';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const Kitchen = () => {

  const user = useSelector(state => state.auth.loggedUser)
  const router = useRouter()
  try {
    if (user.profile == "kitchen") {
      return (
        <>
          <Header path={['Sair', '/login']} />
          <KitchenOrders />
        </>
      )
    } else if (user.profile == "waiter") {
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
export default Kitchen;