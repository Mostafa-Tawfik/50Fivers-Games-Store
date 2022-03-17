import React from 'react';
import styles from '../styles/components/_header.module.scss'
import Link from 'next/link'
import MobileNav from './MobileNav';

export default function Header() {

  const cat = ['Action', 'RPG', 'Strategy', 'Simulation', 'Racing', 'Sports', 'Shooter']

  const trends = ['Upcoming', 'New Releases', 'On Sale']


  const [isOpen, SetIsOpen] = React.useState({
    cat: false,
    trends: false
  })

  function openMenuCat() {
    SetIsOpen(prev => {
      return {
        ...prev,
        cat: !isOpen.cat,
        trends: isOpen.trends ? !isOpen.trends : isOpen.trends
      }
    })
  }
  
  function openMenuTrends() {
    SetIsOpen(prev => {
      return {
        ...prev,
        trends: !isOpen.trends,
        cat: isOpen.cat ? !isOpen.cat : isOpen.cat
      }
    })
  }

  return <div className={styles['header-showcase']}>
      
      <div className={styles['header-mobile']}>
        <header className={styles['header']}>
            <img src='../images/logo.png' className={styles["App-logo"]} alt="logo" />
            <h1><Link href="/">My Games</Link></h1>
        </header>

        <MobileNav />
      </div>

      <nav className={styles['nav']}>
          <h2><Link href="/">HOME</Link></h2>
          <h2><Link href="/news">NEWS</Link></h2>

          <div className={styles["nav-drop"]}>

            <h2 onClick={openMenuTrends}>TRENDS</h2>

            <ul className={styles["nav-drop_li"]} style={isOpen.trends ? { display: 'block' } : { display: 'none' }}>

              {trends.map((c,i) => 
              <li key={i} onClick={openMenuTrends} className={styles['nav-drop_li-item']}>
                {/* remove spaces */}
                <Link href={'/'+c.toLowerCase().replace(/\s+/g, '')}>{c}</Link>
              </li>)}
            </ul>

          </div>
          
          <div className={styles["nav-drop"]}>

            <h2 onClick={openMenuCat}>CATEGORIES</h2>

            <ul className={styles["nav-drop_li"]} style={ isOpen.cat ? { display: 'block' } : { display: 'none' }}>

              {cat.map((c,i) => 
              <li key={i} onClick={openMenuCat}>
                <Link href={'/'+c.toLowerCase()}>{c}</Link>
              </li>)}
            </ul>

          </div>

          <Link href='/search'><img src='https://api.iconify.design/wpf/search.svg?color=white' className={styles['search-btn']}></img></Link>

      </nav>

  </div>;
}
