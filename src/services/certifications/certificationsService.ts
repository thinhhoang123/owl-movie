import { MediaType } from '@/enum/mediaType';
import { IDiscover } from '@/modal/IDiscover';
import { AxiosGet } from '@/setup/axios/axiosMethod';
import useSWR from 'swr';

export function GetCertifications(mediaType: MediaType, query?: object) {
  const { data, error, isLoading } = useSWR(
    `/certification/${mediaType}/list`,
    AxiosGet<IDiscover>
  );
  return {
    response: data,
    isLoading,
    isError: error,
  };
}
