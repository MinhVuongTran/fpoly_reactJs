import React from 'react';
import { Input as InputAntd } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
type InputProps = {
  placeholder?: string;
  addonBefore?: string;
  addonAfter?: string;
  size?: SizeType;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  disabled?: boolean;
  type?: 'password' | 'textarea';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const Input = ({
  placeholder,
  size = 'middle',
  addonBefore,
  addonAfter,
  prefix,
  suffix,
  disabled = false,
  onChange,
  value,
}: InputProps) => {
  return (
    <>
      <InputAntd
        placeholder={placeholder}
        size={size}
        prefix={prefix}
        suffix={suffix}
        addonBefore={addonBefore}
        addonAfter={addonAfter}
        disabled={disabled}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default Input;
