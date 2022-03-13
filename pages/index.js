import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import CatShowcase from '../components/CatShowcase'
import Hero from '../components/Hero'

export default function Home({games, topRel, upcoming, featDetails}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>My Games</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <section className={styles["layout"]}>
        <main className={styles['main']}>
          <Hero games={games} featDetails={featDetails}/>
        </main>
      </section>

      <article className={styles['cat-container']}>
        <h2>TOP NEW RELEASES</h2>
        <CatShowcase topRel={topRel}/>
      </article>

      <article className={styles['cat-container']}>
        <h2>UPCOMING RELEASES</h2>
        <CatShowcase topRel={upcoming}/>
      </article>

    </div>
  )
}


// call the api to get featured games
export async function getServerSideProps() {

  const apiRoot= 'https://rawg.io/api/games'

  // handle the dates
  var date = new Date()
  var day = ("0" + (date.getDate())).slice(-2)
  var month = ("0" + (date.getMonth() + 1)).slice(-2)
  var year = date.getFullYear()

  // set last month
  date.setDate(date.getDate() - 30);
  var lastMonth = ("0" + (date.getMonth() + 1)).slice(-2)

  // set last month
  date.setDate(date.getDate() + 360);
  var nextHalf = ("0" + (date.getMonth() + 1)).slice(-2)
  var nextYear = date.getFullYear()

  // fetch featured games
  const res = await fetch(`${apiRoot}?${process.env.rawgkey}&dates=${year}-01-01,${year}-${month}-${day}&ordering=-added&page=1&page_size=5`)

  const gameData = await res.json()

  // fetch featured games details
  const featDetails = await Promise.all(gameData.results.map((g) => fetch(`${apiRoot}/${g.id}?${process.env.rawgkey}`).then(data => data.json()))
  ) 

  // fetch top release
  const topRelRes = await fetch(`${apiRoot}?${process.env.rawgkey}&dates=${year}-${lastMonth}-${day},${year}-${month}-${day}&ordering=-metacritic&page=1&page_size=5`)

  const topRel = await topRelRes.json()

  // fetch upcoming
  const upcomingGames = await fetch(`${apiRoot}?${process.env.rawgkey}&dates=${year}-${month}-${day},${nextYear}-${nextHalf}-${day}&ordering=-rating&page=1&page_size=5`)

  const upcoming = await upcomingGames.json()

  return {
    props: {
      games: gameData,
      topRel,
      upcoming,
      featDetails
    },
  }
}