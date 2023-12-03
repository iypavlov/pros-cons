import { nanoid } from 'nanoid';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';
import { PAGES_CONFIG } from '../../constants/pages';
import { useTicketsStore } from '../../stores/useTicketsStore';
import { Button } from '../../ui-kit/Button/Button';
import { Input } from '../../ui-kit/Input/Input';
import styles from './CreateTicketForm.module.scss';

export const CreateTicketForm = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState('');
  const [addTicket] = useTicketsStore(useShallow((state) => [state.addTicket]));

  const onCreate = (title: string) => {
    if (!title.trim().length) return;

    const id = nanoid();

    addTicket({
      id,
      title,
      cons: [],
      pros: [],
    });
    navigate(`${PAGES_CONFIG.tickets.path}/${id}`);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onCreate(title);
      }}
      className={styles.root}
    >
      <label className={styles.label}>Введите название</label>
      <Input
        ref={inputRef}
        className={styles.name}
        value={title}
        onChange={(value) => setTitle(value)}
      />
      <Button onClick={() => onCreate(title)}>Создать</Button>
    </form>
  );
};
