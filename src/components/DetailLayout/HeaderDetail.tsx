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
}

const HeaderDetail: React.FC<IHeaderDetailProps> = (props) => {
  const yearMovie = moment(props.first_air_date || '').year();
  return (
    <div
      className={styles.headerDetail}
      style={{ backgroundImage: `url(${TMDBImage(props.backdrop_path)})` }}
    >
      <div className={styles.filterBackground}>
        <Container maxWidth="xl" className={styles.headerDetailContainer}>
          <img
            className={styles.posterPath}
            src={TMDBImage(props.poster_path)}
            loading="lazy"
          ></img>
          <div className={styles.detailInfo}>
            <Typography variant="h3" className={styles.detailName}>
              {props.original_name} (<span>{yearMovie}</span>)
            </Typography>
            <div className={styles.fact}>
              {props.genres.map((gener) => {
                return <ButtonCP key={gener.id}>{gener.name}</ButtonCP>;
              })}
              <span>|</span>
              <ButtonCP>{props.episode_run_time[0]}m</ButtonCP>
            </div>
            <Typography variant="h6" className={styles.tagLine}>
              {props.tagline}
            </Typography>
            <div className={styles.overview}>
              <Typography variant="h5">Overview</Typography>
              <p>{props.overview}</p>
            </div>
            <div className={styles.createdLayout}>
              {props.created_by.map((creater, index) => {
                return (
                  <div className={styles.createdBy} key={index}>
                    <Avatar src={TMDBImage(creater.profile_path)} />
                    <Typography>{creater.name}</Typography>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HeaderDetail;
