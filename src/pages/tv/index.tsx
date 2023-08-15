import FilterHeader from '@/components/FilterHeader';
import ListLayout from '@/components/ListLayout';
import MovieCard from '@/components/MovieCard';
import { MediaType } from '@/enum/mediaType';
import { IMovieList } from '@/modal/INowPlayingModal';
import { GetDiscover } from '@/services/discover/discoverService';
import { GetGenres } from '@/services/genres/genresService';
import { useImmer } from 'use-immer';
import { Pagination } from '@mui/material';
import * as React from 'react';
import sortBy from '@/enum/sortByDropdown';
import { IDropdownList } from '@/components/Dropdown';
import listYear from '@/enum/getListYear';

export interface ITestProps {}

interface IDefaultState {
  page: number;
  year: string;
  genres: string;
  sort_by: string;
}

const defaultState: IDefaultState = {
  page: 1,
  year: listYear[0].value,
  genres: '',
  sort_by: 'popularity.desc',
};

export default function Test(props: ITestProps) {
  const [state, setState] = useImmer(defaultState);
  const getGenresTV = GetGenres(MediaType.TV);
  const getDiscover = GetDiscover(MediaType.TV, {
    page: state.page,
    first_air_date_year: state.year,
    with_genres: state.genres,
    language: 'en-US',
    sort_by: state.sort_by,
  });

  if (getGenresTV.isLoading || !getGenresTV.response || getDiscover.isLoading)
    return <p>Loading....</p>;
  if (getGenresTV.isError || getDiscover.isError) return <p>Error</p>;

  const handleChangePage = (event: React.ChangeEvent<any>, page: number) => {
    setState((draft) => {
      draft.page = page;
    });
  };

  const genres: IDropdownList[] = getGenresTV.response.genres?.map((genre) => {
    return {
      value: genre.name,
      label: genre.name,
    };
  });

  const defaultFilter = [
    {
      inputLabel: 'Years',
      data: listYear,
      name: 'year',
      defaultValue: listYear[0].value,
      value: '',
    },
    {
      inputLabel: 'Genres',
      data: genres,
      name: 'with_genres',
      defaultValue: '',
      value: '',
    },
    {
      inputLabel: 'Sort By',
      data: sortBy,
      name: 'sort_by',
      defaultValue: 'popularity.desc',
      value: '',
    },
  ];

  const handleFilter = (data: any) => {
    data.forEach((element: any) => {
      if (element !== '') {
        setState((draft: any) => {
          draft[element.name] = element.value;
        });
      }
    });
  };
  return (
    <>
      <FilterHeader defaultFilter={defaultFilter} onChange={handleFilter} />
      <ListLayout widthCol={250}>
        {getDiscover.response?.results?.map((movie: IMovieList) => {
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
          defaultPage={state.page}
          count={getDiscover.response?.total_pages}
          color="primary"
          showFirstButton
          showLastButton
          onChange={handleChangePage}
        />
      </div>
    </>
  );
}
