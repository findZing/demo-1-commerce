import '../styles/globals.css'
import React from 'react'

import { store } from '../store'
import { Provider } from 'react-redux'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />

      </Layout>
    </Provider>
  )
}

export default MyApp
