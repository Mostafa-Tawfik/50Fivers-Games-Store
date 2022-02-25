import React from 'react';
import styles from '../styles/components/_aside.module.scss'

export default function Aside() {
  return <div>
    <aside className={styles['aside']}>
      <div className={styles["top"]}>
          <h3>BROWSE CATEGORIES</h3>
          <div className={styles["item"]}><a href="#0">Best Selling</a></div>
          <div className={styles["item"]}><a href="#0">Upcoming</a></div>
          <div className={styles["item"]}><a href="#0">New Releases</a></div>
          <div className={styles["item"]}><a href="#0">On Sale</a></div>
      </div>
      <div className={styles["mid"]}>
          <h3>Genre</h3>
          <div className={styles["item"]}><a href="#0">Action</a></div>
          <div className={styles["item"]}><a href="#0">RPG</a></div>
          <div className={styles["item"]}><a href="#0">Strategy</a></div>
          <div className={styles["item"]}><a href="#0">Simulation</a></div>
          <div className={styles["item"]}><a href="#0">Racing</a></div>
          <div className={styles["item"]}><a href="#0">Sports</a></div>
          <div className={styles["item"]}><a href="#0">Shooter</a></div>
      </div>
    </aside>
  </div>;
}
