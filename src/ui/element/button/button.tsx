import { ReactNode } from 'react';
import { getStyle } from './styled';

interface ButtonProps {
  variant: 'contained' | 'outlined' | 'text';
  children: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button(props: ButtonProps) {
  const { variant, children, prefix, suffix, className, onClick, ...rest } =
    props;

  return (
    <button {...rest} className={getStyle(variant)} onClick={onClick}>
      {prefix}
      {children}
      {suffix}
    </button>
  );
}

export default Button;
