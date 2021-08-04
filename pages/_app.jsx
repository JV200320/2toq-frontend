import '../styles/globals.css'
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

// Config swr
import { SWRConfig } from 'swr';
import api from '../services/api';



const fetcher = async (...args) => {
  return await api.get(...args)
}

// redux config
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../store'

// Toast
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
toast.configure()


function MyApp({ Component, pageProps }) {
  return (
    <>

      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>2Toq</title>
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SWRConfig value={{ fetcher: fetcher, refreshInterval: 2000 }}>
            <ToastContainer autoClose={1500} />
            <Component {...pageProps} />
          </SWRConfig>
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
