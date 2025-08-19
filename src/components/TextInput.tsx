'use client';

import { InputHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styles from './TextInput.module.scss';

type Props = {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
} & InputHTMLAttributes<HTMLInputElement>;

export default function InputField({
  label,
  name,
  register,
  error,
  ...rest
}: Props) {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name} className={styles.inoutLabel}>
        {label}
      </label>

      <input
        id={name}
        {...register}
        {...rest}
        className={styles.input}
      />

      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
}
