import React from 'react';
import styles from './TextInput.module.scss';

export interface TextInputProps {
  label: string;
  id: string;
  value: string;
  onChange?: (newValue: string) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input({ label, id, onChange, onKeyPress, value }: TextInputProps) {
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!onChange) return;
    onChange(event?.target?.value);
  }
  return (
    <div className={styles['input']}>
      <label htmlFor={id} className={styles['input__label']} id={id}>
        {label}
      </label>
      <div className={styles['input__wrapper']}>
        <input
          role='input'
          className={styles['input__field']}
          type='text'
          value={value}
          id={id}
          name={id}
          onChange={handleInputChange}
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  );
}
