import React, { useState, useEffect } from 'react';
import { CheckIcon } from '@src/assets';
import { getThemeClass } from './styled';

/**
 * CheckboxProps 介面定義了 Checkbox 元件的屬性。
 *
 * @property {('primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info')} [themeColor] - 選擇框的主題顏色。
 * @property {string} [className] - 自訂的 CSS 類名。
 * @property {{ label: string; value: string }[]} [options] - 選項的陣列，每個選項包含標籤和值。
 * @property {string[]} [initValue] - 初始選中的值。
 * @property {('row' | 'column')} [direction] - 選項排列的方向，可以是 'row' 或 'column'。
 * @property {(value: string[]) => void} [onChange] - 當選中的值改變時的回調函數。
 */
export interface CheckboxProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  options?: { label: string; value: string }[];
  initValue?: string[];
  direction?: 'row' | 'column';
  onChange?: (value: string[]) => void;
  className?: string;
}

/**
 * Checkbox 元件
 *
 * @param {CheckboxProps} props - Checkbox 元件的屬性
 * @param {string} [props.themeColor='primary'] - 主題顏色
 * @param {string} [props.direction='row'] - 排列方向，'row' 或 'column'
 * @param {string[]} [props.initValue=[]] - 初始選中的選項值
 * @param {Array<{ value: string, label: string }>} [props.options=[]] - 可選項目列表
 * @param {function} [props.onChange] - 當選項改變時的回調函數
 * @param {string} [props.className] - 自訂的 class 名稱
 * @param {object} [props.rest] - 其他傳遞給 input 元素的屬性
 *
 * @returns {JSX.Element} Checkbox 元件的 JSX
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  themeColor = 'primary',
  direction = 'row',
  initValue = [],
  options = [],
  onChange,
  className,
  ...rest
}) => {
  const [currOptions, setCurrOptions] = useState<string[]>(initValue);

  useEffect(() => {
    setCurrOptions(initValue || []);
  }, [initValue]);

  const handleChange = (value: string, checked: boolean) => {
    const updatedOptions = checked
      ? [...currOptions, value]
      : currOptions.filter((target) => target !== value);

    setCurrOptions(updatedOptions);
    if (onChange) {
      onChange(updatedOptions);
    }
  };

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
            checked={currOptions.includes(option.value)}
            onChange={(e) => handleChange(option.value, e.target.checked)}
            name="option"
            type="checkbox"
          />
          <div
            className={`checkbox-icon ${getThemeClass(
              currOptions.includes(option.value) ? 'checked' : 'unchecked',
              themeColor
            )}`}
          >
            {currOptions.includes(option.value) && <CheckIcon />}
          </div>
          <span className="checkbox-text">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
