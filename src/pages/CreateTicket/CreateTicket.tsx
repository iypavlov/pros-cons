import React from 'react';
import { Input } from '../../ui-kit/Input/Input';
import styles from './CreateTicket.module.scss';
import { Button } from '../../ui-kit/Button/Button';
import { useTicketsStore } from '../../stores/useTicketsStore';
import { useShallow } from 'zustand/react/shallow';

export const CreateTicket = () => {
  const [tickets, addTicket] = useTicketsStore(
    useShallow((state: any) => [state.tickets, state.addTicket])
  );

  return (
    <div>
      <div className={styles.card}>
        <label className={styles.label}>Название</label>
        <Input className={styles.name} />
        <Button onClick={() => addTicket({ id: 1, name: 'kekw' })}>
          Создать
        </Button>
      </div>
    </div>
  );
};
