import React from 'react';
import styles from './Button.module.css';


type ButtonType = 'button' | 'submit' | 'reset' | undefined;
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

interface Props {
  children: React.ReactNode;
  handleClick?: () => void;
  title: string;
  disabled?: boolean;
  type?: ButtonType;
  variant?: ButtonVariant;
}

const Button = ({
  children,
  handleClick,
  title,
  disabled,
  type,
  variant,
}: Props) => {
  let buttonClass = variant ? styles[variant] : styles.primary;
  return (
    <button
      onClick={handleClick}
      className={buttonClass}
      type={type}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
