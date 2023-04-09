import useSWR from 'swr';
import { IGetDetails } from './modal/IGetDetails';
import { AxiosGet } from '@/setup/axios/axiosMethod';
import { IGetContentRatings } from './modal/IGetContentRatings';
import { IGetTvSeasonDetails } from './modal/IGetTvSeasonDetails';
import { IGetCredits } from './modal/IGetCredits';

export function GetDetail(
  tvId: string | string[] | undefined,
  shouldFetch?: boolean
) {
  const { data, error, isLoading } = useSWR(
    `tv/${tvId}`,
    shouldFetch ? AxiosGet<IGetDetails> : null
  );
  return {
    response: data,
    isLoading,
    isError: error,
  };
}

export function GetCredits(
  tvId: string | string[] | undefined,
  shouldFetch?: boolean
) {
  const { data, error, isLoading } = useSWR(
    `tv/${tvId}/credits`,
    shouldFetch ? AxiosGet<IGetCredits> : null
  );
  return {
    response: data,
    isLoading,
    isError: error,
  };
}

export function GetContentRatings(
  tvId: string | string[] | undefined,
  shouldFetch?: boolean
) {
  const { data, error, isLoading } = useSWR(
    `tv/${tvId}/content_ratings`,
    shouldFetch ? AxiosGet<IGetContentRatings> : null
  );
  return {
    response: data,
    isLoading,
    isError: error,
  };
}

// TV Seasons
export function GetTvSeasonDetails(
  tvId: string | string[] | undefined,
  season_number: number,
  shouldFetch: boolean = true
) {
  const { data, error, isLoading } = useSWR(
    `tv/${tvId}/season/${season_number}`,
    shouldFetch ? AxiosGet<IGetTvSeasonDetails> : null
  );
  return {
    response: data,
    isLoading,
    isError: error,
  };
}
