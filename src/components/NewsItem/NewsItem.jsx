import React from 'react'
import styles from './style.module.css'

import { formatTimeAgo } from '../../Helpers/formatTimeAgo'
export const NewsItem = ({item}) => {
  return (
    <li className={styles.item}>
     
        <div className={styles.wrapper} style={{backgroundImage: `url(${item.image})`}}>

        </div>
        <div className={styles.info}>
            <h3>{item.title}</h3>
            <p className={styles.extra}>
            {formatTimeAgo(item.published)} by {item.author}

            </p>
        </div>
        
    </li> 
  )
}
