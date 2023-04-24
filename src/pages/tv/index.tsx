import Layout from '@/components/Layout';
import ListLayout from '@/components/ListLayout';
import MovieCard from '@/components/MovieCard';
import { MediaType } from '@/enum/mediaType';
import { IMovieList } from '@/modal/INowPlayingModal';
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
  if (getMovieNowPlaying.isLoading) return <p>Loading....</p>;
  if (getMovieNowPlaying.isError) return <p>Error</p>;

  return (
    <>
      <h2>TV shows</h2>

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
        />
      </div>
    </>
  );
}
