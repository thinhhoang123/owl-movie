import * as React from 'react';
import styles from './DetailLayout.module.scss';
import { TMDBImage } from '../../setup/ultils/GetImageTmdb';
import { Avatar, Container, Typography } from '@mui/material';
import moment from 'moment';
import ButtonCP from '../Button/ButtonCP';

/**
 * overview
 * original_name
 * episode_run_time
 * first_air_date
 * poster_path
 * tagline
 * created_by
 * genres
 * vote_average
 * backdrop_path
 *  */
export interface IHeaderDetailProps {
  overview: string;
  original_name: string;
  episode_run_time: number[];
  first_air_date: string;
  poster_path: string;
  tagline: string;
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
  }[];
  genres: { id: number; name: string }[];
  vote_average: number;
  backdrop_path: string;
  number_of_seasons: number;
}

const HeaderDetail: React.FC<IHeaderDetailProps> = (props) => {
  const yearMovie = moment(props.first_air_date || '').year();
  return (
    <div className={styles['section-hero']}>
      <img src={TMDBImage(props.backdrop_path)} alt="" />
      <div className={styles['hero-container']}>
        <div className={styles['info-container']}>
          <Typography variant="h4" className={styles['title-info']}>
            {props.original_name}
          </Typography>
          <div className={styles['title-info-metadata-wrapper']}>
            <span className={styles['title-info-metadata-item item-year']}>
              {yearMovie}
            </span>
            <span className={styles['title-info-metadata-item item-space']}>
              |
            </span>
            <span className={styles['title-info-metadata-item item-season']}>
              {props.number_of_seasons} Seasons
            </span>
            <span className={styles['title-info-metadata-item item-space']}>
              |
            </span>
            <span className={styles['title-info-metadata-item item-fact']}>
              {props.genres.map((gener) => {
                return <ButtonCP key={gener.id}>{gener.name}</ButtonCP>;
              })}
            </span>
          </div>
          <div className={styles['title-info-synopsis-talent']}>
            <Typography variant="body1">{props.overview}</Typography>
            <div className={styles['title-info-talent']}>
              {props.created_by.map((creater, index) => {
                return (
                  <div className={styles['created-by']} key={index}>
                    <Avatar src={TMDBImage(creater.profile_path)} />
                    <Typography>{creater.name}</Typography>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetail;
