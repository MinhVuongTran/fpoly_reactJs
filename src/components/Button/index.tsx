import { Button as ButtonAntd } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import React, { useState } from 'react';

type ButtonTypes = 'primary' | 'default' | 'dashed' | 'ghost' | 'link' | 'text';

type ButtonProps = {
  children: React.ReactNode;
  size?: SizeType;
  type?: ButtonTypes;
  icon?: React.ReactNode;
  danger?: boolean;
  shape?: 'default' | 'circle' | 'round';
  loading?: boolean | number;
  disabled?: boolean;
  htmlType?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

const Button = ({
  size = 'large',
  type = 'primary',
  children,
  icon,
  danger = false,
  disabled = false,
  htmlType,
  onClick,
}: ButtonProps) => {
  return (
    <>
      <ButtonAntd
        type={type}
        disabled={disabled}
        icon={icon}
        size={size}
        danger={danger}
        htmlType={htmlType}
        onClick={onClick}>
        {children}
      </ButtonAntd>
    </>
  );
};

export default Button;
