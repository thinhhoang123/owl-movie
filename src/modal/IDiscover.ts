import { IMovieList } from './INowPlayingModal';

export interface IDiscover {
  page: 1;
  results: IMovieList[];
  total_pages: 7545;
  total_results: 150882;
}

export interface IDiscoverMovie {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface IDiscoverQuery {
  page?: number;
  with_genres?: string;
  first_air_date_year?: string;
  language: string;
  sort_by: string;
}
