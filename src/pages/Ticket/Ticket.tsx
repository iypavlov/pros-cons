import { nanoid } from 'nanoid';
import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NoTicketData } from '../../components/NoTicketData/NoTicketData';
import { useTicketsStore } from '../../stores/useTicketsStore';
import { TicketProsCons } from '../../types/tickets';
import { Button } from '../../ui-kit/Button/Button';
import { Input } from '../../ui-kit/Input/Input';
import { getTicketProsConsPercent } from '../../utils/tickets';
import { ProsCons } from './ProsCons/ProsCons';
import styles from './Ticket.module.scss';

export const Ticket = () => {
  const { id = '' } = useParams();
  const [title, setTitle] = useState('');
  const [tickets, updateTicket, removeProsOrCons, updateProsOrCons] =
    useTicketsStore((state) => [
      state.tickets,
      state.updateTicket,
      state.removeProsOrCons,
      state.updateProsOrCons,
    ]);

  const ticket = useMemo(
    () => tickets.find((ticket) => ticket.id === id),
    [id, tickets]
  );

  const prosConsPercentage = useMemo(
    () => ticket && getTicketProsConsPercent(ticket),
    [ticket]
  );

  const onAdd = (type: TicketProsCons['type']) => {
    if (!id || !title.trim().length) return;

    updateTicket(id, { id: nanoid(), type, title, weight: 1 });

    setTitle('');
  };

  if (!ticket) return <NoTicketData />;

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{ticket.title}</h2>
      <div className={styles.controls}>
        <Button className={styles.consBtn} onClick={() => onAdd('cons')}>
          Минус
        </Button>
        <Input
          placeholder="Печатать тут..."
          className={styles.input}
          value={title}
          onChange={(value) => setTitle(value)}
        />
        <Button className={styles.prosBtn} onClick={() => onAdd('pros')}>
          Плюс
        </Button>
      </div>
      <div className={styles.columns}>
        <div className={styles.column}>
          <ProsCons
            title="Минусы"
            percent={prosConsPercentage?.consPercent}
            prosOrCons={ticket.cons}
            onRemoveClick={(consId) => removeProsOrCons(id, consId, 'cons')}
            onChangeWeight={(consId, weight) =>
              updateProsOrCons(id, consId, 'cons', { weight })
            }
          />
        </div>
        <div className={styles.column}>
          <ProsCons
            title="Плюсы"
            percent={prosConsPercentage?.prosPercent}
            prosOrCons={ticket.pros}
            onRemoveClick={(prosId) => removeProsOrCons(id, prosId, 'pros')}
            onChangeWeight={(prosId, weight) =>
              updateProsOrCons(id, prosId, 'pros', { weight })
            }
          />
        </div>
      </div>
    </div>
  );
};
