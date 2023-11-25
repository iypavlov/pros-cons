import React, { useState } from 'react';
import { Input } from '../../ui-kit/Input/Input';
import styles from './CreateTicket.module.scss';
import { Button } from '../../ui-kit/Button/Button';
import { useTicketsStore } from '../../stores/useTicketsStore';
import { useShallow } from 'zustand/react/shallow';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { PAGES_CONFIG } from '../../constants/pages';

export const CreateTicket = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [addTicket] = useTicketsStore(useShallow((state) => [state.addTicket]));

  const onCreate = () => {
    if (!title.trim().length) return;

    addTicket({ id: nanoid(), title, cons: [], pros: [] });
    navigate(PAGES_CONFIG.tickets.path);
  };

  return (
    <div>
      <div className={styles.card}>
        <label className={styles.label}>Название</label>
        <Input
          className={styles.name}
          value={title}
          onChange={(value) => setTitle(value)}
        />
        <Button onClick={onCreate}>Создать</Button>
      </div>
    </div>
  );
};