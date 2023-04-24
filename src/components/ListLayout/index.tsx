import * as React from 'react';
import styles from './index.module.scss';
export interface IListLayoutProps {
  children: React.ReactNode;
  widthCol?: number;
}

export default function ListLayout(props: IListLayoutProps) {
  return (
    <div
      className={styles['list-layout']}
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(${
          props.widthCol ? props.widthCol : 300
        }px, 1fr))`,
      }}
    >
      {props.children}
    </div>
  );
}
