import { IMovieList } from '@/services/moive/modal/INowPlayingModal';
import * as React from 'react';
import ImageTMDB from '../ImageTMDB';
import styles from './index.module.scss';

const MovieCard: React.FC<IMovieList> = (props) => {
  return (
    <div className={styles['movie-card__wrapper']}>
      <ImageTMDB
        url={props?.backdrop_path}
        className={styles['movie-card__image']}
      />
      <p className={styles.title}>
        <span>
          {2019} <span className={styles.dot}>&#x2022;</span>
        </span>
        🎬 {props.title}
      </p>
    </div>
  );
};

export default MovieCard;
