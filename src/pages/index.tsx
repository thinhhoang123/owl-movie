import styles from '@/styles/Home.module.scss';
import { SplideSlide } from '@splidejs/react-splide';
import {
  GetGenersMovie,
  GetMovieNowPlaying,
  GetPopularMovie,
} from '@/services/moive/movieService';
import ImageTMDB from '@/components/ImageTMDB';
import { IMovieList } from '@/services/moive/modal/INowPlayingModal';
import Carousel from '@/components/Carousel';
import { isMobile } from 'react-device-detect';
import Buttons from '@/components/Buttons';
import MovieCard from '@/components/MovieCard';
import Title from '@/components/Title';
import { Divider } from '@mui/material';
import { GetTrending } from '@/services/trendings/trendingService';
import { MediaType } from '@/enum/mediaType';
import { TimeWindow } from '@/enum/timeWindow';
import { TMDBImageURL } from '@/utils/TMDBImageURL';
import Badge from '@/components/Badges';

export default function Home() {
  const getMovieNowPlaying = GetMovieNowPlaying();
  const getTrendingMovies = GetTrending(MediaType.MOVIE, TimeWindow.DAY);
  const getTrendingTV = GetTrending(MediaType.TV, TimeWindow.DAY);
  const getPopularMovie = GetPopularMovie();
  const getGenersMovie = GetGenersMovie();

  if (
    getMovieNowPlaying.isLoading ||
    getTrendingMovies.isLoading ||
    getTrendingTV.isLoading ||
    getPopularMovie.isLoading ||
    getGenersMovie.isLoading
  )
    return <p>Loading....</p>;
  if (
    getMovieNowPlaying.isError ||
    getTrendingMovies.isError ||
    getTrendingTV.isError ||
    getPopularMovie.isError ||
    getGenersMovie.isError
  )
    return <p>Error</p>;

  return (
    <>
      {/* Banner home page */}
      <section className={styles['home-section__wrapper']}>
        <Carousel
          option={{ perPage: 1 }}
          render={getMovieNowPlaying.response?.results?.map(
            (movie: IMovieList) => {
              return (
                <SplideSlide key={movie.id}>
                  <BannerCard
                    {...movie}
                    genersMovie={getGenersMovie.response?.genres}
                  />
                </SplideSlide>
              );
            }
          )}
        />
      </section>

      {/* Trending */}
      <section className={styles['trending-section__wrapper']}>
        <Title title="Trending movie" />
        <Carousel
          option={{
            perPage: isMobile ? 1 : 5,
            gap: 30,
            pagination: false,
            breakpoints: {
              600: {
                perPage: 1,
              },
              900: {
                perPage: 3,
              },
            },
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
      </section>

      {/* <Divider /> */}

      {/* Trending TV show*/}
      <section className={styles['trending-tv-section__wrapper']}>
        <Title title="What's Popular on TV" />
        <Carousel
          option={{
            perPage: isMobile ? 1 : 5,
            gap: 30,
            pagination: false,
            breakpoints: {
              600: {
                perPage: 1,
              },
              900: {
                perPage: 3,
              },
            },
          }}
          render={getTrendingTV.response?.results?.map((movie: IMovieList) => {
            return (
              <SplideSlide key={movie.id}>
                <MovieCard {...movie} />
              </SplideSlide>
            );
          })}
        />
      </section>
      {/* <Divider /> */}

      {/* In theaters */}
      <section className={styles['theaters-section__wrapper']}>
        <Title title="In theaters" />
        <Carousel
          option={{
            perPage: isMobile ? 1 : 5,
            gap: 30,
            pagination: false,
            breakpoints: {
              600: {
                perPage: 1,
              },
              900: {
                perPage: 3,
              },
            },
          }}
          render={getPopularMovie.response?.results?.map(
            (movie: IMovieList) => {
              return (
                <SplideSlide key={movie.id}>
                  <MovieCard {...movie} />
                </SplideSlide>
              );
            }
          )}
        />
      </section>
      {/* <Divider /> */}
    </>
  );
}

const BannerCard: React.FC<any> = (props) => {
  return (
    <div
      className={styles['banner-card__wrap']}
      style={{ backgroundImage: `url(${TMDBImageURL(props.backdrop_path)})` }}
    >
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
          <div className={styles['banner_card_info__geners']}>
            {props.genre_ids.map((gener: any) => {
              return (
                <Badge
                  key={gener}
                  label={
                    props.genersMovie
                      ? props.genersMovie.find(
                          (geners: any) => geners.id == gener
                        )?.name
                      : null
                  }
                ></Badge>
              );
            })}
          </div>
          <p className={styles['banner_card_info__overview']}>
            {props?.overview}
          </p>
          <Buttons
            icon={<i className="fad fa-play-circle"></i>}
            className={styles['banner_card_info__watch_trailer']}
          >
            Watch trailer
          </Buttons>
        </div>
        <div className={styles['banner_card_poster']}>
          <ImageTMDB url={props?.poster_path} />
        </div>
      </div>
    </div>
  );
};
