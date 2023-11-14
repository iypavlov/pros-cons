import React from 'react'
import styles from './Content.module.scss'

interface ContentProps {
  children: React.ReactNode
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className={styles.root}>{children}</div>
}
