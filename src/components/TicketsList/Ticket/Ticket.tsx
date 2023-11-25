import React from 'react';
import styles from './Ticket.module.scss';
import { Link } from 'react-router-dom';
import { PAGES_CONFIG } from '../../../constants/pages';

interface TicketProps {
  id: string;
  title: string;
}

export const Ticket: React.FC<TicketProps> = ({ id, title }) => {
  return (
    <Link to={`${PAGES_CONFIG.tickets.path}/${id}`} className={styles.root}>
      {title}
    </Link>
  );
};
