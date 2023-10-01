import * as React from 'react';
import styles from './index.module.scss';
import Dropdown from '../Dropdown';

export interface IFilterHeaderProps {
  title: string;
  defaultFilter: any;
  onChange: (data: any) => void;
}

function FilterHeader(props: IFilterHeaderProps) {
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
      <h2>{props.title}</h2>
      <div className={styles['filter-dropdown']}>
        {props.defaultFilter.map((filter: any) => {
          return (
            <Dropdown
              key={filter.name}
              data={filter.data}
              inputLabel={filter.inputLabel}
              name={filter.name}
              onChange={handleEpisodes}
              value={filter.value}
              clear
            />
          );
        })}
      </div>
    </section>
  );
}

export default React.memo(FilterHeader);

