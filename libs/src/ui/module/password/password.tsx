import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { Input, Button } from '../../../ui';
import { LockIcon, VisibilityIcon, VisibilityOffIcon } from '../../../assets';

/* 組件介面參數 props */
export interface PasswordProps {
  // size?: 'small' | 'medium' | 'large';
  // isDisabled?: boolean;
  value: string;
  onChange?: (value: string) => void;
  className?: string;
}

/* 定義組件 */
export const Password: React.FC<PasswordProps> = (props: PasswordProps) => {
  /* 解構組件參數 */
  const {
    // size,
    // isDisabled,
    value,
    onChange,
    className,
    ...rest
  } = props;

  const [htmlType, setHtmlType] = useState('password');
  const [inputValue, setInputValue] = useState('');

  /* 事件控制 */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  const handleVisibleClick = () => {
    setHtmlType((prev) => (prev === 'text' ? 'password' : 'text'));
  };

  return (
    <Input
      value={value}
      type={htmlType}
      onChange={handleInputChange}
      prefix={<LockIcon className="password-icon" />}
      suffix={
        inputValue && (
          <Button variant="text" onClick={handleVisibleClick}>
            {htmlType === 'text' ? (
              <VisibilityIcon className="password-icon" />
            ) : (
              <VisibilityOffIcon className="password-icon" />
            )}
          </Button>
        )
      }
      {...rest}
    />
  );
};
export default Password;
