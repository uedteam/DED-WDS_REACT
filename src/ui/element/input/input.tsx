import { getStyle, getSizeClass } from './styled';
import { ReactNode } from 'react';

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
  placeholder?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export function Input(props: InputProps) {
  const {
    themeColor = '',
    className,
    placeholder = '請輸入...',
    size = 'medium',
    prefix,
    suffix,
    ...rest
  } = props;

  return (
    <div
      className={`input ${getSizeClass(size)} ${
        className || getStyle(themeColor)
      } `}
    >
      {prefix}
      <input {...rest} placeholder={placeholder} />
      {suffix}
    </div>
  );
}

export default Input;
