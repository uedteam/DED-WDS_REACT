import { ReactNode } from 'react';
import { getTitleClass } from './styled';

interface TitleProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

export const Title: React.FC<TitleProps> = (props: TitleProps) => {
  const { themeColor = '', level = 0, children, className, ...rest } = props;

  return (
    <div
      {...rest}
      className={`title ${className || getTitleClass(themeColor, level)}`}
    >
      {children}
    </div>
  );
};

export default Title;
