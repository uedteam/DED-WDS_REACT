import { ReactNode } from 'react';
import { getStyle } from './styled';

interface ButtonProps {
  variant: 'contained' | 'outlined' | 'text';
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  children: ReactNode;
  // prefix?: ReactNode;
  // suffix?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button(props: ButtonProps) {
  const {
    variant,
    themeColor = '',
    children,
    // prefix,
    // suffix,
    className,
    onClick,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      className={`button ${className || getStyle(variant, themeColor)}`}
      onClick={onClick}
    >
      {/* {prefix} */}
      {children}
      {/* {suffix} */}
    </button>
  );
}

export default Button;
