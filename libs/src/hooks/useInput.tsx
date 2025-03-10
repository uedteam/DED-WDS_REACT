import { useState, useEffect, ChangeEventHandler } from 'react';

export const useInput = (
  currValue: string | number,
  type: string,
  maxLimit: number | undefined,
  onChange: ChangeEventHandler<HTMLInputElement> | undefined
) => {
  const [value, setValue] = useState(currValue);
  const [inputType, setInputType] = useState(type);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLimit) {
      setValue(e.target.value.slice(0, maxLimit));
      onChange && onChange(e.target.value.slice(0, maxLimit));
    } else {
      setValue(e.target.value);
      onChange && onChange(e.target.value);
    }
  };

  const reset = () => {
    setValue('');
  };

  const switchPassword = () => {
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  useEffect(() => {
    setInputType(type);
  }, [type]);

  useEffect(() => {
    setValue(currValue);
  }, [currValue]);

  return {
    inputType,
    value,
    handleInputChange: handleInputChange,
    onVisibility: switchPassword,
    onClear: reset,
  };
};
