import '../styles/globals.css'
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>2Toq</title>
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
