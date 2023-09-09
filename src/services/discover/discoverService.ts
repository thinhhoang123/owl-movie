import { MediaType } from '@/enum/mediaType';
import { IDiscover, IDiscoverQuery } from '@/modal/IDiscover';
import { AxiosGet } from '@/setup/axios/axiosMethod';
import useSWR from 'swr';

export function GetDiscover(mediaType: MediaType, query: IDiscoverQuery) {
  const queryData = `page=${query.page}&language=en-US&sort_by=${query.sort_by}&first_air_date_year=${query.first_air_date_year}&with_genres=${query.with_genres}`;
  const { data, error, isLoading } = useSWR(
    `/discover/${mediaType}?${queryData}`,
    AxiosGet<IDiscover>
  );
  return {
    response: data,
    isLoading,
    isError: error,
  };
}

