import * as React from 'react';
import styles from './index.module.scss';
export interface IListLayoutProps {
  children: React.ReactNode;
}

export default function ListLayout(props: IListLayoutProps) {
  return <div className={styles['list-layout']}>{props.children}</div>;
}
