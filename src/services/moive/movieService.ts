import { AxiosGet } from '@/setup/axios/axiosMethod';
import useSWR from 'swr';
import { INowPlayingResponse } from './modal/INowPlayingModal';
import { ITrendingMovieResponse } from './modal/ITrendingMovieModal';

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

export function GetTrendingMovies(trendingTime: 'week') {
  const { data, error, isLoading } = useSWR(
    `trending/movie/${trendingTime}`,
    AxiosGet<ITrendingMovieResponse>
  );
  return {
    response: data,
    isLoading,
    isError: error,
  };
}
