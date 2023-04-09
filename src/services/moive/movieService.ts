import { AxiosGet } from '@/setup/axios/axiosMethod';
import useSWR from 'swr';
import { INowPlayingResponse } from './modal/INowPlayingModal';

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
