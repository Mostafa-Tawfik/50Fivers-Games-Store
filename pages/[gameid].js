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

      <div className={styles['game-cln']}>

        <div className={styles['game-left-cln']}>
          <p>Release Date: {game.released}</p>
          <p>Genres: {game.genres.map(d=>`${d.name} `)}</p>
          <p>Platforms: {game.platforms.map(d=>`${d.platform.name} `)}</p>
          {game.metacritic && <p>Metacritic: {game.metacritic}</p>}
        </div>

        <div className={styles['game-right-cln']}>
          <p>Available on: {game.stores.map(s => <div>{s.store.name}</div> )}</p>
        </div>

      </div>
      
      <div className={styles['game-btm-raw']}>
        <p>Developed by: {game.developers.map(d=>d.name)}</p>
        <p>Publishers: {game.publishers.map(s=>`${s.name} `)}</p>
        <p>Website: <a href={game.website} target={"_blank"} rel={"noreferrer"}>{game.name}</a></p>  
        {game.reddit_url && <p>Reddit: <a href={game.reddit_url} target={"_blank"} rel={"noreferrer"}>{game.name}</a></p>}
      </div>

      <p className={styles['game-desc']}>{game.description_raw}</p>

      <p className={styles['game-tags']}>{game.tags.map(t => <ul><li>{t.name}</li></ul> )}</p>

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






