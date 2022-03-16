import Head from 'next/head'
import Link from 'next/link'
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

      </Head>

      
      <section className="layout">
        
        <img className="bg" src='../../images/rawpixel-id-3114099.png' alt="keyboard background"></img>

        <Link href='/search'><img src='https://api.iconify.design/wpf/search.svg?color=white' className='search-btn'></img></Link>

        <Header/>
        <Component {...pageProps}/>
        <Footer/>
        
      </section>
    </Fragment>
  )
}

export default MyApp
