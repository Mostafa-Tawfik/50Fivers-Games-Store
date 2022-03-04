import React from 'react'
import styles from '../styles/Game.module.scss'
import Head from 'next/head'

// render page
function gameDetails({game}) {
  console.log(game)
  return (
    <div className={styles['game-layout']}>
      <Head>
        <title>{game.name}</title>
        <meta name="description" content={game.description_raw} />
      </Head>

      <img src={game.background_image} alt={game.name} className={styles['game-bg']}></img>

      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} className={styles['game-img']}></img>
      <p className={styles['game-desc']}>{game.description_raw}</p>
    </div>
  )
}
export default gameDetails

// set the data for each id
export async function getServerSideProps(context) {

  const apiRoot= 'https://rawg.io/api/games'
  const id = context.params.gameid

  const res = await fetch(`${apiRoot}/${id}?${process.env.rawgkey}&dates=2022-01-01,2022-04-01&ordering=-added`)

  const gameData = await res.json()

  return {
    props: {game: gameData},
  }
}






