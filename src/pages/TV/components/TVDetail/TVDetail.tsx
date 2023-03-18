import * as React from 'react';
import DetailLayout from '../../../../components/DetailLayout/DetailLayout';
import { useTVDetail } from '../../../../services/TV';
import Loading from '../../../../components/Loading/Loading';

export interface ITVDetailProps {}

export default function TVDetail(props: ITVDetailProps) {
  const { tvDetail, isLoading } = useTVDetail(100088);
  if (isLoading) return <Loading />;
  return <DetailLayout {...tvDetail} />;
}
