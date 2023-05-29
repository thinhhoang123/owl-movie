import FilterHeader from '@/components/FilterHeader';
import Layout from '@/components/Layout';
import ListLayout from '@/components/ListLayout';
import MovieCard from '@/components/MovieCard';
import { MediaType } from '@/enum/mediaType';
import { IMovieList } from '@/modal/INowPlayingModal';
import { GetGenres } from '@/services/genres/genresService';
import { GetMovieNowPlaying } from '@/services/moive/movieService';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Pagination,
  TablePagination,
} from '@mui/material';
import * as React from 'react';

export interface ITestProps {}

export default function Test(props: ITestProps) {
  const getMovieNowPlaying = GetMovieNowPlaying();
  const getGenresTV = GetGenres(MediaType.TV);
  if (
    getMovieNowPlaying.isLoading ||
    getGenresTV.isLoading ||
    !getGenresTV.response
  )
    return <p>Loading....</p>;
  if (getMovieNowPlaying.isError || getGenresTV.isError) return <p>Error</p>;

  const handleChangePage = (e: React.ChangeEvent<any>, page: number) => {
    console.log(page);
  };

  return (
    <>
      <FilterHeader genres={getGenresTV.response} />
      <ListLayout widthCol={250}>
        {getMovieNowPlaying.response?.results?.map((movie: IMovieList) => {
          return (
            <MovieCard {...movie} key={movie.id} media_type={MediaType.MOVIE} />
          );
        })}
      </ListLayout>
      <div
        style={{
          display: 'grid',
          placeItems: ' center',
        }}
      >
        <Pagination
          defaultPage={1}
          count={10}
          color="primary"
          showFirstButton
          showLastButton
          onChange={handleChangePage}
        />
      </div>
    </>
  );
}
