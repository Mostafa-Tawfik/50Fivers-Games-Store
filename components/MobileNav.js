import React from 'react'
import styles from '../styles/components/_mobileNav.module.scss'
import Link from 'next/link'

function MobileNav() {
  
  const [isOpen, SetIsOpen] = React.useState(false)

  function openMenu() {
    SetIsOpen(prev => !prev)
  }
  
  return (
  <div className={styles["mobile-container"]}>

    <div className={styles["topnav"]}>  
      <div id="myLinks" style={isOpen ? { display: 'block' } : { display: 'none' }}>
        <Link href="/"><h3 onClick={openMenu}>HOME</h3></Link>
        <Link href="/news"><h3 onClick={openMenu}>News</h3></Link>
        <Link href="/onsale"><h3 onClick={openMenu}>On Sale!</h3></Link>
        <Link href="/action"><h3 onClick={openMenu}>Action</h3></Link>
        <Link href="/rpg"><h3 onClick={openMenu}>RPG</h3></Link>
        <Link href="/strategy"><h3 onClick={openMenu}>Strategy</h3></Link>
        <Link href="/simulation"><h3 onClick={openMenu}>Simulation</h3></Link>
        <Link href="/racing"><h3 onClick={openMenu}>Racing</h3></Link>
        <Link href="/sports"><h3 onClick={openMenu}>Sports</h3></Link>
        <Link href="/shooter"><h3 onClick={openMenu}>Shooter</h3></Link>
      </div>
      <a href="#" className={styles["icon"]} onClick={openMenu}>
        <img src='https://api.iconify.design/charm/menu-hamburger.svg?color=white' className={styles["ham"]}></img>
      </a>
    </div>

  </div>
  )
}

export default MobileNav