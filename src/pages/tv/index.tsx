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
import ListTV from '@/components/ListTV/ListTV';

export interface ITestProps {}

interface IDefaultState {
  page: number;
  year: string;
  genres: string;
  sort_by: string;
  total_pages: number;
}

const defaultState: IDefaultState = {
  page: 1,
  year: listYear[0].value,
  genres: '',
  sort_by: 'popularity.desc',
  total_pages: 0,
};

export default function Test(props: ITestProps) {
  const [state, setState] = useImmer(defaultState);
  const getGenresTV = GetGenres(MediaType.TV);

  if (getGenresTV.isLoading || !getGenresTV.response) return <p>Loading....</p>;
  if (getGenresTV.isError) return <p>Error</p>;

  const handleChangePage = (event: React.ChangeEvent<any>, page: number) => {
    setState((draft) => {
      draft.page = page;
    });
  };

  const genres: IDropdownList[] = getGenresTV.response.genres?.map((genre) => {
    return {
      value: genre.id,
      label: genre.name,
    };
  });

  const defaultFilter = [
    {
      inputLabel: 'Years',
      data: listYear,
      name: 'year',
      value: state.year || '',
    },
    {
      inputLabel: 'Genres',
      data: genres,
      name: 'with_genres',
      value: state.genres || '',
    },
    {
      inputLabel: 'Sort By',
      data: sortBy,
      name: 'sort_by',
      value: state.sort_by || '',
    },
  ];

  const handleFilter = (data: any) => {
    console.log(data);
    setState((draft) => {
      draft.year = data[0].value;
      draft.genres = data[1].value;
      draft.sort_by = data[2].value;
    });
  };

  const handlePagination = (data: any) => {
    setState((draft) => {
      draft.page = data.page;
      draft.total_pages = data.total_pages;
    });
  };
  return (
    <>
      <FilterHeader
        title="TV Show"
        defaultFilter={defaultFilter}
        onChange={handleFilter}
      />
      <ListTV
        page={state.page}
        genres={state.genres}
        sort_by={state.sort_by}
        year={state.year}
        handlePagination={handlePagination}
      />

      <div
        style={{
          display: 'grid',
          placeItems: ' center',
        }}
      >
        <Pagination
          defaultPage={state.page}
          count={state.total_pages}
          color="primary"
          showFirstButton
          showLastButton
          onChange={handleChangePage}
        />
      </div>
    </>
  );
}

