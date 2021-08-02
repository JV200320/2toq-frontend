
import OrderForm from '../../components/OrderForm'

const newOrder = () => {

  const user = useSelector(state => state.auth.loggedUser)
  const router = useRouter()
  try {
    if (user.profile == "waiter") {
      return (
        <>
          <OrderForm/>
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

export default newOrder

