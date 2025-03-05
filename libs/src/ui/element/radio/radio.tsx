import React, { useState, useEffect, useId } from 'react';
import { getCombinedClassName } from '@src/utils/string';

export interface RadioProps {
  dataSource: { label: string; value: string; isDisabled: boolean }[];
  direction?: 'row' | 'column';
  currValue: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onChange?: (value: string) => void;
}

export const Radio: React.FC<RadioProps> = ({
  dataSource,
  currValue,
  direction = 'row',
  size = 'medium',
  className = '',
  onChange,
  ...props
}: RadioProps): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<string>(currValue || '');

  const baseId = useId();

  useEffect(() => {
    setSelectedValue(currValue || '');
  }, [currValue]);

  const handleChange = (value: string) => {
    // 如果點擊的是已選中的值，不做任何處理
    // 否則更新選中的值
    const newValue = selectedValue === value ? '' : value;
    setSelectedValue(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div
      className={`ded-radio-container ${
        direction === 'row'
          ? 'ded-radio-container-row'
          : 'ded-radio-container-column'
      }`}
    >
      {dataSource.map((option, index) => {
        const uniqueId = `${baseId}-radio-${index}`;

        return (
          <label
            key={option.value}
            htmlFor={uniqueId}
            className={`ded-radio 
            ${getCombinedClassName('ded-text', size)}
            ${option.isDisabled ? 'ded-radio-input-disabled' : ''}
            ${className}`}
          >
            <input
              className="ded-radio-input"
              id={uniqueId}
              value={option.value}
              checked={selectedValue === option.value}
              disabled={option.isDisabled}
              onChange={() => !option.isDisabled && handleChange(option.value)}
              {...props}
              type="radio"
            />
            <div
              className={`ded-radio-icon
        ${getCombinedClassName(
          'ded-radio',
          selectedValue === option.value ? 'checked' : 'unchecked'
        )}
        ${getCombinedClassName('ded-icon', size)}
        ${option.isDisabled ? 'ded-radio-icon-disabled' : ''}`}
            />
            <span
              className={`ded-radio-text
        ${option.isDisabled ? 'ded-radio-text-disabled' : ''}`}
            >
              {option.label}
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default Radio;
