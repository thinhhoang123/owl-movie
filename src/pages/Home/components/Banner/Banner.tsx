import * as React from 'react';
import { useNowPlaying, useNowPlaying1 } from '../../../../services/Movies';
import styles from './Banner.module.scss';
import Carousel from '../../../../components/Carousel/Carousel';
import BannerCard from './BannerCard';
import Slider from 'react-slick';
import Videos from '../../../../components/Videos/Videos';
import { VideosCategory, VideosType } from '../../../../enums/Videos';
import { useAppDispatch } from '../../../../hooks/useRedux';
import { GetVideosTrailer } from '../../../../state/Videos/VideosReducer';

export interface IBannerProps {}

const Banner: React.FC<IBannerProps> = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  const [openTrailer, setOpenTrailer] = React.useState(false);
  const [movieId, setMovieId] = React.useState(0);
  const sliderRef = React.useRef<Slider>(null);
  const { nowPlaying, isLoading } = useNowPlaying();

  const dispatch = useAppDispatch();
  if (isLoading) return null;

  const handleClose = () => {
    sliderRef.current?.slickPlay();
    setMovieId(0);
    setOpenTrailer(false);
  };

  const handleOpen = (movieId: number) => {
    dispatch(
      GetVideosTrailer({
        category: VideosCategory.MOVIE,
        videoId: movieId,
        type: VideosType.TRAILER,
      })
    );
    sliderRef.current?.slickPause();
    setOpenTrailer(true);
  };

  return (
    <>
      <Carousel ref={sliderRef} setting={settings}>
        {nowPlaying?.results?.map((movie: any) => {
          return (
            <BannerCard
              movie={movie}
              key={movie.id}
              handleOpenTrailer={handleOpen}
            />
          );
        })}
      </Carousel>

      <Videos openVideo={openTrailer} onClose={handleClose} />
    </>
  );
};
export default Banner;
