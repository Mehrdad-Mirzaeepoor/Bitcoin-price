import { wrapper } from 'store'
import '../styles/globals.css'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
