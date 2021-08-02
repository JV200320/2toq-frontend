import { Button, Form as Formulario, Container} from 'react-bootstrap'
import {useRouter} from 'next/router'
import UserService from '../../services/user'
import {useState, useEffect, useRef} from 'react'
import { toast } from 'react-toastify';


// redux 
import { useDispatch} from 'react-redux'
import {setLoggedUser} from '../../store/modules/auth/reducer'
import Cookies from 'js-cookie';

export const Form = () => {

  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)

  //redux
  const dispatch = useDispatch()

  useEffect(()=> {
    const loggedUser = JSON.parse(Cookies.get("@api-data"))['uid']
    if(loggedUser){
      setEmail(loggedUser);
      if (passwordRef && passwordRef.current){
        passwordRef.current.focus();
      }
    }
  }, [])




  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await UserService.signIn({ email, password })
      const {  email: userEmail, name} = response.data.data;

      const user  = {
        name,
        email: userEmail
      }

      dispatch(setLoggedUser(user))
      toast.info('Login realizado')

      router.push('/kitchen')
    } catch (error) {
      console.log(error)
      toast.error("Erro ao logar")
    }
  }

  return (
    <Container className="text-center bg-light rounded pt-5 pb-5">
      <Formulario className="d-flex flex-column align-items-center" onSubmit={(e) => handleSubmit(e)}>
        <Formulario.Group className="mb-3 w-75" controlId="formBasicEmail">
          <Formulario.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(evt) => {setEmail(evt.target.value)}}
          />
        </Formulario.Group>

        <Formulario.Group className="mb-3 w-75" controlId="formBasicPassword">
          <Formulario.Control
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            required
            ref = {passwordRef}
          />
        </Formulario.Group>
        <Button variant="danger" type="submit" className="w-25">
          Entrar
        </Button>
        <a href="#" className="mt-3 text-danger">Esqueci minha senha</a>
      </Formulario>
    </Container>
    
  )
}
