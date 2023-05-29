import * as React from 'react';
import styles from './index.module.scss';
import Dropdown, { IDropdownList } from '../Dropdown';
import { IGenres } from '@/modal/IGener';
import Title from '../Title';

export interface IFilterHeaderProps {
  genres: IGenres;
}
const yearToday = new Date().getFullYear();
const years: IDropdownList[] = [];

for (let i = yearToday; i >= 1883; i--) {
  years.push({
    label: i.toString(),
    value: i.toString(),
  });
}

const sortBy = [
  { value: 'popularity.desc', label: 'Popularity Desc' },
  { value: 'popularity.asc', label: 'Popularity Asc' },
  { value: 'release_date.desc', label: 'Release Date Desc' },
  { value: 'release_date.asc', label: 'Release Date Asc' },
  { value: 'vote_count.desc', label: 'Vote Desc' },
  { value: 'vote_count.asc', label: ' Vote Asc' },
  { value: 'original_title.asc', label: 'Title (A-Z)' },
  { value: 'original_title.desc', label: 'Title (Z-A)' },
];

export default function FilterHeader(props: IFilterHeaderProps) {
  const handleEpisodes = () => {
    console.log('ab');
  };

  const genres: IDropdownList[] = props.genres.genres.map((genre) => {
    return {
      value: genre.id,
      label: genre.name,
    };
  });

  return (
    <section className={styles['filter-container']}>
      <Title title="TV shows" />
      <div className={styles['filter-dropdown']}>
        <Dropdown
          data={years}
          inputLabel="Years"
          onChange={handleEpisodes}
          defaultValue={years[0].value}
        />
        <Dropdown data={genres} inputLabel="Genres" onChange={handleEpisodes} />
        <Dropdown
          data={sortBy}
          inputLabel="Sort By"
          onChange={handleEpisodes}
        />
      </div>
    </section>
  );
}
