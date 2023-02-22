import * as React from 'react';
import MovieSlider from '../../../../components/MovieSlider/MovieSlider';
import { useTrending } from '../../../../services/TrendingService';
import Loading from '../../../../components/Loading/Loading';

export interface ITrendingProps {}

export default function Trending(props: ITrendingProps) {
  const { trending, isLoading } = useTrending();

  if (isLoading) return <Loading />;

  return <MovieSlider trending={trending} title={'Trending 🍿'} />;
}
