import React from 'react';
import styles from './Ticket.module.scss';
import { Link } from 'react-router-dom';

interface TicketProps {
  id: string;
  title: string;
}

export const Ticket: React.FC<TicketProps> = ({ id, title }) => {
  return (
    <Link to={`/ticket/${id}`} className={styles.root}>
      {title}
    </Link>
  );
};
