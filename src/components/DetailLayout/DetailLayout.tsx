import * as React from 'react';
import HeaderDetail from './HeaderDetail';
import styles from './DetailLayout.module.scss';
import { Container } from '@mui/material';
import Videos from '../Videos/Videos';
import { VideosCategory, VideosType } from '../../enums/Videos';
import Episodes from '../Episodes/Episodes';
import Badge from '../Badges/Badges';
import { useAppDispatch } from '../../hooks/useRedux';
import { GetVideosTrailer } from '../../state/Videos/VideosReducer';
export interface IDetailLayoutProps {}

export default function DetailLayout(props: any) {
  const [movieId, setMovieId] = React.useState(0);
  const [openTrailer, setOpenTrailer] = React.useState(false);
  const dispatch = useAppDispatch();

  const handleWatchTrailer = (movieId: number) => {
    dispatch(
      GetVideosTrailer({
        category: VideosCategory.TV,
        videoId: movieId,
        type: VideosType.TRAILER,
      })
    );
    setOpenTrailer(true);
  };
  const handleClose = () => {
    setOpenTrailer(false);
  };

  return (
    <>
      <Container maxWidth="xl" className={styles['detail-layout']}>
        <HeaderDetail {...props} handleWatchTrailer={handleWatchTrailer} />
        <Episodes listSeason={props.listSeason} />
      </Container>
      {openTrailer ? (
        <Videos openVideo={openTrailer} onClose={handleClose} />
      ) : null}
    </>
  );
}
