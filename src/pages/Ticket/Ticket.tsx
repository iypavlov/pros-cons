import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTicketsStore } from '../../stores/useTicketsStore';
import { Button } from '../../ui-kit/Button/Button';
import { Input } from '../../ui-kit/Input/Input';
import { ProsCons } from './ProsCons/ProsCons';
import styles from './Ticket.module.scss';

export const Ticket = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [getById, updateTicket, removeProsOrCons] = useTicketsStore((state) => [
    state.getById,
    state.updateTicket,
    state.removeProsOrCons,
  ]);

  const ticket = id && getById(id);

  const onAdd = (type: 'pros' | 'cons') => {
    if (!id || !title.trim().length) return;

    updateTicket(id, { id: nanoid(), type, title, weight: 0 }); // @TODO: Добавить велью

    setTitle('');
  };

  if (!ticket) return null; // @TODO: Сообщить что тикет не найденю.

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{ticket.title}</h2>
      <div className={styles.controls}>
        <Button className={styles.prosBtn} onClick={() => onAdd('pros')}>
          Плюс
        </Button>
        <Input
          placeholder="Печатать тут..."
          className={styles.input}
          value={title}
          onChange={(value) => setTitle(value)}
        />
        <Button className={styles.consBtn} onClick={() => onAdd('cons')}>
          Минус
        </Button>
      </div>
      <div className={styles.columns}>
        <div className={styles.column}>
          <ProsCons
            title="Плюсы"
            prosOrCons={ticket.pros}
            onRemoveClick={(prosId) => removeProsOrCons(id, prosId, 'pros')}
          />
        </div>
        <div className={styles.column}>
          <ProsCons
            title="Минусы"
            prosOrCons={ticket.cons}
            onRemoveClick={(consId) => removeProsOrCons(id, consId, 'cons')}
          />
        </div>
      </div>
    </div>
  );
};
