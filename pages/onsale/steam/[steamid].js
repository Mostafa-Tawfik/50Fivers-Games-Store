import React from 'react'
import styles from '../../../styles/Game.module.scss'
import Head from 'next/head'
import Markdown from 'markdown-to-jsx';

function steam({game}) {
  console.log(game)
  return (
    <div className={styles['game-layout']}>
      <Head>
        <title>{game.name}</title>
      </Head>

      {game.background_raw && <img src={game.background_raw} alt={game.name} className={styles['game-bg']}></img>}

      <h1>{game.name}</h1>

      {game.header_image && <img src={game.header_image} alt={game.name} className={styles['game-img-igdb']}></img>}

      {game.movies && <video width="420" height="315" frameBorder="0" controls
        src={game.movies[0].webm[480]}
        type="video/webm">
      </video>}

      {/* use Markdown laibary to compile md to html */}
      {game.about_the_game && <div className={styles['game-desc']}>{<Markdown>{game.about_the_game}</Markdown>}</div>}

      <div className={styles['game-cln']}>

        <div className={styles['game-left-cln']}>

          {game.release_date && <div>Release Date: <p>{game.release_date.date}</p></div>}

          {game.genres && <div>Genres: {game.genres.map(d=> <p key={d.id}>{d.description}</p> )}</div>}

          {game.metacritic && <div className={styles['game-metacritic']}>
            Metacritic: 
            <a href={game.metacritic.url} target={"_blank"} rel={"noreferrer"}>
              {game.metacritic.score}
            </a></div>}

        </div>

        <div className={styles['game-right-cln']}>
          <div className={styles['game-external-links']}>
            {game.website && game.header_image &&
            <div className={styles['game-Website']}>
              <div>Website</div>
              <a href={game.website} target={"_blank"} rel={"noreferrer"}><img src={game.header_image} alt={game.name}></img></a>
            </div>}

            <div className={styles['game-Website']}>
              <div>Steam</div>
              <a href={`https://store.steampowered.com/app/${game.steam_appid}`} target={"_blank"} rel={"noreferrer"}><img src={'https://api.iconify.design/flat-color-icons/steam.svg'} alt={game.name}></img></a>
            </div>

          </div>
        </div>

      </div>
      
      <div className={styles['game-btm-raw']}>
      {game.developers && <div>Developed by: {game.developers.map((c,i)=> <p key={i}>{c}</p>)}</div>}

        {game.publishers && <div>Publishers: {game.publishers.map((s,i)=> <p key={i}> {s} </p>)}</div>}

      </div>

    </div>
  )
}

export default steam

// set the data for each id
export async function getServerSideProps(context) {

  const id = context.params.steamid

  const res = await fetch(`https://store.steampowered.com/api/appdetails?appids=${id}`)

  const gameData = await res.json()

  return {
    props: {game: gameData[id].data},
  }
}