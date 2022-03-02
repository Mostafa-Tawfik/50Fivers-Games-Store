import React from 'react';
import styles from '../styles/components/_main.module.scss'
import useSWR from 'swr'
import homegames from '../pages/api/homegames'

export default function Main() {

    const fetcher = (url) => fetch(url).then(r => r.json())
    
    const { data: games, error } = useSWR('/api/homegames', fetcher)

  if (error) return <div>failed to load</div>
  if (!games) return <div>loading...</div>
  
  console.log(games)
  
  const MainGames = games.results.map(g => {
    const gameCover = g.background_image
    return (
      
        <div  key={g.id} className={styles["games"]}>
            <img src={gameCover} alt={g.name.substring(0,22)}></img>
            <div className={styles["infos"]}>
                {/* limit characters to 22 */}
                <p>{g.name.substring(0,22)}</p>
                <p className={styles["tag"]}>{g.genres[0].name}</p>
                <p className={styles["price"]}>$60</p>
            </div>
            <div className={styles["middle"]}>
                <div className={styles["text"]}><a href="#0">More Details</a></div>
            </div>
        </div>
      
    )
  })

  return <article className={styles['main-layout']}>
      {MainGames}
    </article>;
}


