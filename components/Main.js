import React from 'react';
import styles from '../styles/components/_main.module.scss'
import Link from 'next/link'

export default function Main(props) {

  const MainGames = props.games.results.slice(1).map(g => {
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

  const game = props.games.results[0]
  const gameCover = game.background_image

  const featGame = 
  <div className={styles['featGame']}>
    <Link href={'/' + game.id}>
        <img src={gameCover} alt={game.name.substring(0,22)}></img>
    </Link>
    <div className={styles["infos"]}>
        {/* limit characters to 22 */}
        <Link href={'/' + game.id}>
            <h2 className={styles['gameName']}>{game.name}</h2>
        </Link>
        {/* <p className={styles["tag"]}>{game.genres[0].name}</p> */}
    </div>
  </div>
    

  return <div>

      <img className="bg" src='../../images/rawpixel-id-3114099.png' alt="keyboard background"></img>

      <h1>{props.pageName}</h1>
      {featGame}
      <article className={styles['main-layout']}>
        {MainGames}
      </article>

    </div>;
}


