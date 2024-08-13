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
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

/**
 * Title 組件。
 *
 * @component
 * @param {TitleProps} props - Title 組件的屬性。
 * @param {string} props.themeColor - 標題的主題顏色。
 * @param {number} props.level - 標題的層級。
 * @param {ReactNode} props.children - 標題的內容。
 * @param {string} props.className - 標題的附加 class 名稱。
 * @returns {JSX.Element} 渲染的 Title 組件。
 */
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
