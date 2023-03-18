import { AxiosGet } from '../setup/axios/axiosClient';
import useSWR from 'swr';

export function useTVDetail(tvId: number) {
  const { data, error, isLoading } = useSWR(`tv/${tvId}`, AxiosGet);

  return {
    tvDetail: data,
    isLoading,
    isError: error,
  };
}
