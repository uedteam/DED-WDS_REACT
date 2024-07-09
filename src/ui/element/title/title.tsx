import { ReactNode } from 'react';
import { getStyle } from './styled';

interface TitleProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

export function Title(props: TitleProps) {
  const { themeColor = '', level = 1, children, className, ...rest } = props;

  return (
    <div
      {...rest}
      className={`title ${className || getStyle(themeColor, level)}`}
    >
      {children}
    </div>
  );
}

export default Title;
