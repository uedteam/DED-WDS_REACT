import React, { useState } from 'react';

interface InputProps {
  className?: string;
  options?: { label: string; value: string }[];
  direction?: 'row' | 'column';
  onChange?: (value: string) => void;
}

export function Radio(props: InputProps) {
  const {
    className,
    options = [],
    direction = 'row',
    onChange,
    ...rest
  } = props;
  const [value, setValue] = useState('');

  return (
    <div
      className={`radio-group ${
        direction === 'row' ? 'radio-group-row' : 'radio-group-column'
      }`}
    >
      {options.map((option) => (
        <label
          key={option.value}
          htmlFor={option.value}
          className={`radio ${className}`}
        >
          <input
            {...rest}
            id={option.value}
            value={option.value}
            checked={option.value === value}
            onChange={() => {
              setValue(option.value);
              return onChange && onChange(option.value);
            }}
            name="option"
            type="radio"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
}

export default Radio;
