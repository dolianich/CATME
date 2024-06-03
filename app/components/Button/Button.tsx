import React from 'react';
import styles from './Button.module.css';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'senary';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  title: string;
  disabled?: boolean;
  type?: ButtonType;
  variant?: ButtonVariant;
}

const Button = ({
  children,
  onClick,
  title,
  disabled,
  type,
  variant,
}: Props) => {
  const buttonClass = variant ? styles[variant] : styles.primary;
  return (
    <button
      onClick={onClick}
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
