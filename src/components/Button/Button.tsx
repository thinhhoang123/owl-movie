import * as React from 'react';
import styles from './Button.module.scss';

export interface IButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  icon?: string;
  width?: string;
}

export default function Button({
  onClick,
  children,
  icon,
  width,
}: IButtonProps) {
  return (
    <button
      className={styles.btnCustom}
      onClick={onClick}
      style={{ width: `${width}` }}
    >
      {icon ? <i className={icon}></i> : null} {children}
    </button>
  );
}
