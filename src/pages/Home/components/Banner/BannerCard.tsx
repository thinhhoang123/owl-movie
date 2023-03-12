import { isMobile } from 'react-device-detect';
import { TMDBImage } from '../../../../setup/ultils/GetImageTmdb';
import styles from './Banner.module.scss';
import { Tooltip } from '@mui/material';

const BannerCard = ({ movie, handleOpenTrailer }: any) => {
  return (
    <div className={styles.bannerContainer}>
      <img
        src={TMDBImage(isMobile ? movie?.poster_path : movie?.backdrop_path)}
        loading="lazy"
        className={styles.bannerImg}
      ></img>
      <div className={styles.bannerInfo}>
        <div className={styles.bannerCard}>
          <h2 className={styles.bannerTitle} hidden={isMobile}>
            {movie?.original_title}
          </h2>
          <p>
            <span className={styles.bannerTextTitle}>
              <i className="fab fa-imdb" style={{ fontSize: '1.5rem' }}></i>
            </span>{' '}
            {movie?.vote_average}
          </p>
          <p className={styles.bannerOverview} hidden={isMobile}>
            {movie?.overview}
          </p>
          {/* <i className="fad fa-play-circle"></i> */}
        </div>
      </div>
      <Tooltip title="Play trailer">
        <div
          className={styles.playTrailer}
          onClick={() => handleOpenTrailer(movie.id)}
        >
          <i className="fad fa-play-circle"></i>
        </div>
      </Tooltip>
    </div>
  );
};

export default BannerCard;
