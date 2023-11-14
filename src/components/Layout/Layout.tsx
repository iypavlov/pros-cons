import React from 'react'
import { Aside } from './Aside/Aside'
import { Content } from './Content/Content'
import styles from './Layout.module.scss'
import { Header } from './Header/Header'
import { Outlet } from 'react-router-dom'

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
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
  )
}
