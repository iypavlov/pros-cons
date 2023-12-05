import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui-kit/Button/Button';
import styles from './NoTicketData.module.scss';

export const NoTicketData = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      Такого тикета не существует
      <Button onClick={() => navigate(-1)}>Назад</Button>
    </div>
  );
};
