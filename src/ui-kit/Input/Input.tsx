import React from 'react';
import styles from './Input.module.scss';
import cn from 'classnames';

interface InputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ className, value, onChange }) => {
  return (
    <input
      className={cn(styles.root, className)}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};
