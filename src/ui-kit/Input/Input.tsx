import React from 'react';
import styles from './Input.module.scss';
import cn from 'classnames';

interface InputProps {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className }) => {
  return <input className={cn(styles.root, className)} />;
};
