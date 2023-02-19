import * as React from 'react';
import MovieSlider from '../../components/MovieSlider';
import MovieCard from '../../components/MovieCard/MovieCard';
import TrendingServices from '../../services/TrendingService';
import { TrendingResponse } from '../../models/TrendingModel';
import { AxiosResponse } from 'axios';

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  React.useEffect(() => {
    getTrending();
  });

  const getTrending = async () => {
    const res: AxiosResponse<TrendingResponse> =
      await TrendingServices.getTrending();
    console.log(res);
  };
  return (
    <div>
      <MovieSlider />
    </div>
  );
}
