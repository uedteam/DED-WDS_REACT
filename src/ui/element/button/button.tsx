import { ReactNode } from 'react';
import { getDisableClass, getThemeClass } from './styled';

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
  isDisabled?: boolean;
  children: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button(props: ButtonProps) {
  const {
    variant,
    themeColor = '',
    isDisabled = false,
    children,
    prefix,
    suffix,
    className,
    onClick,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      className={`button ${
        isDisabled
          ? getDisableClass(variant)
          : className || getThemeClass(variant, themeColor)
      }`}
      onClick={onClick}
    >
      {prefix}
      {children}
      {suffix}
    </button>
  );
}

export default Button;
