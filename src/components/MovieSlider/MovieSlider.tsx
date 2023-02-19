import * as React from 'react';
import Slider from 'react-slick';
import MovieCard from '../MovieCard/MovieCard';
import { TrendingResponse } from '../../models/TrendingModel';
import styles from './MovieSlider.module.scss';
export interface IMovieSliderProps {
  trending: TrendingResponse;
  title: string;
}

export default function MovieSlider(props: IMovieSliderProps) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h2 className={styles.trendingText}>{props.title}</h2>
      <Slider {...settings}>
        {props.trending.results.map((mv: any, index) => {
          return (
            <div key={index}>
              <MovieCard
                title={mv.original_title}
                backDrop={mv.backdrop_path}
                voteAverage={mv.vote_average}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
