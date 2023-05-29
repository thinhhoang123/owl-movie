import { MediaType } from '@/enum/mediaType';
import { AxiosGet } from '@/setup/axios/axiosMethod';
import useSWR from 'swr';

export function GetDiscover(mediaType: MediaType, query: object) {
  const { data, error, isLoading } = useSWR(`/discover/${mediaType}`, AxiosGet);
  return {
    response: data,
    isLoading,
    isError: error,
  };
}
