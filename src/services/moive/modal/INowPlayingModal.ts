export interface INowPlayingResponse {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovieList[];
  total_pages: number;
  total_results: number;
}

export interface IMovieList {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
