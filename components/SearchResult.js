import React from 'react'
import styles from '../styles/Search.module.scss'
import Link from 'next/link'

function SearchResult(props) {

  const MainGames = props.matchedGame.map(g => {
    return (
      
        <div key={g.id} className={styles["games"]}>

            {g.cover && <Link href={'/game/' + g.id}> 
                <img src={g.cover.url.replace('thumb', 'cover_big')} alt={g.name.substring(0,22)}></img>
            </Link>}

            {/* {g.cover ? <Link href={'/game/' + g.id}> 
                <img src={g.cover.url.replace('thumb', 'cover_big')} alt={g.name.substring(0,22)}></img>
            </Link> : <Link href={'/game/' + g.id}><div className={styles['notfound']}>&#10060;</div></Link>} */}
            
            {g.cover && <div className={styles["infos"]}>
                {/* limit characters to 22 */}
                <Link href={'/game/' + g.id}>
                    <p className={styles['gameName']}>{g.name.substring(0,22)}</p>
                </Link>
                {g.genres && <p className={styles["tag"]}>{g.genres[0].name}</p>}
            </div>}
        </div>
      
    )
  })

  return (
    <div className={styles['games-container']}>{MainGames}</div>
  )
}

export default SearchResult