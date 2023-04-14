import styles from './index.module.scss';
import * as React from 'react';

export interface IBadgeProps {
  key?: any;
  label: string;
}

export default function Badge(props: IBadgeProps) {
  return <div className={styles['badges']}>{props.label}</div>;
}
