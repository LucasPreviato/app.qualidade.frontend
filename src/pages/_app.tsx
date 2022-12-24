import type { AppProps } from 'next/app'
import { Sidebar } from '../components/Sidebar'
import { ModalProvider } from '../contexts/ModalContext'
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import { Provider } from 'urql'
import { client, ssrCache } from '../lib/urql'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  return (
    <Provider value={client}>
      <ChakraProvider resetCSS theme={theme}>
        <ModalProvider>
          <Box h="100vh">
            <Sidebar />
            <Box w="calc(100vw - 200px)" ml="auto">
              <Component {...pageProps} />
            </Box>
          </Box>
        </ModalProvider>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
