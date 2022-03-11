import React from 'react'
import styles from '../styles/components/_hero.module.scss'
import Link from 'next/link'

function Hero(props) {

  const [mainGame, setMainGame] = React.useState(props.featDetails[1])

  function changeMainGame(g) {
    const filter = props.featDetails.filter(f => f.id === g )
    setMainGame(filter[0])
  }

  console.log(mainGame)

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

        <h2>{mainGame.name}</h2>
        <p>{mainGame.genres[0].name}</p>
        <p className={styles['hero-des']}>{mainGame.description_raw.substring(0,200)} ...</p>

      </div>

      <div className={styles['games-container']}>

        {homeHero}

      </div>
    </div>
  )
}

export default Hero