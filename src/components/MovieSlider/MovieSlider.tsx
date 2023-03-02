import * as React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { TrendingResponse } from '../../models/TrendingModel';
import styles from './MovieSlider.module.scss';
import Loading from '../Loading/Loading';
import Carousel from '../Carousel/Carousel';
export interface IMovieSliderProps {
  trending: TrendingResponse;
  title?: string;
  titleRender: () => JSX.Element;
  isLoading: boolean;
}

export default function MovieSlider(props: IMovieSliderProps) {
  return (
    <div>
      <h2 className={styles.trendingText}>
        {props.titleRender() || props.title}
      </h2>
      {props.isLoading ? (
        <Loading />
      ) : (
        <Carousel>
          {props.trending.results.map((mv: any, index) => {
            return (
              <MovieCard
                key={index}
                title={mv.original_title}
                backDrop={mv.backdrop_path}
                voteAverage={mv.vote_average}
              />
            );
          })}
        </Carousel>
      )}
    </div>
  );
}
