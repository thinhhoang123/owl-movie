import * as React from 'react';
import styles from './MovieCard.module.scss';
import { TMDBImage } from '../../setup/ultils/GetImageTmdb';
import Button from '../Button/Button';
import RatingBadge from '../RatingBadge/RatingBadge';
import moment from 'moment-timezone';

export interface IMovieCardProps {
  title?: string;
  backDrop: string;
  voteAverage: number;
  releaseDate?: string;
}

export default function MovieCard(props: IMovieCardProps) {
  const getYearMovie = moment(props.releaseDate || '').year();
  return (
    <div className={styles.imgBox}>
      <img src={TMDBImage(props.backDrop)} loading="lazy"></img>
      <div className={styles.blockDescription}>
        <Button icon="fas fa-play">
          <span className={styles.btnText}>Play now</span>
        </Button>
      </div>
      <div className={styles.ratingPercent}>
        <RatingBadge score={props.voteAverage} />
      </div>
      <h6 className={styles.title}>
        <span hidden={props.releaseDate ? false : true}>
          {getYearMovie} &#x2022;
        </span>
        🎬 {props.title}
      </h6>
    </div>
  );
}
