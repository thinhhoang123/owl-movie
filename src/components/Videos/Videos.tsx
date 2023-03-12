import * as React from 'react';
import { Backdrop } from '@mui/material';
import YouTube from 'react-youtube';
import { useVideos } from '../../services/Movies';
import Loading from '../Loading/Loading';
import { isMobile } from 'react-device-detect';

export interface IVideosProps {
  openVideo: boolean;
  onClose: () => void;
  videoId: number;
  type: string;
}

export default function Videos({
  openVideo,
  onClose,
  videoId,
  type,
}: IVideosProps) {
  const { video, isLoading } = useVideos(videoId);
  const opts = {
    height: isMobile ? '190' : '390',
    width: isMobile ? '340' : '640',
  };

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={openVideo}
      onClick={onClose}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <YouTube
          videoId={video.results.find((movie: any) => movie.type === type)?.key}
          opts={opts}
          loading={'lazy'}
        />
      )}
    </Backdrop>
  );
}
