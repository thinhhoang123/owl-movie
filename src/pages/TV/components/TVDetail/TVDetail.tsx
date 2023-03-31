import * as React from 'react';
import DetailLayout from '../../../../components/DetailLayout/DetailLayout';
import {
  GetContentRatings,
  GetCredits,
  GetDetail,
} from '../../../../services/TV/TV';
import Loading from '../../../../components/Loading/Loading';
import { useParams } from 'react-router-dom';
import Error from '../../../Error/Error';
import { VideosCategory } from '../../../../enums/Videos';

export interface ITVDetailProps {}

/**
 * API for this page
 * GET /tv/{tv_id}
 * GET /tv/{tv_id}/credits (get cast)
 * GET /tv/{tv_id}/content_ratings (Get certificate)
 *
 */

export default function TVDetail(props: ITVDetailProps) {
  const { id } = useParams();
  const getTVDetail = GetDetail(Number(id));
  const getCredits = GetCredits(Number(id));
  const getContentRatings = GetContentRatings(Number(id));

  if (
    getTVDetail.isLoading ||
    getCredits.isLoading ||
    getContentRatings.isLoading
  )
    return <Loading />;
  const certification = getContentRatings.response.results.find(
    (rating) => rating.iso_3166_1 === 'US'
  );
  return (
    <DetailLayout
      {...getTVDetail.response}
      {...getCredits.response}
      certification={certification?.rating}
      category={VideosCategory.TV}
    />
  );
}
