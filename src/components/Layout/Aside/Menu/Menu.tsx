import React from 'react'
import { ReactComponent as HomeIcon } from './img/home.svg'
import { ReactComponent as TicketsIcon } from './img/tickets.svg'
import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'
import { PAGES_CONFIG } from '../../../../constants/pages'

export const Menu = () => {
  return (
    <div className={styles.root}>
      {ITEMS.map(({ label, to, icon }) => (
        <Link key={to} to={to} className={styles.item} title={label}>
          {icon}
        </Link>
      ))}
    </div>
  )
}

const ITEMS = [
  {
    label: 'Главная',
    to: PAGES_CONFIG.home.path,
    icon: <HomeIcon />,
  },
  {
    label: 'Тикеты',
    to: PAGES_CONFIG.tickets.path,
    icon: <TicketsIcon />,
  },
]
