import { AxiosGet } from '@/setup/axios/axiosMethod';
import useSWR from 'swr';
import { INowPlayingResponse } from './modal/INowPlayingModal';
import { IPopularMovie } from './modal/IPopularMovie';

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
