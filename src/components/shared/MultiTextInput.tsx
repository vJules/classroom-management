import React, { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import styles from './MultiTextInput.module.scss';
import Pill from './Pill';
import TextInput from './TextInput';

interface MultiTextInputProps {
  label: string;
  id: string;
  values: string[];
  suggestions?: string[];
  onChange: (newValue: string[]) => void;
  onQueryChange?: (query: string) => void;
}

export default function MultiTextInput({
  label,
  id,
  values,
  suggestions,
  onChange,
  onQueryChange,
}: MultiTextInputProps) {
  const [currentInputValue, setCurrentInputValue] = useState('');
  const debouncedValue = useDebounce<string>(currentInputValue, 500);

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key !== 'Enter' || !currentInputValue) return;
    addValue(currentInputValue);
  }

  function addValue(newValue: string) {
    onChange([...values, newValue]);
    setCurrentInputValue('');
  }

  useEffect(() => {
    if (onQueryChange) {
      onQueryChange(debouncedValue);
    }
  }, [debouncedValue]);

  function removeValue(index: number) {
    onChange(values.filter((filterValue, filterIndex) => index !== filterIndex));
  }

  return (
    <div className={styles['multi-text-input']}>
      <div className={styles['multi-text-input__input-wrapper']}>
        <TextInput
          label={label}
          id={id}
          value={currentInputValue}
          onKeyPress={handleKeyPress}
          onChange={setCurrentInputValue}
        />
        {!!suggestions?.length && currentInputValue && (
          <div className={styles['multi-text-input__suggestions']}>
            {suggestions?.map((suggestion, index) => (
              <div
                className={styles['multi-text-input__suggestion']}
                key={suggestion + index}
                onClick={() => addValue(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles['multi-text-input__values']}>
        {values.map((value, index) => (
          <Pill key={value + index} onRemoveClick={() => removeValue(index)} text={value} />
        ))}
      </div>
    </div>
  );
}
