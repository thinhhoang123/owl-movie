import DetailLayout from '@/components/DetailLayout';
import { IDropdownList } from '@/components/Dropdown';
import { MediaType } from '@/enum/mediaType';
import { ISeasons } from '@/modal/IGetDetails';
import {
  GetContentRatings,
  GetCredits,
  GetDetail,
  GetTVImages,
} from '@/services/tv/tvService';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface ITVDetailProps {}

export default function TVDetail(props: ITVDetailProps) {
  const router = useRouter();
  const getDetailTV = GetDetail(router.query.tvId, router.isReady);
  const getCredits = GetCredits(router.query.tvId, router.isReady);
  const getTVImages = GetTVImages(router.query.tvId, router.isReady);

  const getContentRatings = GetContentRatings(
    router.query.tvId,
    router.isReady
  );
  if (
    getDetailTV.isLoading ||
    getCredits.isLoading ||
    getContentRatings.isLoading ||
    getTVImages.isLoading ||
    !router.isReady
  )
    return <p>Loading....</p>;
  if (
    getDetailTV.isError ||
    getCredits.isError ||
    getContentRatings.isError ||
    getTVImages.isError
  )
    return <p>Loading....</p>;

  const listSeason: IDropdownList[] = getDetailTV.response
    ? getDetailTV.response.seasons.map((season: ISeasons) => {
        return {
          value: season.season_number,
          label: season.name,
        };
      })
    : [];

  const certification = getContentRatings.response?.results.find(
    (rating) => rating.iso_3166_1 === 'US'
  );

  const getLogoOfTV = getTVImages.response?.logos[0].file_path;

  return (
    <DetailLayout
      {...getDetailTV.response}
      {...getCredits.response}
      certification={certification?.rating}
      listSeason={listSeason}
      mediaType={MediaType.TV}
      logos={getLogoOfTV}
    />
  );
}
