import '../styles/globals.css'
import ShoppingListProvider from '../shoppingListProvider'

function MyApp({ Component, pageProps }) {
  return (
    <ShoppingListProvider>
      <Component {...pageProps} />
    </ShoppingListProvider>
  )
}

export default MyApp
