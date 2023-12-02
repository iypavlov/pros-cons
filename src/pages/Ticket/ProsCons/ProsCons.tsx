import React from 'react';
import { TicketProsCons } from '../../../types/tickets';
import { ReactComponent as CloseIcon } from './img/close.svg';
import styles from './ProsCons.module.scss';

interface ProsConsProps {
  title: string;
  prosOrCons: TicketProsCons[];
  onRemoveClick: (id: string) => void;
}

export const ProsCons: React.FC<ProsConsProps> = ({
  title,
  prosOrCons,
  onRemoveClick,
}) => {
  return (
    <>
      <h3>{title}</h3>
      <div className={styles.card}>
        {prosOrCons.map((data) => (
          <div key={data.id} className={styles.prosOrCons}>
            {data.title}
            <div
              className={styles.remove}
              onClick={() => onRemoveClick(data.id)}
            >
              <CloseIcon />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
