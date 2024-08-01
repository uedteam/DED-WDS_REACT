import { getBorderClass, getHintClass } from './styled';
import { getSizeClass } from '../../../utils/style';
import { ReactNode } from 'react';

interface InputProps {
  label?: ReactNode;
  className?: string;
  placeholder?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  isDisabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  hint?: { error: string; description: string };
  value?: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    label = '',
    className,
    placeholder = '請輸入...',
    size = 'medium',
    prefix,
    suffix,
    isDisabled = false,
    hint = { error: '', description: '' },
    value,
    onChange,
    ...rest
  } = props;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  };

  return (
    <div className={`input-container ${className}`}>
      {label && (
        <label className={`${isDisabled ? 'input-disable' : 'input-label'}`}>
          {label}
        </label>
      )}
      <div
        className={` 
          input-group
          ${className ? className : ''} 
          ${getSizeClass('component', size)} 
          ${isDisabled ? 'input-disable' : getBorderClass(hint.error)}`}
      >
        {prefix && <div className={getSizeClass('icon', size)}>{prefix}</div>}
        <input
          value={value}
          className={`${
            isDisabled ? 'input-disable' : `input ${getSizeClass('text', size)}`
          }`}
          {...rest}
          onChange={handleOnChange}
          placeholder={placeholder}
        />
        {suffix && <div className={getSizeClass('icon', size)}>{suffix}</div>}
      </div>
      <small
        className={`textarea-hint ${
          isDisabled ? 'textarea-disable' : getHintClass(hint)
        }`}
      >
        {hint.error.length > 0 ? hint.error : hint.description}
      </small>
    </div>
  );
};

export default Input;
