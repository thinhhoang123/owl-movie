import * as React from 'react';
import ListLayout from '../ListLayout';
import { GetDiscover } from '@/services/discover/discoverService';
import { MediaType } from '@/enum/mediaType';
import { IMovieList } from '@/modal/INowPlayingModal';
import MovieCard from '../MovieCard';

export interface IListTVProps {
  page: number;
  year: string;
  genres: string;
  sort_by: string;
  handlePagination: (data: any) => void;
}

export default function ListTV(props: IListTVProps) {
  const getDiscover = GetDiscover(MediaType.TV, {
    page: props.page,
    first_air_date_year: props.year,
    with_genres: props.genres,
    language: 'en-US',
    sort_by: props.sort_by,
  });
  if (getDiscover.isLoading) return <p>Loading....</p>;
  if (getDiscover.isError) return <p>Error</p>;
  const pagiantion = {
    page: getDiscover.response?.page,
    total_pages: getDiscover.response?.total_pages,
    total_results: getDiscover.response?.total_results,
  };
  props.handlePagination(pagiantion);
  return (
    <ListLayout widthCol={250}>
      {getDiscover.response?.results?.map((movie: IMovieList) => {
        return (
          <MovieCard {...movie} key={movie.id} media_type={MediaType.MOVIE} />
        );
      })}
    </ListLayout>
  );
}
