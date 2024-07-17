import { ReactNode } from '../../../../../node_modules/react';

interface TitleProps {
    themeColor?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info';
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
    className?: string;
}
export declare function Title(props: TitleProps): import("react/jsx-runtime").JSX.Element;
export default Title;
