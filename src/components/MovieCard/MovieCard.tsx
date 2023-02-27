import * as React from 'react';
import styles from './MovieCard.module.scss';
import { TMDBImage } from '../../setup/ultils/GetImageTmdb';
import Button from '../Button/Button';
import RatingBadge from '../RatingBadge/RatingBadge';

export interface IMovieCardProps {
  title?: string;
  backDrop: string;
  voteAverage: number;
}

export default function MovieCard(props: IMovieCardProps) {
  return (
    <div className={styles.imgBox}>
      <img src={TMDBImage(props.backDrop)} loading="lazy"></img>
      <div className={styles.blockDescription}>
        <h6 className={styles.title}>🎬 {props.title}</h6>
        <Button icon="fas fa-play">
          <span className={styles.btnText}>Play now</span>
        </Button>
      </div>
      <div className={styles.ratingPercent}>
        <RatingBadge score={props.voteAverage} />
      </div>
    </div>
  );
}
