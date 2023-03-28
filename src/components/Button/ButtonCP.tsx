import { Chip } from '@mui/material';
import React from 'react';
import styles from './ButtonCP.module.scss';

interface IButtonCP {
  children?: React.ReactNode;
  outline?: boolean;
  onClick?: () => void;
  icon?: React.ReactElement;
  className?: string;
}

const ButtonCP: React.FC<IButtonCP> = ({
  children,
  onClick,
  outline,
  icon,
  className,
}) => {
  return (
    <Chip
      onClick={onClick}
      label={children}
      variant={outline ? 'outlined' : 'filled'}
      color="primary"
      style={{
        boxShadow: `${outline ? 'none' : '0 0 10px var(--primary-color)'}`,
      }}
      className={className}
      icon={icon}
    />
  );
};

export default ButtonCP;
