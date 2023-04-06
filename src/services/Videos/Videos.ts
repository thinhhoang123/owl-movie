import useSWRMutation from 'swr/mutation';
import { AxiosGet } from '../../setup/axios/axiosClient';

export function GetVideos(videoId: number, category: string) {
  const { data, error, trigger } = useSWRMutation(
    `${category}/${videoId}/videos`,
    AxiosGet
  );
  console.log(data);
  return {
    response: data,
    isError: error,
    trigger,
  };
}
