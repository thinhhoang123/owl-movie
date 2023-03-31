import * as React from 'react';
import HeaderDetail from './HeaderDetail';
import styles from './DetailLayout.module.scss';
import { Container } from '@mui/material';
export interface IDetailLayoutProps {}

export default function DetailLayout(props: any) {
  return (
    <Container maxWidth="xl" className={styles['detail-layout']}>
      <HeaderDetail {...props} />
    </Container>
  );
}
