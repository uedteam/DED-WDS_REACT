import { ReactNode, useState } from 'react';
import {
  getThemeClass,
  getPositionClass,
  getLabelPositionClass,
  getThumbPositionClass,
} from './styled';

interface ToggleProps {
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

export const Toggle: React.FC<ToggleProps> = (props: ToggleProps) => {
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
      className={`toggle ${
        className || getThemeClass(themeColor)
      } ${getPositionClass(checked)} ${isDisabled ? 'toggle-disable' : ''}`}
      onClick={(e) => {
        setChecked((prev) => !prev);
        onChange && onChange(!checked);
      }}
    >
      <div className={`toggle-thumb ${getThumbPositionClass(checked)}`} />
      <label
        className={`toggle-label ${getLabelPositionClass(checked)} ${
          isDisabled ? 'toggle-label-disable' : ''
        }`}
      >
        {checked ? checkChildren : unCheckChildren}
      </label>
    </div>
  );
};

export default Toggle;
