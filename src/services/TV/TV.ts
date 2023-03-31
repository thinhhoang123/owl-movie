import { AxiosGet } from '../../setup/axios/axiosClient';
import useSWR from 'swr';
import { IGetCredits } from './model/IGetCredits';
import { IGetDetails } from './model/IGetDetails';
import { IGetContentRatings } from './model/IGetContentRatings';
import { IGetTvSeasonDetails } from './model/IGetTvSeasonDetails';

export function GetDetail(tvId: number) {
  const { data, error, isLoading } = useSWR(`tv/${tvId}`, AxiosGet);
  const response: IGetDetails = data;
  return {
    response,
    isLoading,
    isError: error,
  };
}

export function GetCredits(tvId: number) {
  const { data, error, isLoading } = useSWR(`tv/${tvId}/credits`, AxiosGet);
  const response: IGetCredits = data;
  return {
    response,
    isLoading,
    isError: error,
  };
}

export function GetContentRatings(tvId: number) {
  const { data, error, isLoading } = useSWR(
    `tv/${tvId}/content_ratings`,
    AxiosGet
  );
  const response: IGetContentRatings = data;
  return {
    response,
    isLoading,
    isError: error,
  };
}

// TV Seasons
export function GetTvSeasonDetails(tvId: number, season_number: number) {
  const { data, error, isLoading } = useSWR(
    `tv/${tvId}/season/${season_number}`,
    AxiosGet
  );
  const response: IGetTvSeasonDetails = data;
  return {
    response,
    isLoading,
    isError: error,
  };
}
