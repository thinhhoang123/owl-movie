import { AxiosGet } from '../setup/axios/axiosClient';
import useSWR from 'swr';

export function useTrending(trendingTime: string) {
  const { data, error, isLoading } = useSWR(
    `trending/movie/${trendingTime}`,
    AxiosGet
  );
  return {
    trending: data,
    isLoading,
    isError: error,
  };
}
