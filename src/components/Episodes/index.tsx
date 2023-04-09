import * as React from 'react';
import styles from './index.module.scss';
import Dropdown, { IDropdownList } from '../Dropdown';
import ListLayout from '../ListLayout';
import ImageTMDB from '../ImageTMDB';
import { GetTvSeasonDetails } from '@/services/tv/tvService';
import Title from '../Title';
export interface IEpisodesProps {}

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

  const handleEpisodes = (season_number: string) => {
    setSeasonNumber(+season_number);
  };

  return (
    <section className={styles['episodes-container']}>
      <div className={styles['title-container']}>
        <Title title="Episodes" />
        <span className={styles['dot']}>&#x2022;</span>
        <span className={styles['title-tv']}>{props.name}</span>
      </div>
      <Dropdown
        data={props.listSeason}
        inputLabel="Episodes"
        onChange={handleEpisodes}
        defaultValue={defaultSeason}
      />
      {getSeasonDetail.isLoading ? (
        <p>loading...</p>
      ) : (
        <div className={styles['title-info']}>
          <p>Release year: {getSeasonDetail.response?.air_date}</p>
          <p className={styles['title-overview']}>
            {getSeasonDetail.response?.overview}
          </p>
          <ListLayout>
            {getSeasonDetail.response?.episodes.map(
              (episode: any, index: number) => {
                return <EpisodesCard {...episode} key={index} />;
              }
            )}
          </ListLayout>
        </div>
      )}
    </section>
  );
}
const EpisodesCard = (props: any) => {
  return (
    <div className={styles['episodes-card-container']}>
      <ImageTMDB url={props.still_path} />
      <p className={styles['episodes-name']}>
        {props.episode_number}. {}
        {props.name}
      </p>
      <p className={styles['episodes-overview']}>🔎{props.overview}</p>
    </div>
  );
};
