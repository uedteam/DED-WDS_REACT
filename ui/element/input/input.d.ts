import { ReactNode } from 'react';

interface InputProps {
    className?: string;
    placeholder?: string;
    prefix?: ReactNode;
    suffix?: ReactNode;
    size?: 'small' | 'medium' | 'large';
}
export declare function Input(props: InputProps): import("react/jsx-runtime").JSX.Element;
export default Input;
