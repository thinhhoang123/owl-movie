import { AxiosGet } from '@/setup/axios/axiosMethod';
import useSWR from 'swr';

import { IGenres } from '../../modal/IGener';
import { IPopularMovie } from '@/modal/IPopularMovie';
import { INowPlayingResponse } from '@/modal/INowPlayingModal';
import { IMovieDetail } from '@/modal/IMovieDetail';
import { IGetCredits } from '@/modal/IGetCredits';

export function GetMovieNowPlaying() {
  const { data, error, isLoading } = useSWR(
    `movie/now_playing`,
    AxiosGet<INowPlayingResponse>
  );
  return {
    response: data,
    isLoading,
    isError: error,
  };
}

export function GetPopularMovie() {
  const { data, error, isLoading } = useSWR(
    `movie/popular`,
    AxiosGet<IPopularMovie>
  );
  return {
    response: data,
    isLoading,
    isError: error,
  };
}

export function GetDetailMovie(
  movieId: string | string[] | undefined,
  shouldFetch?: boolean
) {
  const { data, error, isLoading } = useSWR(
    `movie/${movieId}`,
    shouldFetch
      ? async (url) => {
          return await AxiosGet<IMovieDetail>(url, {
            append_to_response: 'releases',
          });
        }
      : null
  );
  return {
    response: data,
    isLoading,
    isError: error,
  };
}

export function GetTopRateMovie() {
  const { data, error, isLoading } = useSWR(
    `movie/top_rated`,
    AxiosGet<IPopularMovie>
  );
  return {
    response: data,
    isLoading,
    isError: error,
  };
}
export function GetMovieCredits(
  movieId: string | string[] | undefined,
  shouldFetch?: boolean
) {
  const { data, error, isLoading } = useSWR(
    `movie/${movieId}/credits`,
    shouldFetch ? AxiosGet<IGetCredits> : null
  );
  return {
    response: data,
    isLoading,
    isError: error,
  };
}
