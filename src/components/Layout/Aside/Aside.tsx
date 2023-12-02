import styles from './Aside.module.scss';
import { Menu } from './Menu/Menu';

export const Aside = () => {
  return (
    <div className={styles.root}>
      <Menu />
    </div>
  );
};
