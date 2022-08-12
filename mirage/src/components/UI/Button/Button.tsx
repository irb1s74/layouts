import React, { FC, ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <button className='btn-reset button '>{children}</button>;
};

export default Button;
