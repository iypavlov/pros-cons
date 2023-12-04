import React from 'react';
import { TicketData } from '../../types/tickets';
import { Ticket } from './Ticket/Ticket';
import styles from './TicketsList.module.scss';

interface TicketsListProps {
  tickets: TicketData[];
}

export const TicketsList: React.FC<TicketsListProps> = ({ tickets }) => {
  return (
    <div className={styles.root}>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};
