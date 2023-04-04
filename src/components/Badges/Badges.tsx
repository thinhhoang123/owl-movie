import styles from './Badges.module.scss';
import * as React from 'react';

export interface IBadgeProps {
  label: string;
}

export default function Badge(props: IBadgeProps) {
  return <div className={styles['badges']}>{props.label}</div>;
}
