import useSWR from 'swr';
import { AxiosGet } from '@/setup/axios/axiosMethod';
import { MediaType } from '@/enum/mediaType';
import { INowPlayingResponse } from '@/modal/INowPlayingModal';

export default function GetRecommendation(
  mediaType: MediaType,
  id: string | string[] | undefined,
  shouldFetch?: boolean
) {
  const { data, error, isLoading } = useSWR(
    `${mediaType}/${id}/recommendations?language=en-US&page=1`,
    shouldFetch ? AxiosGet<INowPlayingResponse> : null
  );
  return {
    response: data,
    isLoading,
    isError: error,
  };
}
