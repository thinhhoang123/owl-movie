import { AxiosGet } from '../../setup/axios/axiosClient';
import useSWR from 'swr';
import { IGetCredits } from './model/GetCredits';
import { IGetDetails } from './model/GetDetails';

export function GetDetail(tvId: number) {
  const { data, error, isLoading } = useSWR(`tv/${tvId}`, AxiosGet);
  const response: IGetDetails = data;
  return {
    response,
    isLoading,
    isError: error,
  };
}

export function GetCredits(tvId: number) {
  const { data, error, isLoading } = useSWR(`tv/${tvId}/credits`, AxiosGet);
  const response: IGetCredits = data;
  return {
    response,
    isLoading,
    isError: error,
  };
}
