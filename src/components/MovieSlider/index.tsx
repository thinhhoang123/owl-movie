import * as React from 'react';
import Slider from 'react-slick';
import MovieCard from '../MovieCard/MovieCard';
import { AxiosResponse } from 'axios';
import { TrendingResponse } from '../../models/TrendingModel';
import TrendingServices from '../../services/TrendingService';

export interface IMovieSliderProps {}

export default function MovieSlider(props: IMovieSliderProps) {
  const [state, setState] = React.useState<any[]>([1, 2, 3]);
  React.useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () => {
    const res = await TrendingServices.getTrending();
    setState(res.data.results);
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2>Title</h2>
      <Slider {...settings}>
        {state.map((mv: any, index) => {
          return (
            <div key={index}>
              <MovieCard
                title={mv.original_title}
                backDrop={mv.backdrop_path}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
