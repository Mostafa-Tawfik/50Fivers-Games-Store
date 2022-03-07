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
      <Link href="/" className={styles["active"]} onClick={openMenu}><h3>HOME</h3></Link>
      <div id="myLinks" style={isOpen ? { display: 'block' } : { display: 'none' }}>
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
        <i className={styles["ham"]}>&#x25BC;</i>
      </a>
    </div>

  </div>
  )
}

export default MobileNav