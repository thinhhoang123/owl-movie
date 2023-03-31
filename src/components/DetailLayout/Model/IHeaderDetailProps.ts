export interface IHeaderDetailProps {
  overview: string;
  original_name: string;
  name: string;
  episode_run_time: number[];
  first_air_date: string;
  poster_path: string;
  tagline: string;
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
  }[];
  genres: { id: number; name: string }[];
  vote_average: number;
  backdrop_path: string;
  number_of_seasons: number;
  original_language: string;
  certification: string;
  handleWatchTrailer: (movieId: number) => void;
  id: number;
}
