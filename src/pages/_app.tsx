import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Sidebar } from '../components/Sidebar'
import { ModalProvider } from '../contexts/ModalContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <div className="flex">
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </ModalProvider>
  )
}

export default MyApp
