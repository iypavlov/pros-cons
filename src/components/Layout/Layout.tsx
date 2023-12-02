import React from 'react';
import { Outlet } from 'react-router-dom';
import { Aside } from './Aside/Aside';
import { Content } from './Content/Content';
import { Header } from './Header/Header';
import styles from './Layout.module.scss';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className={styles.root}>
      <Aside />
      <div className={styles.main}>
        <Header></Header>
        <Content>
          <Outlet />
        </Content>
      </div>
    </div>
  );
};
