import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PAGES_CONFIG } from '../../../constants/pages';
import { useSearchStore } from '../../../stores/useSearchStore';
import { Input } from '../../../ui-kit/Input/Input';
import styles from './Header.module.scss';
import { ReactComponent as AddIcon } from './img/add.svg';
import { ReactComponent as SearchIcon } from './img/search.svg';

export const Header = () => {
  const location = useLocation();
  const [setSearch] = useSearchStore((state) => [state.setSearch]);
  const [headerSearch, setHeaderSearch] = useState('');

  useEffect(() => {
    return () => {
      setSearch('');
    };
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.actions}>
        <Link
          to={PAGES_CONFIG.createTicket.path}
          className={styles.action}
          title="Создать"
        >
          <AddIcon />
        </Link>
      </div>
      {location.pathname === PAGES_CONFIG.tickets.path && (
        <form
          className={styles.search}
          onSubmit={(e) => {
            e.preventDefault();
            setSearch(headerSearch);
          }}
        >
          <Input
            className={styles.searchInput}
            onChange={setHeaderSearch}
            onBlur={() => setSearch(headerSearch)}
          />
          <SearchIcon
            className={styles.searchIcon}
            onClick={() => setSearch(headerSearch)}
          />
        </form>
      )}
    </div>
  );
};
