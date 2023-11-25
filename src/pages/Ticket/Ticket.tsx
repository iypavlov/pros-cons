import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTicketsStore } from '../../stores/useTicketsStore';
import styles from './Ticket.module.scss';
import { Input } from '../../ui-kit/Input/Input';
import { Button } from '../../ui-kit/Button/Button';
import { nanoid } from 'nanoid';

export const Ticket = () => {
  const { id } = useParams();
  const [value, setValue] = useState('');
  const [getById, updateTicket] = useTicketsStore((state) => [
    state.getById,
    state.updateTicket,
  ]);

  const ticket = id && getById(id);

  if (!ticket) return null; // @TODO: Сообщить что тикет не найденю.

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{ticket.title}</h2>
      <div className={styles.controls}>
        <Button onClick={() => updateTicket(id, { type: 'pros', value })}>
          +
        </Button>
        <Input className={styles.input} onChange={(value) => setValue(value)} />
        <Button onClick={() => updateTicket(id, { type: 'cons', value })}>
          -
        </Button>
      </div>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>Плюсы</h3>
          <div className={styles.card}>
            {ticket.pros.map((pros) => (
              <div key={nanoid()}>{pros}</div>
            ))}
          </div>
        </div>
        <div className={styles.column}>
          <h3>Минусы</h3>
          <div className={styles.card}>
            {ticket.cons.map((cons) => (
              <div key={nanoid()}>{cons}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
