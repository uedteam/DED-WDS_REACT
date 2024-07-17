import { ReactNode } from 'react';

interface ButtonProps {
    variant: 'contained' | 'outlined' | 'text';
    themeColor?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info';
    isDisabled?: boolean;
    children: ReactNode;
    prefix?: ReactNode;
    suffix?: ReactNode;
    onClick?: () => void;
    className?: string;
}
export declare function Button(props: ButtonProps): import("react/jsx-runtime").JSX.Element;
export default Button;
