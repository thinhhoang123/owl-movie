import { Container } from '@mui/material';
import * as React from 'react';
import HeaderDetail from './HeaderDetail';
import { detailTv } from '../../mockApi/detailTV';
import styles from './DetailLayout.module.scss';
export interface IDetailLayoutProps {}

export default function DetailLayout(props: any) {
  console.log(props);
  return (
    <div className={styles.detailLayout}>
      <HeaderDetail {...props} />
    </div>
  );
}
