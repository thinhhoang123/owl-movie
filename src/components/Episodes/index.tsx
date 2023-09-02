import * as React from 'react';
import styles from './index.module.scss';
import Dropdown, { IDropdownList } from '../Dropdown';
import ListLayout from '../ListLayout';
import ImageTMDB from '../ImageTMDB';
import { GetTvSeasonDetails } from '@/services/tv/tvService';
import Title from '../Title';
import moment from 'moment';
import Carousel from '../Carousel';
import { isMobile } from 'react-device-detect';
import { SplideSlide } from '@splidejs/react-splide';

export interface IEpisodesProps {
  id: number;
  name: string;
  listSeason: IDropdownList[];
}

export default function Episodes(props: any) {
  const defaultSeason = props.listSeason.find((season: IDropdownList) => {
    return season.value === 1;
  }).value;

  const [seasonNumber, setSeasonNumber] = React.useState(defaultSeason);
  const getSeasonDetail = GetTvSeasonDetails(
    props.id,
    seasonNumber,
    Boolean(props.id)
  );
  const yearRelease = moment(getSeasonDetail.response?.air_date).year();

  const handleEpisodes = (season_number: { key: string; value: string }) => {
    console.log(season_number);
    setSeasonNumber(+season_number.value);
  };

  return (
    <section className={styles['episodes-container']}>
      <div className={styles['title-container']}>
        <Title title="Episodes" />
        <span className={styles['dot']}>&#x2022;</span>
        <span className={styles['title-tv']}>{props.name}</span>
      </div>
      <Dropdown
        name="season_number"
        data={props.listSeason}
        inputLabel="Episodes"
        onChange={handleEpisodes}
        defaultValue={defaultSeason}
      />
      {getSeasonDetail.isLoading ? (
        <p>loading...</p>
      ) : (
        <div className={styles['title-info']}>
          <p>Release year: {yearRelease}</p>
          <p className={styles['title-overview']}>
            {getSeasonDetail.response?.overview}
          </p>
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
            render={getSeasonDetail.response?.episodes
              .filter((episode) => {
                return episode.still_path !== null;
              })
              .map((episode: any, index: number) => {
                return (
                  <SplideSlide key={index}>
                    <EpisodesCard
                      episode_number={episode.episode_number}
                      still_path={episode.still_path}
                      overview={episode.overview}
                      name={episode.name}
                      key={index}
                    />
                  </SplideSlide>
                );
              })}
          />
        </div>
      )}
    </section>
  );
}

export interface IEpisodesCardProps {
  episode_number: number;
  still_path: string;
  overview: string;
  name: string;
}

const EpisodesCard = (props: IEpisodesCardProps) => {
  return (
    <div className={styles['episodes-card-container']}>
      <ImageTMDB url={props.still_path} />
      <p className={styles['episodes-name']}>
        {props.episode_number}. {}
        {props.name}
      </p>
      <p className={styles['episodes-overview']}>🔉{props.overview}</p>
    </div>
  );
};
