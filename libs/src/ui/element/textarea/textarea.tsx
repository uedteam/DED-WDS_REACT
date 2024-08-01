import { ReactNode, useState } from 'react';
import { getHintClass, getCountClass, getBorderClass } from './styled';

interface TextareaProps {
  label?: ReactNode;
  className?: string;
  placeholder?: string;
  isDisabled?: boolean;
  total?: number;
  hint?: { error: string; description: string };
}

export const Textarea: React.FC<TextareaProps> = (props: TextareaProps) => {
  const {
    label = '',
    className = '',
    placeholder = '請輸入...',
    isDisabled = false,
    total = 10,
    hint = { error: '', description: '' },
    ...rest
  } = props;

  const [value, setValue] = useState('');

  return (
    <div className={`textarea-container ${className ? className : ''}`}>
      {label && (
        <label
          className={`${isDisabled ? 'textarea-disable' : 'textarea-label'}`}
          htmlFor="id"
        >
          {label}
        </label>
      )}
      <div
        className={`textarea-group ${
          isDisabled ? 'textarea-disable' : getBorderClass(hint.error)
        }`}
      >
        <textarea
          {...rest}
          id="id"
          onChange={(e) => {
            setValue(e.target.value);
            console.log(e.target.value);
          }}
          maxLength={total || undefined}
          className={`${isDisabled ? 'textarea-disable' : 'textarea'}`}
          placeholder={placeholder}
        />
        {total > 0 && (
          <small
            className={`${
              isDisabled ? 'textarea-disable' : getCountClass(value)
            }`}
          >
            {value.length > 0 && `${value.length}/${total}`}
          </small>
        )}
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

export default Textarea;
