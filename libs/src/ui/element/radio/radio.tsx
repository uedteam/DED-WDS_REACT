import React, { useState, useEffect } from 'react';
import Check from '@assets/check.svg?react';
import { getThemeClass } from './styled';

interface InputProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  className?: string;
  options?: { label: string; value: string }[];
  direction?: 'row' | 'column';
  value?: string;
  onChange?: (value: string) => void;
}

export const Radio: React.FC<InputProps> = (props: InputProps) => {
  const {
    themeColor = 'primary',
    className,
    options = [],
    direction = 'row',
    value = '',
    onChange,
    ...rest
  } = props;

  const [currOptions, setCurrOptions] = useState<string>('');

  useEffect(() => {
    setCurrOptions(value || '');
  }, [value]);

  return (
    <div
      className={`radio-container ${
        direction === 'row' ? 'radio-container-row' : 'radio-container-column'
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
            className="radio-input"
            id={option.value}
            value={option.value}
            onChange={(e) => {
              if (e.target.checked) {
                setCurrOptions(option.value);
                return onChange && onChange(option.value);
              } else {
                setCurrOptions('');
                return onChange && onChange('');
              }
            }}
            name="option"
            type="radio"
          />
          {currOptions.includes(option.value) ? (
            <div
              className={`radio-icon ${getThemeClass('checked', themeColor)}`}
            >
              <Check></Check>
            </div>
          ) : (
            <div
              className={`radio-icon ${getThemeClass('unchecked', themeColor)}`}
            ></div>
          )}

          <span className="radio-text">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
