import * as React from 'react';
import { Backdrop } from '@mui/material';
import YouTube from 'react-youtube';
import Loading from '../Loading/Loading';
import { isMobile } from 'react-device-detect';
import { VideosCategory, VideosType } from '../../enums/Videos';
import { useAppSelector } from '../../hooks/useRedux';
import Error from '../../pages/Error/Error';

export interface IVideosProps {
  openVideo: boolean;
  onClose: () => void;
}

const Videos: React.FC<IVideosProps> = ({ openVideo, onClose }) => {
  const videoData = useAppSelector((state) => state.videos);
  const opts = {
    height: isMobile ? '190' : '390',
    width: isMobile ? '340' : '640',
  };
  if (videoData.status === 'Loading') return <Loading />;
  if (videoData.status === 'reject') return <Error />;
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={openVideo}
      onClick={onClose}
    >
      {videoData.key ? (
        <YouTube videoId={videoData.key} opts={opts} loading={'lazy'} />
      ) : null}
    </Backdrop>
  );
};

export default Videos;
