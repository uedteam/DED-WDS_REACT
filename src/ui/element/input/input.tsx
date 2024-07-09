import { getStyle } from './styled';

interface InputProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  className?: string;
}

export function Input(props: InputProps) {
  const { themeColor = '', className, ...rest } = props;

  return (
    <input {...rest} className={`input ${className || getStyle(themeColor)}`} />
  );
}

export default Input;
