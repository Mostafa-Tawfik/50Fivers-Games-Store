import React from 'react';
import styles from '../styles/components/_main.module.scss'
import useSWR from 'swr'
import Link from 'next/link'

export default function Main(props) {

  const MainGames = props.games.results.map(g => {
    const gameCover = g.background_image
    return (
      
        <div  key={g.id} className={styles["games"]}>
            <Link href={'/' + g.id}>
                <img src={gameCover} alt={g.name.substring(0,22)}></img>
            </Link>
            <div className={styles["infos"]}>
                {/* limit characters to 22 */}
                <Link href={'/' + g.id}>
                    <p className={styles['gameName']}>{g.name.substring(0,22)}</p>
                </Link>
                <p className={styles["tag"]}>{g.genres[0].name}</p>
                <p className={styles["price"]}>$60</p>
            </div>
            <div className={styles["middle"]}>
                {/* <div className={styles["text"]}><a href="#0">More Details</a></div> */}
            </div>
        </div>
      
    )
  })

  return <article className={styles['main-layout']}>
      {MainGames}
    </article>;
}


