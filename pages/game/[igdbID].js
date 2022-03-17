import React from 'react'
import styles from '../../styles/Game.module.scss'
import Head from 'next/head'
import { server } from '../../config/index'

function gameDetails({game}) {

  console.log(game)

  const youtube = `https://www.youtube.com/embed/${game.videos[0].video_id}`

  return (
    <div className={styles['game-layout']}>
      <Head>
        <title>{game.name}</title>
      </Head>

      {game.cover.url && <img src={game.cover.url.replace('thumb', 'cover_big')} alt={game.name} className={styles['game-bg']}></img>}

      <h1>{game.name}</h1>

      <img src={game.cover.url.replace('thumb', 'cover_big')} alt={game.name} className={styles['game-img-igdb']}></img>

      {game.videos[0] && <iframe width="420" height="315" frameBorder="0"
        src={youtube}>
      </iframe>}

      <div className={styles['game-desc']}><p>{game.summary}</p></div>

      <div className={styles['game-cln']}>

        <div className={styles['game-left-cln']}>

        {game.release_dates[0] && <div>Release Date: <p>{game.release_dates[0].human}</p></div>}

          <div>Genres: {game.genres.map(d=> <p key={d.id}>{d.name}</p> )}</div>

          <div>Platforms: {game.platforms.map(d=> <p key={d.id}> {d.abbreviation} </p> )}</div>

          {/* {game.rating && <div className={styles['game-metacritic']}>
            Rating: {game.rating}</div>} */}

        </div>

        <div className={styles['game-right-cln']}>
          {/* <div>Available on: {game.stores.map(s => <div key={s.id}><p>{s.store.name}</p></div> )}</div> */}
          <div className={styles['game-external-links']}>
            {game.websites &&
            <div className={styles['game-Website']}>
              <div>Website</div>
              <a href={game.websites[0].url} target={"_blank"} rel={"noreferrer"}><img src={game.cover.url} alt={game.name}></img></a>
            </div>
            }

          </div>
        </div>

      </div>
      
      <div className={styles['game-btm-raw']}>
        <div>Developed by: {game.involved_companies.map(c=> <p key={c.id}>{c.company.name}</p>)}</div>

        {game.publishers && <div>Publishers: {game.publishers.map(s=> <p key={s.id}> {s.name} </p>)}</div>}

      </div>

    </div>
  )
}
export default gameDetails

// set the data for each id
export async function getServerSideProps(context) {

  const apiRoot= `${server}/api/game`
  const id = context.params.igdbID

  const res = await fetch(`${apiRoot}/${id}`)

  const gameData = await res.json()

  return {
    props: {game: gameData[0]},
  }
}






