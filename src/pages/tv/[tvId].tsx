import DetailLayout from '@/components/DetailLayout';
import { IDropdownList } from '@/components/Dropdown';
import { MediaType } from '@/enum/mediaType';
import { ISeasons } from '@/services/tv/modal/IGetDetails';
import {
  GetContentRatings,
  GetCredits,
  GetDetail,
} from '@/services/tv/tvService';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface ITVDetailProps {}

export default function TVDetail(props: ITVDetailProps) {
  const router = useRouter();
  const getDetailTV = GetDetail(router.query.tvId, router.isReady);
  const getCredits = GetCredits(router.query.tvId, router.isReady);
  const getContentRatings = GetContentRatings(
    router.query.tvId,
    router.isReady
  );
  if (
    getDetailTV.isLoading ||
    getCredits.isLoading ||
    getContentRatings.isLoading ||
    !router.isReady
  )
    return <p>Loading....</p>;
  if (getDetailTV.isError || getCredits.isError || getContentRatings.isError)
    return <p>Loading....</p>;

  const listSeason: IDropdownList[] | undefined =
    getDetailTV.response?.seasons.map((season: ISeasons) => {
      return {
        value: season.season_number,
        label: season.name,
      };
    });
  const certification = getContentRatings.response?.results.find(
    (rating) => rating.iso_3166_1 === 'US'
  );
  return (
    <DetailLayout
      {...getDetailTV.response}
      certification={certification?.rating}
      listSeason={listSeason}
      mediaType={MediaType.TV}
    />
  );
}
