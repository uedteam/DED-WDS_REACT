import { ReactNode, useState } from 'react';
import {
  getThemeClass,
  getPositionClass,
  getLabelPositionClass,
  getThumbPositionClass,
} from './styled';

interface SwitchProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  checkChildren?: ReactNode;
  unCheckChildren?: ReactNode;
  isChecked: boolean;
  isDisabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export function Switch(props: SwitchProps) {
  const {
    themeColor = '',
    isChecked = false,
    isDisabled = false,
    checkChildren = 'on',
    unCheckChildren = 'off',
    onChange,
    className,
    ...rest
  } = props;

  const [checked, setChecked] = useState(isChecked);

  return (
    <div
      {...rest}
      className={`switch ${
        className || getThemeClass(themeColor)
      } ${getPositionClass(checked)} ${isDisabled ? 'switch-disable' : ''}`}
      onClick={(e) => {
        setChecked((prev) => !prev);
        onChange && onChange(!checked);
      }}
    >
      <div
        className={`switch-thumb 
          ${
            isDisabled ? 'switch-label-disable' : getThumbPositionClass(checked)
          }`}
      />
      <label
        className={`switch-label ${getLabelPositionClass(checked)} ${
          isDisabled ? 'switch-label-disable' : ''
        }`}
      >
        {isDisabled ? '' : checked ? checkChildren : unCheckChildren}
      </label>
    </div>
  );
}

export default Switch;
