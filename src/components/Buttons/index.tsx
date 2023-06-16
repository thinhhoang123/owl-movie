import { Button } from '@mui/material';
import * as React from 'react';
import styles from './Buttons.module.scss';

export interface IButtonsProps {
  children?: React.ReactNode;
  outline?: boolean;
  onClick?: () => void;
  icon?: React.ReactElement;
  className?: string;
  disabled?: boolean;
}

export default function Buttons(props: IButtonsProps) {
  return (
    <Button
      startIcon={props.icon}
      disabled={props.disabled}
      className={[styles['custom-btn'], props.className].join(' ')}
      variant="contained"
      size="small"
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}
