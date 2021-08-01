import '../styles/globals.css'
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

// redux config
 import {Provider} from 'react-redux'
 import {PersistGate} from 'redux-persist/integration/react'
 import {store, persistor} from '../store'


function MyApp({ Component, pageProps }) {
  return (
  <>

  <Head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>2Toq</title>
  </Head>
  <Provider store = {store}>
    <PersistGate loading = {null} persistor = {persistor}>
      <Component {...pageProps} />
    </PersistGate>
  </Provider>  
  </>
  )
}

export default MyApp
