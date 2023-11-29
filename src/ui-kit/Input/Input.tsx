import cn from 'classnames';
import React from 'react';
import styles from './Input.module.scss';

interface InputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  className,
  onChange,
  ...restProps
}) => {
  return (
    <input
      {...restProps}
      className={cn(styles.root, className)}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};
