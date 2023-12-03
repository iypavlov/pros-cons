import cn from 'classnames';
import React from 'react';
import { TicketProsCons } from '../../../types/tickets';
import { ReactComponent as CloseIcon } from './img/close.svg';
import styles from './ProsCons.module.scss';

interface ProsConsProps {
  title: string;
  prosOrCons: TicketProsCons[];
  onRemoveClick: (id: string) => void;
  onChangeWeight: (id: string, weight: number) => void;
  percent?: number;
}

export const ProsCons: React.FC<ProsConsProps> = ({
  title,
  prosOrCons,
  onRemoveClick,
  onChangeWeight,
  percent,
}) => {
  const getPercentColor = () => {
    if (!percent) return '';
    if (percent < 20) return PERCENT_COLORS.red;
    if (percent < 50) return PERCENT_COLORS.orange;
    if (percent < 80) return PERCENT_COLORS.lightGreen;

    return PERCENT_COLORS.green;
  };

  return (
    <>
      <h3 className={styles.title}>
        {title}{' '}
        {Boolean(percent) && (
          <div
            className={cn(styles.percent, percent && styles[getPercentColor()])}
          >
            {percent?.toFixed(2)}%
          </div>
        )}
      </h3>
      <div className={styles.card}>
        {prosOrCons.map((data) => (
          <div key={data.id} className={styles.prosOrCons}>
            {data.title}
            <div className={styles.actions}>
              <div className={styles.weightLabel}>Вес</div>
              <div className={styles.weight} title="Вес">
                <span
                  onClick={() =>
                    onChangeWeight(data.id, Math.max(1, data.weight - 1))
                  }
                >
                  -
                </span>
                <div className={styles.weightValue}>{data.weight}</div>
                <span
                  onClick={() =>
                    onChangeWeight(data.id, Math.min(10, data.weight + 1))
                  }
                >
                  +
                </span>
              </div>
              <div
                className={styles.remove}
                onClick={() => onRemoveClick(data.id)}
              >
                <CloseIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const PERCENT_COLORS = {
  red: 'red',
  orange: 'orange',
  lightGreen: 'lightGreen',
  green: 'green',
};
