import { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>

      <img className="bg" src='../../images/rawpixel-id-2578750.png' alt="keyboard background"></img>
      
      <section className="layout">

        <Header/>
        <Component {...pageProps}/>
        <Footer/>
        
      </section>
    </Fragment>
  )
}

export default MyApp
