import * as React from 'react';
import HeaderDetail from './HeaderDetail';
import styles from './DetailLayout.module.scss';
import { Container } from '@mui/material';
import Videos from '../Videos/Videos';
import { VideosType } from '../../enums/Videos';
import Episodes from '../Episodes/Episodes';
import Badge from '../Badges/Badges';
export interface IDetailLayoutProps {}

export default function DetailLayout(props: any) {
  console.log(props);
  const [movieId, setMovieId] = React.useState(0);
  const [openTrailer, setOpenTrailer] = React.useState(false);

  const handleWatchTrailer = (movieId: number) => {
    setMovieId(movieId);
    setOpenTrailer(true);
  };
  const handleClose = () => {
    setMovieId(0);
    setOpenTrailer(false);
  };
  return (
    <>
      <Container maxWidth="xl" className={styles['detail-layout']}>
        <HeaderDetail {...props} handleWatchTrailer={handleWatchTrailer} />
        <Episodes listSeason={props.listSeason} />
      </Container>
      {movieId ? (
        <Videos
          openVideo={openTrailer}
          onClose={handleClose}
          videoId={movieId}
          type={VideosType.TRAILER}
          category={props.category}
        />
      ) : null}
    </>
  );
}
