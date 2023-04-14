import { IMovieList } from './INowPlayingModal';

export interface IPopularMovie {
  page: number;
  results: IMovieList[];
  total_pages: number;
  total_results: number;
}
