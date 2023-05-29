import * as React from 'react';
import styles from './index.module.scss';
export interface ITitleProps {
  title: string;
  onClick?: () => void;
}

export default function Title(props: ITitleProps) {
  return (
    <div className={styles['title__wrapper']}>
      <h4>{props.title}</h4>
      {props.onClick ? <i className="fad fa-chevron-double-right"></i> : null}
    </div>
  );
}
