import useSWR from 'swr';
import { AxiosGet } from '@/setup/axios/axiosMethod';
import { MediaType } from '@/enum/mediaType';
import { IGetVideos } from '@/modal/IGetVideos';

export function GetVideos(mediaType?: MediaType, id?: string | number) {
  let isFetchData: boolean = true;
  if (!mediaType || !id) isFetchData = false;

  const { data, error, isLoading } = useSWR(
    `${mediaType}/${id}/videos`,
    isFetchData ? AxiosGet<IGetVideos> : null
  );
  return {
    response: data,
    isLoading,
    isError: error,
  };
}
