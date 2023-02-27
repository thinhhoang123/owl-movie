import { Backdrop } from '@mui/material';
import * as React from 'react';
import YouTube from 'react-youtube';
import { useVideos } from '../../services/Movies';
import Loading from '../Loading/Loading';

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
  const videos = useVideos(videoId, type);
  if (videos && videos.isLoading && !videos.video) return <Loading />;
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={openVideo}
      onClick={onClose}
    >
      {videos?.isLoading ? (
        <Loading />
      ) : (
        <YouTube videoId={videos?.video?.key} />
      )}
    </Backdrop>
  );
}
