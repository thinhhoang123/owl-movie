import { AxiosGet } from '../setup/axios/axiosClient';
import useSWR from 'swr';

export function useTrending() {
  const { data, error, isLoading } = useSWR('trending/movie/week', AxiosGet);
  return {
    trending: data,
    isLoading,
    isError: error,
  };
}
