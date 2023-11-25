import React from 'react';
import styles from './TicketsList.module.scss';
import { Ticket } from './Ticket/Ticket';
import { TicketData } from '../../types/tickets';

interface TicketsListProps {
  tickets: TicketData[];
}

export const TicketsList: React.FC<TicketsListProps> = ({ tickets }) => {
  return (
    <div className={styles.root}>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} {...ticket} />
      ))}
    </div>
  );
};
