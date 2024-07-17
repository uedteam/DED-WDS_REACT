import { ReactNode } from '../../../../../node_modules/react';

interface TextareaProps {
    label?: ReactNode;
    className?: string;
    placeholder?: string;
    isDisabled?: boolean;
    total?: number;
    hint?: {
        error: string;
        description: string;
    };
}
export declare function Textarea(props: TextareaProps): import("react/jsx-runtime").JSX.Element;
export default Textarea;
