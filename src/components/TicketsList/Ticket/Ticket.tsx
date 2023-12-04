import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';
import { PAGES_CONFIG } from '../../../constants/pages';
import { useTicketsStore } from '../../../stores/useTicketsStore';
import { TicketData } from '../../../types/tickets';
import {
  getPercentColor,
  getTicketProsConsPercent,
} from '../../../utils/tickets';
import { ReactComponent as TrashIcon } from './img/trash.svg';
import styles from './Ticket.module.scss';

interface TicketProps {
  ticket: TicketData;
}

export const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  const [deleteById] = useTicketsStore(
    useShallow((state) => [state.deleteById])
  );

  const prosConsPercentage = getTicketProsConsPercent(ticket);

  return (
    <div className={styles.root}>
      <div className={styles.delete} onClick={() => deleteById(ticket.id)}>
        <TrashIcon />
      </div>
      <Link
        to={`${PAGES_CONFIG.tickets.path}/${ticket.id}`}
        className={styles.link}
      >
        {ticket.title}
        <div className={styles.result}>
          {Boolean(prosConsPercentage.consPercent) && (
            <div
              className={cn(
                styles.prosConsWrapper,
                styles[getPercentColor(prosConsPercentage.consPercent)]
              )}
            >
              Минусов{' '}
              <div className={styles.prosConsPercent}>
                {prosConsPercentage.consPercent.toFixed(2)}%
              </div>
            </div>
          )}
          {Boolean(prosConsPercentage.prosPercent) && (
            <div
              className={cn(
                styles.prosConsWrapper,
                styles[getPercentColor(prosConsPercentage.prosPercent)]
              )}
            >
              Плюсов{' '}
              <div className={styles.prosConsPercent}>
                {prosConsPercentage.prosPercent.toFixed(2)}%
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
