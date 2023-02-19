import * as React from 'react';
import MovieSlider from '../../../../components/MovieSlider/MovieSlider';
import { useTrending } from '../../../../services/TrendingService';

export interface ITrendingProps {}

export default function Trending(props: ITrendingProps) {
  const { trending, isLoading } = useTrending();

  if (isLoading) return <p>...Loading</p>;

  return <MovieSlider trending={trending} title={'Trending 🍿'} />;
}
