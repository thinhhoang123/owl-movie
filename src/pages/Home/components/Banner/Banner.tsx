import * as React from 'react';
import { useNowPlaying } from '../../../../services/Movies';
import Loading from '../../../../components/Loading/Loading';
import styles from './Banner.module.scss';
import Carousel from '../../../../components/Carousel/Carousel';
import BannerCard from './BannerCard';
import Slider from 'react-slick';
import Videos from '../../../../components/Videos/Videos';
import { VideosType } from '../../../../enums/VideoType';

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
  if (isLoading) return <Loading />;

  const handleClose = () => {
    sliderRef.current?.slickPlay();
    setMovieId(0);
    setOpenTrailer(false);
  };

  const handleOpen = (movieId: number) => {
    sliderRef.current?.slickPause();
    setMovieId(movieId);
    setOpenTrailer(true);
  };

  return (
    <>
      <Carousel ref={sliderRef} setting={settings}>
        {nowPlaying.results.map((movie: any) => {
          return (
            <BannerCard
              movie={movie}
              key={movie.id}
              handleOpenTrailer={handleOpen}
            />
          );
        })}
      </Carousel>

      {movieId ? (
        <Videos
          openVideo={openTrailer}
          onClose={handleClose}
          videoId={movieId}
          type={VideosType.TRAILER}
        />
      ) : null}
    </>
  );
};
export default Banner;
