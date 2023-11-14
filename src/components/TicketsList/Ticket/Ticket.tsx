import React from 'react'
import styles from './Ticket.module.scss'
import { Link } from 'react-router-dom'

interface TicketProps {
  text: string
}

export const Ticket: React.FC<TicketProps> = ({ text }) => {
  return (
    <Link to={'#'} className={styles.root}>
      {text}
    </Link>
  )
}
