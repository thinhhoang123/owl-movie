import { AxiosGet } from '../setup/axios/axiosClient';
import useSWR from 'swr';

export function useNowPlaying() {
  const { data, error, isLoading } = useSWR(`movie/now_playing`, AxiosGet);
  return {
    nowPlaying: data,
    isLoading,
    isError: error,
  };
}
