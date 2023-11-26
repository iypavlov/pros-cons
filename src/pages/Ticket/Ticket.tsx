import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTicketsStore } from '../../stores/useTicketsStore';
import { Button } from '../../ui-kit/Button/Button';
import { Input } from '../../ui-kit/Input/Input';
import styles from './Ticket.module.scss';

export const Ticket = () => {
  const { id } = useParams();
  const [value, setValue] = useState('');
  const [getById, updateTicket, removeProsOrCons] = useTicketsStore((state) => [
    state.getById,
    state.updateTicket,
    state.removeProsOrCons,
  ]);

  const ticket = id && getById(id);

  const onAdd = (type: 'pros' | 'cons') => {
    if (!id || !value.trim().length) return;

    updateTicket(id, { id: nanoid(), type, value });

    setValue('');
  };

  if (!ticket) return null; // @TODO: Сообщить что тикет не найденю.

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{ticket.title}</h2>
      <div className={styles.controls}>
        <Button className={styles.prosBtn} onClick={() => onAdd('pros')}>
          +
        </Button>
        <Input
          className={styles.input}
          value={value}
          onChange={(value) => setValue(value)}
        />
        <Button className={styles.consBtn} onClick={() => onAdd('cons')}>
          -
        </Button>
      </div>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>Плюсы</h3>
          <div className={styles.card}>
            {ticket.pros.map((pros) => (
              <div key={pros.id} className={styles.prosOrCons}>
                {pros.value}
                <div
                  className={styles.remove}
                  onClick={() => removeProsOrCons(id, pros.id, 'pros')}
                >
                  X
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.column}>
          <h3>Минусы</h3>
          <div className={styles.card}>
            {ticket.cons.map((cons) => (
              <div key={cons.id} className={styles.prosOrCons}>
                {cons.value}
                <div
                  className={styles.remove}
                  onClick={() => removeProsOrCons(id, cons.id, 'cons')}
                >
                  X
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
