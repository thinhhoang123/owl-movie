import { AxiosGet } from '../setup/axios/axiosClient';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

export function useNowPlaying() {
  const { data, error, isLoading } = useSWR(`movie/now_playing`, AxiosGet);
  return {
    nowPlaying: data,
    isLoading,
    isError: error,
  };
}
export function useNowPlaying1() {
  const { data, error, trigger } = useSWRMutation(
    `movie/now_playing`,
    async () => await AxiosGet
  );
  return {
    nowPlaying1: data,
    isError: error,
    trigger,
  };
}

export function useVideos(videoId: number, category: string) {
  const { data, error, isLoading } = useSWR(
    `${category}/${videoId}/videos`,
    AxiosGet
  );

  return {
    video: data,
    isLoading,
    isError: error,
  };
}
