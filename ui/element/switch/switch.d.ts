import { ReactNode } from '../../../../../node_modules/react';

interface SwitchProps {
    themeColor?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info';
    checkChildren?: ReactNode;
    unCheckChildren?: ReactNode;
    isChecked: boolean;
    isDisabled?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
}
export declare function Switch(props: SwitchProps): import("react/jsx-runtime").JSX.Element;
export default Switch;
