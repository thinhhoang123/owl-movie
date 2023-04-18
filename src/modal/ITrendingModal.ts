import { IMovieList } from './INowPlayingModal';

export interface ITrendingResponse {
  page: number;
  results: IMovieList[];
  total_pages: number;
  total_results: number;
}
