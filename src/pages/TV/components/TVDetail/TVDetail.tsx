import * as React from 'react';
import DetailLayout from '../../../../components/DetailLayout/DetailLayout';
import { GetCredits, GetDetail } from '../../../../services/TV/TV';
import Loading from '../../../../components/Loading/Loading';

export interface ITVDetailProps {}

/**
 * API for this page
 * GET /tv/{tv_id}
 * GET /tv/{tv_id}/credits (get cast)
 *
 */

export default function TVDetail(props: ITVDetailProps) {
  const getTVDetail = GetDetail(100088);
  const getCredits = GetCredits(100088);

  if (getTVDetail.isLoading || getCredits.isLoading) return <Loading />;

  return <DetailLayout {...getTVDetail.response} {...getCredits.response} />;
}
