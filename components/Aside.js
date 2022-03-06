import Link from 'next/link';
import React from 'react';
import styles from '../styles/components/_aside.module.scss'


export default function Aside() {
  return <aside className={styles['aside']}>
    
      <div className={styles["top"]}>
          <h3>BROWSE CATEGORIES</h3>
          <div className={styles["item"]}><a href="#0">Best Selling</a></div>
          <div className={styles["item"]}><a href="#0">Upcoming</a></div>
          <div className={styles["item"]}><a href="#0">New Releases</a></div>
          <Link href="/onsale" className={styles["item"]}>On Sale</Link>
      </div>
      <div className={styles["mid"]}>
          <h3>Genre</h3>
          <Link href="/action" className={styles["item"]}>Action</Link>
          <Link href="/rpg" className={styles["item"]}>RPG</Link>
          <Link href="/strategy" className={styles["item"]}>Strategy</Link>
          <Link href="/simulation" className={styles["item"]}>Simulation</Link>
          <Link href="/racing" className={styles["item"]}>Racing</Link>
          <Link href="/sports" className={styles["item"]}>Sports</Link>
          <Link href="/shooter" className={styles["item"]}>Shooter</Link>
      </div>
    </aside>;
}
