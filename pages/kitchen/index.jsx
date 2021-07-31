import React from 'react'
import KitchenOrders from '../../components/KitchenOrders';
import {Header} from '../../components/Header';


const Kitchen = () => {
  return (
    <>
      <Header path={['Sair', '/login']}/>
      <KitchenOrders />
    </>
  )
}
export default Kitchen;