import { Backdrop } from '@mui/material';
import styles from './index.module.scss';
import * as React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { MediaType } from '@/enum/mediaType';
import { GetVideos } from '@/services/Videos/videoService';

export interface IReactYoutubeProps {
  isOpen: boolean;
  close: (data: boolean) => void;
  videoId?: string | number;
  mediaType?: MediaType;
}

export default function ReactYoutube(props: IReactYoutubeProps) {
  const getVideos = GetVideos(props.mediaType, props.videoId);

  const handleClose = () => {
    props.close(false);
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  if (getVideos.isLoading) return <p>Loading....</p>;
  if (getVideos.isError) return <p>Error</p>;
  const videoIdTrailer = getVideos.response?.results?.find((videoTrailer) => {
    return (
      videoTrailer.type == 'Trailer' &&
      (videoTrailer.name == 'Final trailer' ||
        videoTrailer.name == 'Official Trailer')
    );
  });

  console.log(videoIdTrailer);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.isOpen}
      onClick={handleClose}
    >
      <YouTube
        videoId={videoIdTrailer?.key}
        opts={opts}
        loading={'lazy'}
        onReady={onPlayerReady}
      />
    </Backdrop>
  );
}
