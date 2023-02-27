import * as React from 'react';
import Carousel from '../../../../components/Carousel/Carousel';
import { TMDBImage } from '../../../../setup/ultils/GetImageTmdb';
import styles from './Banner.module.scss';
import { isMobile } from 'react-device-detect';
import Button from '../../../../components/Button/Button';
import { useNowPlaying, useVideos } from '../../../../services/Movies';
import Loading from '../../../../components/Loading/Loading';
import { TrendingResponseList } from '../../../../models/TrendingModel';
import Videos from '../../../../components/Videos/Videos';
import { EVideosType } from '../../../../enum/VideosType';
import Slider from 'react-slick';

export interface IBannerProps {}

export default function Banner(props: IBannerProps) {
  const [openTrailer, setOpenTrailer] = React.useState(false);
  const [movieId, setMovieId] = React.useState(0);
  const { nowPlaying, isLoading } = useNowPlaying();
  const sliderRef = React.useRef<Slider>(null);

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
      <Carousel setting={settings} ref={sliderRef}>
        {nowPlaying.results.map((movie: TrendingResponseList) => {
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
          type={EVideosType.TRAILER}
        />
      ) : null}
    </>
  );
}

function BannerCard({ movie, handleOpenTrailer }: IBannerCard) {
  return (
    <div className={styles.bannerContain}>
      <img
        src={TMDBImage(isMobile ? movie.poster_path : movie.backdrop_path)}
        loading="lazy"
        className={styles.bannerImg}
      ></img>
      <div className={styles.bannerInfo}>
        <div className={styles.bannerCard}>
          <h2 className={styles.bannerTitle}>{movie?.original_title} 👏</h2>
          <p>
            <span className={styles.bannerTextTitle}>IMDB:</span>{' '}
            {movie?.vote_average}
          </p>
          <p className={styles.bannerOverview}>{movie?.overview}</p>
          <Button onClick={() => handleOpenTrailer(movie.id)}>
            Watch trailer
          </Button>
        </div>
      </div>
    </div>
  );
}
interface IBannerCard {
  movie: TrendingResponseList;
  handleOpenTrailer: (movieId: number) => void;
}
