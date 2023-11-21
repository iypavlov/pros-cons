import React from 'react';
import styles from './TicketsList.module.scss';
import { Ticket } from './Ticket/Ticket';

export const TicketsList = () => {
  return (
    <div className={styles.root}>
      {Array(9)
        .fill(0)
        .map((_, idx) => (
          <Ticket key={idx} text="Lorem ipsum dolor sit amet, consectetur." />
        ))}
    </div>
  );
};
