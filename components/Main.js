import React from 'react';
import styles from '../styles/components/_main.module.scss'
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
            </div>
        </div>
      
    )
  })

  return <div>

      <img className="bg" src='../../images/rawpixel-id-3114099.png' alt="keyboard background"></img>

      <h1>{props.pageName}</h1>
      <article className={styles['main-layout']}>
        {MainGames}
      </article>

    </div>;
}


