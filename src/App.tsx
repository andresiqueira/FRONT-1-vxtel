import 'styles/global.scss'

import { Home } from 'pages/Home'
import { Header } from 'components/Header'
import Footer from 'components/Footer'

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}
