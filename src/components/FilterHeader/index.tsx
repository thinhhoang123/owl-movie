import * as React from 'react';
import styles from './index.module.scss';
import Dropdown from '../Dropdown';
import Title from '../Title';

export interface IFilterHeaderProps {
  defaultFilter: any;
  onChange: (data: any) => void;
}

export default function FilterHeader(props: IFilterHeaderProps) {
  const handleEpisodes = (data: any) => {
    const dataReturn = props.defaultFilter.map((filter: any) => {
      return {
        name: filter.name,
        value:
          data.key == filter.name ? (filter.value = data.value) : filter.value,
      };
    });
    props.onChange(dataReturn);
  };

  return (
    <section className={styles['filter-container']}>
      <Title title="TV shows" />
      <div className={styles['filter-dropdown']}>
        {props.defaultFilter.map((filter: any) => {
          console.log(filter);
          return (
            <Dropdown
              key={filter.name}
              data={filter.data}
              inputLabel={filter.inputLabel}
              name={filter.name}
              onChange={handleEpisodes}
              defaultValue={filter.defaultValue}
            />
          );
        })}
      </div>
    </section>
  );
}
