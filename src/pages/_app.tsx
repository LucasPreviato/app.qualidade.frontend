import type { AppProps } from 'next/app'
import { Sidebar } from '../components/Sidebar'
import { ModalProvider } from '../contexts/ModalContext'
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react'
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
          <Grid gridTemplateColumns={'260px 1fr'} h="100vh">
            <GridItem as="aside">
              <Sidebar />
            </GridItem>
            <GridItem as="main">
              <Component {...pageProps} />
            </GridItem>
          </Grid>
        </ModalProvider>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
