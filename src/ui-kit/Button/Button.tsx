import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <div className={cn(styles.root, className)} onClick={onClick}>
      {children}
    </div>
  );
};
