import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>RESTAURANT RATING APP</h1>
      <div className={styles.menuItem}>
        <Link className={styles.linkTag} to="/"><h4>Restaurants</h4></Link>
      </div>
    </div>
  )
}

export default Header