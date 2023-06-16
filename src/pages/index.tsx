import styles from '@/styles/Home.module.scss';
import { SplideSlide } from '@splidejs/react-splide';
import {
  GetMovieNowPlaying,
  GetPopularMovie,
  GetTopRateMovie,
} from '@/services/moive/movieService';
import ImageTMDB from '@/components/ImageTMDB';
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
import { IMovieList } from '@/modal/INowPlayingModal';
import { GetGenres } from '@/services/genres/genresService';
import ReactYoutube from '@/components/ReactYoutube';
import * as React from 'react';

export default function Home() {
  const getMovieNowPlaying = GetMovieNowPlaying();
  const getTrendingMovies = GetTrending(MediaType.MOVIE, TimeWindow.DAY);
  const getTrendingTV = GetTrending(MediaType.TV, TimeWindow.DAY);
  const getPopularMovie = GetPopularMovie();
  const getGenresMovie = GetGenres(MediaType.MOVIE);
  const getTopRateMovie = GetTopRateMovie();

  const [open, setOpen] = React.useState(false);
  const [movieId, setMovieId] = React.useState();

  if (
    getMovieNowPlaying.isLoading ||
    getTrendingMovies.isLoading ||
    getTrendingTV.isLoading ||
    getPopularMovie.isLoading ||
    getGenresMovie.isLoading ||
    getTopRateMovie.isLoading
  )
    return <p>Loading....</p>;
  if (
    getMovieNowPlaying.isError ||
    getTrendingMovies.isError ||
    getTrendingTV.isError ||
    getPopularMovie.isError ||
    getGenresMovie.isError ||
    getTopRateMovie.isError
  )
    return <p>Error</p>;

  const handleOpenTrailer = (data: any) => {
    console.log(data);
    setMovieId(data.id);
    setOpen(true);
  };
  const handleCloseTrailer = (data: boolean) => {
    setOpen(data);
  };

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
                    GenresMovie={getGenresMovie.response?.genres}
                    openTrailer={handleOpenTrailer}
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
                  <MovieCard {...movie} media_type={MediaType.MOVIE} />
                </SplideSlide>
              );
            }
          )}
        />
      </section>

      {/* Top rate */}
      <section className={styles['theaters-section__wrapper']}>
        <Title title="Top Rated Movies" />
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
          render={getTopRateMovie.response?.results?.map(
            (movie: IMovieList) => {
              return (
                <SplideSlide key={movie.id}>
                  <MovieCard {...movie} media_type={MediaType.MOVIE} />
                </SplideSlide>
              );
            }
          )}
        />
      </section>
      <Divider />
      <ReactYoutube
        isOpen={open}
        close={handleCloseTrailer}
        videoId={movieId}
        mediaType={MediaType.MOVIE}
      />
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
                    props.GenresMovie
                      ? props.GenresMovie.find(
                          (Genres: any) => Genres.id == gener
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
            onClick={() => props.openTrailer(props)}
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
