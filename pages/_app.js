import Head from 'next/head'
import React, { Fragment } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  return (
    <Fragment>

      <Head>
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'></link>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;700&family=Mrs+Saint+Delafield&family=Poppins:wght@200;300;400;500;600;700;800;900&family=Redressed&display=swap" rel="stylesheet"></link>

      </Head>

      
      <section className="layout">
        
        <img className="bg" src='../../images/rawpixel-id-3114099.png' alt="keyboard background"></img>

        <Header/>
        <Component {...pageProps}/>
        <Footer/>
        
      </section>
    </Fragment>
  )
}

export default MyApp
