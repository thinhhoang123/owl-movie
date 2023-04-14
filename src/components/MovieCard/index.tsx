import { IMovieList } from '@/services/moive/modal/INowPlayingModal';
import * as React from 'react';
import ImageTMDB from '../ImageTMDB';
import styles from './index.module.scss';
import { MediaType } from '@/enum/mediaType';
import { useRouter } from 'next/router';
export interface IMovieCardProps extends IMovieList {}
const MovieCard: React.FC<IMovieCardProps> = (props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${props.media_type}/${props.id}`);
  };
  return (
    <div className={styles['movie-card__wrapper']} onClick={handleClick}>
      <ImageTMDB
        url={props?.poster_path}
        className={styles['movie-card__image']}
      />
    </div>
  );
};

export default MovieCard;
