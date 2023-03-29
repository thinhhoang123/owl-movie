import * as React from 'react';
import styles from './MovieCard.module.scss';
import { TMDBImage } from '../../setup/ultils/GetImageTmdb';
import moment from 'moment-timezone';
import ButtonCP from '../Button/ButtonCP';

export interface IMovieCardProps {
  title?: string;
  backDrop: string;
  voteAverage: number;
  releaseDate?: string;
}

const MovieCard: React.FC<IMovieCardProps> = (props) => {
  const yearMovie = moment(props.releaseDate || '').year();
  return (
    <div className={styles.imgContainer}>
      <img src={TMDBImage(props.backDrop)} loading="lazy"></img>
      <div className={styles.blockDescription}>
        <ButtonCP
          className={styles.descriptionBtn}
          icon={<i className="fad fa-play"></i>}
        >
          <span className={styles.btnText}>Play now</span>
        </ButtonCP>
      </div>
      {/* <div className={styles.ratingPercent}></div> */}
      <h6 className={styles.title}>
        <span hidden={props.releaseDate ? false : true}>
          {yearMovie} <span className={styles.dot}>&#x2022;</span>
        </span>
        🎬 {props.title}
      </h6>
    </div>
  );
};
export default MovieCard;
