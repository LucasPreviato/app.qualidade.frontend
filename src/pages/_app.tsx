import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Sidebar } from '../components/Sidebar'
import { ModalProvider } from '../contexts/ModalContext'
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apollo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <div className="flex">
          <Sidebar />
          <Component {...pageProps} />
        </div>
      </ModalProvider>
    </ApolloProvider>
  )
}

export default MyApp
