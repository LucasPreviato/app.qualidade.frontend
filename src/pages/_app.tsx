import type { AppProps } from 'next/app'
import { Sidebar } from '../components/Sidebar'
import { ModalProvider } from '../contexts/ModalContext'
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/apollo'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { theme } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider resetCSS theme={theme}>
        <ModalProvider>
          <Flex>
            <Sidebar />
            <Component {...pageProps} />
          </Flex>
        </ModalProvider>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
