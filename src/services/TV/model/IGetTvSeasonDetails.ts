import { ICrew } from './IGetCredits';

export interface IGetTvSeasonDetails {
  _id: string;
  air_date: string;
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
  episodes: IEpisodes[];
}
export interface IEpisodes {
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  crew: ICrew[];
}
