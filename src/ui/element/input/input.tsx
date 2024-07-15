import { getStyle, getSizeClass } from './styled';
import { ReactNode } from 'react';

interface InputProps {
  className?: string;
  placeholder?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export function Input(props: InputProps) {
  const {
    className,
    placeholder = '請輸入...',
    size = 'medium',
    prefix,
    suffix,
    ...rest
  } = props;

  return (
    <div className={`input ${getSizeClass(size)} ${className} `}>
      {prefix}
      <input {...rest} placeholder={placeholder} />
      {suffix}
    </div>
  );
}

export default Input;
