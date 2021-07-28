import React from 'react'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import {Form} from '../../components/Form/register'

const SignUpPage = () => {
  return (
    <>
    <Header path={['Entrar', '/login']}/>
    <Form/>
    <Footer/>
    </>
  )
}
export default SignUpPage;