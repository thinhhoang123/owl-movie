import { AxiosGet } from '../setup/axios/axiosClient';
import useSWR from 'swr';

export function useNowPlaying() {
  const { data, error, isLoading } = useSWR(`movie/now_playing`, AxiosGet);
  return {
    nowPlaying: data,
    isLoading,
    isError: error,
  };
}

export function useVideos(videoId: number, type: string) {
  if (!videoId) return { video: null, isLoading: false, isError: false };
  const { data, error, isLoading } = useSWR(
    `movie/${videoId}/videos`,
    AxiosGet
  );
  if (!isLoading) {
    const movieWithType = data.results.find(
      (movie: any) => movie.type === type
    );
    return {
      video: movieWithType,
      isLoading,
      isError: error,
    };
  }
}
