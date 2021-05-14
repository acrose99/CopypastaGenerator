import '../styles/globals.css'

import { AppProps } from 'next/app'
import { AppWrapper } from '../context/AppContext';

function App({ Component, pageProps }: AppProps) {
  return <AppWrapper>
    <Component {...pageProps} />
  </AppWrapper>
}

export default App
