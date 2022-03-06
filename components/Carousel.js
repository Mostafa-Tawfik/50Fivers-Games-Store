import React, { Fragment } from 'react'
import styles from '../styles/components/Carousel.module.scss'

function Carousel(props) {

  const MAX_VISIBILITY = 3;

  const [active, setActive] = React.useState(2);
  const count = props.games.results.length;
  
  return (
    <div className={styles['carousel']}>
      {active > 0 && <button className={`${styles['nav']} ${styles['left']}`} onClick={() => setActive(i => i - 1)}>&laquo;</button>}
      {props.games.results.map((pro, i) => (
        <div key={pro.id} className={styles['card-container']} style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--abs-offset': Math.abs(active - i) / 3,
            'pointerEvents': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>

            <div className={styles['card']}>

            <div className={styles["project-image-mobile"]} style={{backgroundImage:`url(${pro.background_image})`}}></div>
              
              <div className={styles['car-name']}>
                <h2>{pro.name.substring(0,25)}</h2>
              </div>
              {/* <p>{pro.desc}</p> */}
            </div>
        </div>
      ))}
      {active < count - 1 && <button className={`${styles['nav']} ${styles['right']}`} onClick={() => setActive(i => i + 1)}>&raquo;</button>}
    </div>
  );
}

export default Carousel