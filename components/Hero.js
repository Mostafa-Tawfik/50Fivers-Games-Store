import React from 'react'
import styles from '../styles/components/_hero.module.scss'
import Link from 'next/link'

function Hero(props) {

  const [mainGame, setMainGame] = React.useState(props.featDetails[0])

  function changeMainGame(g) {
    const filter = props.featDetails.filter(f => f.id === g )
    setMainGame(filter[0])
  }

  const homeHero = props.games.results.map(g => {
    const gameCover = g.background_image
    return (
      
        <div  key={g.id} className={styles["games"]}>

          <div onClick={()=> changeMainGame(g.id)}>
              <img src={gameCover} alt={g.name.substring(0,22)}></img>
          </div>
          <div className={styles["infos"]}>
              {/* limit characters to 22 */}
              <div href={'/' + g.id}>
                  <p className={styles['gameName']}>{g.name.substring(0,22)}</p>
              </div>
          </div>
        </div>
      
    )
  })
  return (
    <div className={styles['hero-container']}>

      <img src={mainGame.background_image} alt={mainGame.name} className={styles['bg-img']}></img>

      <img src={mainGame.background_image} alt={mainGame.name} className={styles['main-img']}></img>

      <div className={styles['hero-infos']}>

        <div className={styles['infos-head']}>
          <h2>{mainGame.name}</h2>
          <div className={styles['infos-head_genres']}>{mainGame.genres.map(g => <p key={g.id}>{g.name}</p>)}</div>
        </div>

        <p className={styles['hero-des']}>{mainGame.description_raw.substring(0,200)} ...</p>

        <button className={styles['hero-btn']}><Link href={'/'+mainGame.id}>More Details
        </Link></button>

      </div>

      <div className={styles['games-container']}>
        {homeHero}
      </div>
    </div>
  )
}

export default Hero