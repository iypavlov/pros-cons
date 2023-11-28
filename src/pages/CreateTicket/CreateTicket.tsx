import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';
import { PAGES_CONFIG } from '../../constants/pages';
import { useTicketsStore } from '../../stores/useTicketsStore';
import { Button } from '../../ui-kit/Button/Button';
import { Input } from '../../ui-kit/Input/Input';
import styles from './CreateTicket.module.scss';

export const CreateTicket = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [addTicket] = useTicketsStore(useShallow((state) => [state.addTicket]));

  const onCreate = (title: string) => {
    if (!title.trim().length) return;

    addTicket({ id: nanoid(), title, cons: [], pros: [] });
    navigate(PAGES_CONFIG.tickets.path);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onCreate(title);
        }}
        className={styles.form}
      >
        <label className={styles.label}>Название</label>
        <Input
          className={styles.name}
          value={title}
          onChange={(value) => setTitle(value)}
        />
        <Button onClick={() => onCreate(title)}>Создать</Button>
      </form>
    </div>
  );
};
