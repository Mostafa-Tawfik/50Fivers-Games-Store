import React, { Fragment } from 'react'
import styles from '../styles/components/_mobileNav.module.scss'
import Link from 'next/link'

function MobileNav() {

  // elements of trends menu
  const trends = ['Upcoming', 'New Releases', 'On Sale']

  // elements of categories menu
  const catMenu = [
    { id: 4, name:'Action' },
    { id: 5, name:'RPG' },
    { id: 10, name:'Strategy' },
    { id: 14, name:'Simulation' },
    { id: 1, name:'Racing' },
    { id: 15, name:'Sports' },
    { id: 2, name:'Shooter' },
  ]
  
  // state to controll the whole menu
  const [isOpen, SetIsOpen] = React.useState(false)

  // state to controll cat in menu
  const [trendsIsOpen, SetTrendsIsOpen] = React.useState(false)

  // state to controll cat in menu
  const [categoriesIsOpen, SetCategoriesIsOpen] = React.useState(false)

  // handle the main menu
  function openMenu() {
    SetIsOpen(prev => !prev)
  }

  // handle the cat menu
  function openTrendsMenu() {
    SetTrendsIsOpen(prev => !prev)
  }

  // handle the cat menu
  function openCategoriesMenu() {
    SetCategoriesIsOpen(prev => !prev)
  }
  
  return (
  <div className={styles["mobile-container"]}>

    <div className={styles["topnav"]}>
      <Link href='/search'><img src='https://api.iconify.design/wpf/search.svg?color=white' className={styles['search-btn']}></img></Link>

      <div id="myLinks" style={isOpen ? { display: 'block' } : { display: 'none' }}>
        <Link href="/"><h3 onClick={openMenu}>HOME</h3></Link>
        <Link href="/news"><h3 onClick={openMenu}>News</h3></Link>

        <h3 onClick={openTrendsMenu}>
          Trends &#x25BC;
        </h3>

        <div id="categories" style={trendsIsOpen ? { display: 'block' } : { display: 'none' }}>

          {trends.map((c, i) => {
            return (
              <li key={i} className={styles['topnav_sublist']}>
                <Link href={'/'+c.toLowerCase().replace(/\s+/g, '')}><h3 onClick={()=> {openMenu(),openTrendsMenu()}} >{c}</h3></Link>
              </li>
            )
          })}

        </div>

        <h3 onClick={openCategoriesMenu}>
          Categories &#x25BC;
        </h3>

        <div id="categories" style={categoriesIsOpen ? { display: 'block' } : { display: 'none' }}>

          {catMenu.map((c, i) => {
            return (
              <li key={i} className={styles['topnav_sublist']}>
                <Link href={'/genres/'+c.id}><h3 onClick={()=> {openMenu(),openCategoriesMenu()}} >{c.name}</h3></Link>
              </li>
            )
          })}

        </div>
      </div>

      <a href="#" className={styles["icon"]} onClick={openMenu}>
        <img src='https://api.iconify.design/charm/menu-hamburger.svg?color=white' className={styles["ham"]}></img>
      </a>
    </div>

  </div>
  )
}

export default MobileNav