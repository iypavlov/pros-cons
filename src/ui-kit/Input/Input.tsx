import cn from 'classnames';
import { forwardRef } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function (
  { className, onChange, ...restProps },
  ref
) {
  return (
    <input
      {...restProps}
      ref={ref}
      className={cn(styles.root, className)}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
});
