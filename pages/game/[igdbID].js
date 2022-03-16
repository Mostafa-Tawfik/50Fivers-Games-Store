import React from 'react'
import styles from '../../styles/Game.module.scss'
import Head from 'next/head'
import { useRouter } from 'next/router'

function gameDetails() {

  const router = useRouter()

  const [game, setGame] = React.useState([])

  React.useEffect(()=> {
    fetch(`/api/game/${router.query.igdbID}`).then(r => r.json(r.data)).then(data => setGame(data[0]))
  },[router])

  console.log(game)

  return (
    <div className={styles['game-layout']}>
      <Head>
        <title>{game.name}</title>
      </Head>

      {/* {game.cover.url && <img src={game.cover.url.replace('thumb', 'cover_big')} alt={game.name} className={styles['game-bg']}></img>} */}

      <h1>{game.name}</h1>

      <img src={game.background_image} alt={game.name} className={styles['game-img']}></img>

      <div className={styles['game-desc']}><p>{game.description_raw}</p></div>

      <div className={styles['game-cln']}>

        <div className={styles['game-left-cln']}>

          <div>Release Date: <p>{game.released}</p></div>

          {/* <div>Genres: {game.genres.map(d=> <p key={d.id}>{d.name}</p> )}</div> */}

          {/* <div>Platforms: {game.platforms.map(d=> <p  key={d.platform.id}> {d.platform.name} </p> )}</div> */}

          {game.metacritic && <div className={styles['game-metacritic']}>
            Metacritic: 
            <a href={game.metacritic_url} target={"_blank"} rel={"noreferrer"}>
              {game.metacritic}
            </a></div>}

        </div>

        <div className={styles['game-right-cln']}>
          {/* <div>Available on: {game.stores.map(s => <div key={s.id}><p>{s.store.name}</p></div> )}</div> */}
          <div className={styles['game-external-links']}>
            {game.website &&
            <div className={styles['game-Website']}>
              <div>Website</div>
              <a href={game.website} target={"_blank"} rel={"noreferrer"}><img src={game.background_image} alt={game.name}></img></a>
            </div>
            }

            {game.reddit_url && 
            <div>
              <div>Reddit</div>
              <a href={game.reddit_url} target={"_blank"} rel={"noreferrer"}><img src='https://api.iconify.design/logos/reddit-icon.svg'></img></a>
              
            </div>
            }
          </div>
        </div>

      </div>
      
      <div className={styles['game-btm-raw']}>
        {/* <div>Developed by: {game.developers.map(d=> <p key={d.id}> {d.name} </p>)}</div> */}

        {game.publishers && <div>Publishers: {game.publishers.map(s=> <p key={s.id}> {s.name} </p>)}</div>}

      </div>

      {/* <div className={styles['game-tags']}>{game.tags.map(t => <li key={t.id}>{t.name}</li> )}</div> */}

    </div>
  )
}
export default gameDetails

// set the data for each id
// export async function getServerSideProps(context) {

//   const apiRoot= 'http://localhost:3000/api/game'
//   const id = context.params.igdbID

//   const res = await fetch(`${apiRoot}/${id}`)

//   const gameData = await res.json()

//   return {
//     props: {game: gameData},
//   }
// }






