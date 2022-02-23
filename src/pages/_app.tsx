import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

import favicon from '../../public/favicon.ico'
import 'bootstrap/dist/css/bootstrap.css'

import 'frontend/styles/bootstrap.scss'

import GlobalProvider from 'frontend/components/GlobalProvider'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel='icon' href={favicon} />
    </Head>

    <GlobalProvider>
      <Script src='https://www.youtube.com/iframe_api' />

      <Component {...pageProps} />
    </GlobalProvider>
  </>
)

export default MyApp
