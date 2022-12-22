import type { AppProps } from 'next/app'
import { Sidebar } from '../components/Sidebar'
import { ModalProvider } from '../contexts/ModalContext'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { theme } from '../theme'
import { Provider } from 'urql'
import { client, ssrCache } from '../lib/urql'

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  return (
    <Provider value={client}>
      <ChakraProvider resetCSS theme={theme}>
        <ModalProvider>
          <Flex>
            <Sidebar />
            <Component {...pageProps} />
          </Flex>
        </ModalProvider>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
