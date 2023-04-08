import styles from '@/styles/Home.module.scss';
import { SplideSlide } from '@splidejs/react-splide';
import {
  GetMovieNowPlaying,
  GetTrendingMovies,
} from '@/services/moive/movieService';
import ImageTMDB from '@/components/ImageTMDB';
import { IMovieList } from '@/services/moive/modal/INowPlayingModal';
import Carousel from '@/components/Carousel';
import { isMobile } from 'react-device-detect';
import Buttons from '@/components/Buttons';
import MovieCard from '@/components/MovieCard';
import Title from '@/components/Title';

export default function Home() {
  const getMovieNowPlaying = GetMovieNowPlaying();
  const getTrendingMovies = GetTrendingMovies('week');

  if (getMovieNowPlaying.isLoading || getTrendingMovies.isLoading)
    return <p>Loading....</p>;
  if (getMovieNowPlaying.isError || getTrendingMovies.isError)
    return <p>Error</p>;

  return (
    <>
      {/* Banner home page */}
      <div className={styles['banner__wrapper']}>
        <Carousel
          render={getMovieNowPlaying.response?.results?.map(
            (movie: IMovieList) => {
              return (
                <SplideSlide key={movie.id}>
                  <BannerCard {...movie} />
                </SplideSlide>
              );
            }
          )}
        />
      </div>

      {/* Trending */}
      <Title title="Trending" />
      <Carousel
        option={{
          perPage: 4,
          rewind: true,
          gap: 30,
          pagination: false,
        }}
        render={getTrendingMovies.response?.results?.map(
          (movie: IMovieList) => {
            return (
              <SplideSlide key={movie.id}>
                <MovieCard {...movie} />
              </SplideSlide>
            );
          }
        )}
      />
    </>
  );
}

const BannerCard: React.FC<IMovieList> = (props) => {
  return (
    <div className={styles['banner-card__wrap']}>
      <ImageTMDB url={isMobile ? props?.poster_path : props?.backdrop_path} />
      <div className={styles['banner_card_info__wrapper']}>
        <div className={styles['banner_card_info__content']}>
          <h1 className={styles['banner_card_info__move-title']}>
            {props?.original_title}
          </h1>
          <p>
            <span className={styles['banner_card_info__imdb']}>
              <i className="fab fa-imdb" style={{ fontSize: '1.5rem' }}></i>
            </span>{' '}
            {props?.vote_average}
          </p>
          <p className={styles['banner_card_info__overview']} hidden={isMobile}>
            {props?.overview}
          </p>
          <Buttons icon={<i className="fad fa-play-circle"></i>}>
            Watch trailer
          </Buttons>
        </div>
      </div>
    </div>
  );
};

