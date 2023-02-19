import * as React from 'react';
import styles from './Button.module.scss';

export interface IButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  icon?: string;
}

export default function Button({ onClick, children, icon }: IButtonProps) {
  return (
    <button className={styles.btnCustom} onClick={onClick}>
      {icon ? <i className={icon}></i> : null} {children}
    </button>
  );
}
