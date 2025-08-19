'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
