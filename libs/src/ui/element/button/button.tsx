import { MouseEventHandler, ReactNode } from 'react';
import { getDisableClass, getThemeClass } from './styled';
import { getSizeClass } from '../../../utils/style';

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
  size?: 'small' | 'medium' | 'large';
  prefix?: ReactNode;
  suffix?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    variant,
    themeColor = 'primary',
    isDisabled = false,
    children,
    size = 'medium',
    prefix,
    suffix,
    className,
    onClick,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      className={`button 
        ${getSizeClass('component', size)}
        ${
          isDisabled
            ? getDisableClass(variant)
            : className || getThemeClass(variant, themeColor)
        }`}
      onClick={onClick}
    >
      {prefix && <div className={getSizeClass('icon', size)}>{prefix}</div>}
      {children && <div className={getSizeClass('text', size)}>{children}</div>}
      {suffix && <div className={getSizeClass('icon', size)}>{suffix}</div>}
    </button>
  );
};

export default Button;
