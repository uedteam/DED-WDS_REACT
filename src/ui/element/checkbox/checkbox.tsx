import React, { useState } from 'react';
import Check from '@assets/check.svg?react';
// import CheckBlank from '@assets/check_box_blank.svg?react';
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
  onChange?: (value: string[]) => void;
}

export function Checkbox(props: InputProps) {
  const {
    themeColor = '',
    className,
    options = [],
    direction = 'row',
    onChange,
    ...rest
  } = props;
  const [currOptions, setCurrOptions] = useState<string[]>([]);

  return (
    <div
      className={`checkbox-container ${
        direction === 'row'
          ? 'checkbox-container-row'
          : 'checkbox-container-column'
      }`}
    >
      {options.map((option) => (
        <label
          key={option.value}
          htmlFor={option.value}
          className={`checkbox ${className}`}
        >
          <input
            {...rest}
            className="checkbox-input"
            id={option.value}
            value={option.value}
            onChange={(e) => {
              if (e.target.checked) {
                setCurrOptions([...currOptions, option.value]);
                return onChange && onChange([...currOptions, option.value]);
              } else {
                setCurrOptions(
                  currOptions.filter((target) => target !== option.value)
                );
                return (
                  onChange &&
                  onChange(
                    currOptions.filter((target) => target !== option.value)
                  )
                );
              }
            }}
            name="option"
            type="checkbox"
          />
          {currOptions.includes(option.value) ? (
            <div
              className={`checkbox-icon ${getThemeClass(
                'checked',
                themeColor
              )}`}
            >
              <Check></Check>
            </div>
          ) : (
            <div
              className={`checkbox-icon ${getThemeClass(
                'unchecked',
                themeColor
              )}`}
            ></div>
          )}

          <span className="checkbox-text">{option.label}</span>
        </label>
      ))}
    </div>
  );
}

export default Checkbox;
