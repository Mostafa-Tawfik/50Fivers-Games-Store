import React from 'react';
import styles from '../styles/components/_header.module.scss'

export default function Header() {
  return <div className={styles['header-showcase']}>
      <div className={styles["overlay"]}></div>
      
      <header className={styles['header']}>
          <img src='../images/logo.png' className={styles["App-logo"]} alt="logo" />
          <h1>games Store</h1>
      </header>

      <nav className={styles['nav']}>
          <h2><a href="#0">STORE</a></h2>
          <h2><a href="#0">NEWS</a></h2>
          <h2><a href="#0">FAQ</a></h2>
          <h2><a href="#0">SUPPORT</a></h2>
          <h2><a href="#0">CONTACT US</a></h2>
          <h2><a href="#0">MY ACCOUNT</a></h2>
      </nav>
  </div>;
}
