import { AxiosGet } from '@/setup/axios/axiosMethod';
import { ITrendingResponse } from '../../modal/ITrendingModal';
import { MediaType } from '@/enum/mediaType';
import useSWR from 'swr';

export function GetTrending(
  mediaType: MediaType,
  trendingTime: string = 'week'
) {
  const { data, error, isLoading } = useSWR(
    `trending/${mediaType}/${trendingTime}`,
    AxiosGet<ITrendingResponse>
  );
  return {
    response: data,
    isLoading,
    isError: error,
  };
}
