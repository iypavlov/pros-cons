import React from 'react'
import { ReactComponent as HomeIcon } from './img/home.svg'
import { ReactComponent as TicketsIcon } from './img/tickets.svg'
import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'

export const Menu = () => {
  return (
    <div className={styles.root}>
      {ITEMS.map(({ to, icon }) => (
        <Link key={to} to={to} className={styles.item}>
          {icon}
        </Link>
      ))}
    </div>
  )
}

const ITEMS = [
  {
    to: '/',
    icon: <HomeIcon />,
  },
  {
    to: '/tickets',
    icon: <TicketsIcon />,
  },
]
