import Head from 'next/head'
import styles from '../styles/Action.module.scss'
import Aside from '../components/Aside'
import Main from '../components/Main'

export default function action({games}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Sports Games</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <section className={styles["layout"]}>
        <main className={styles['main']}>
          <Aside />
          <Main games={games}/>
        </main>
        
      </section>
    </div>
  )
}

// call the api to get featured games
export async function getStaticProps() {

  const apiRoot= 'https://rawg.io/api/games'

  const res = await fetch(`${apiRoot}?${process.env.rawgkey}&genres=14&metacritic=70,100&dates=2021-01-01,2022-06-01&ordering=-added&ordering=-metacritic`)

  const gameData = await res.json()

  return {
    props: {games: gameData},
  }
}