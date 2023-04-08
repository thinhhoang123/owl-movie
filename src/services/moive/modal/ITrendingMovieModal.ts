import { IMovieList } from './INowPlayingModal';

export interface ITrendingMovieResponse {
  page: number;
  results: IMovieList[];
  total_pages: number;
  total_results: number;
}
