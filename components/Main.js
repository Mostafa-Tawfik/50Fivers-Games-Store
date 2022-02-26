import React from 'react';
import styles from '../styles/components/_main.module.scss'
import useSWR from 'swr'

export default function Main() {
  
  const [games, setGames] = React.useState([])

  const fetcher = url => fetch(url).then(r => r.json())
  
  
  const { data, error } = useSWR('/api/hello', fetcher)
  
  // React.useEffect(() => {
  //   data => setGames(data)
  // },[])
  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  

  console.log(games)
  console.log(data)

  return <div>
    <article className={styles['main-layout']}>
      <div className={styles["games"]}>
          <img src="../images/BF.jpg" alt="Battlefield"></img>
          <div className={styles["infos"]}>
              <p>Battlefield 2042</p>
              <p className={styles["tag"]}>Shooter FPS </p>
              <p className={styles["price"]}>$60</p>
          </div>
          <div className={styles["middle"]}>
              <div className={styles["text"]}><a href="#0">Battlefield</a></div>
          </div>
      </div>
    </article>
  </div>;
}
