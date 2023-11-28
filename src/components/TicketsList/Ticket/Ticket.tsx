import React from 'react';
import { Link } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';
import { PAGES_CONFIG } from '../../../constants/pages';
import { useTicketsStore } from '../../../stores/useTicketsStore';
import { ReactComponent as TrashIcon } from './img/trash.svg';
import styles from './Ticket.module.scss';

interface TicketProps {
  id: string;
  title: string;
}

export const Ticket: React.FC<TicketProps> = ({ id, title }) => {
  const [deleteById] = useTicketsStore(
    useShallow((state) => [state.deleteById])
  );

  return (
    <div className={styles.root}>
      <div className={styles.delete} onClick={() => deleteById(id)}>
        <TrashIcon />
      </div>
      <Link to={`${PAGES_CONFIG.tickets.path}/${id}`} className={styles.link}>
        {title}
      </Link>
    </div>
  );
};
