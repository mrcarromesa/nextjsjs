import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MenuRouteProvider } from '../contexts/MenuRouteContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <MenuRouteProvider>
        <Component {...pageProps} />
      </MenuRouteProvider>
    )
}
