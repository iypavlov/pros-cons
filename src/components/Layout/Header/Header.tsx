import { Link, useLocation } from 'react-router-dom';
import { PAGES_CONFIG } from '../../../constants/pages';
import styles from './Header.module.scss';
import { ReactComponent as AddIcon } from './img/add.svg';
import { ReactComponent as SearchIcon } from './img/search.svg';

export const Header = () => {
  const location = useLocation();

  return (
    <div className={styles.root}>
      <div className={styles.actions}>
        <Link to={PAGES_CONFIG.createTicket.path} className={styles.action}>
          <AddIcon />
        </Link>
      </div>
      {location.pathname === PAGES_CONFIG.tickets.path && (
        <div className={styles.search}>
          <input className={styles.searchInput} />
          <SearchIcon />
        </div>
      )}
    </div>
  );
};
