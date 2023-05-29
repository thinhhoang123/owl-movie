import { MediaType } from '@/enum/mediaType';
import { IGenres } from '@/modal/IGener';
import { AxiosGet } from '@/setup/axios/axiosMethod';
import useSWR from 'swr';

export function GetGenres(mediaType: MediaType) {
  const { data, error, isLoading } = useSWR(
    `/genre/${mediaType}/list`,
    AxiosGet<IGenres>
  );
  return {
    response: data,
    isLoading,
    isError: error,
  };
}
