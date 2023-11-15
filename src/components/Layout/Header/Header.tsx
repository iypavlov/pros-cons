import React from 'react'
import styles from './Header.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { PAGES_CONFIG } from '../../../constants/pages'
import { ReactComponent as AddIcon } from './img/add.svg'
import { ReactComponent as SearchIcon } from './img/search.svg'

export const Header = () => {
  const location = useLocation()

  return (
    <div className={styles.root}>
      <div className={styles.brand}>ПиМ</div>
      {location.pathname === PAGES_CONFIG.tickets.path && (
        <>
          <div className={styles.actions}>
            <Link to={'#'} className={styles.action}>
              <AddIcon />
            </Link>
          </div>
          <div className={styles.search}>
            <input className={styles.searchInput} />
            <SearchIcon />
          </div>
        </>
      )}
    </div>
  )
}
