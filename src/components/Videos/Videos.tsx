import * as React from 'react';
import { Backdrop } from '@mui/material';
import YouTube from 'react-youtube';
import { useVideos } from '../../services/Movies';
import Loading from '../Loading/Loading';
import { isMobile } from 'react-device-detect';
import { VideosCategory, VideosType } from '../../enums/Videos';

export interface IVideosProps {
  openVideo: boolean;
  onClose: () => void;
  videoId: number;
  type: VideosType;
  category: VideosCategory;
}

const Videos: React.FC<IVideosProps> = ({
  openVideo,
  onClose,
  videoId,
  type,
  category,
}) => {
  const { video, isLoading } = useVideos(videoId, category);
  const opts = {
    height: isMobile ? '190' : '390',
    width: isMobile ? '340' : '640',
  };
  if (isLoading) return <Loading />;
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
          videoId={
            video.results.find(
              (movie: any) => movie.type === type && movie.official
            )?.key
          }
          opts={opts}
          loading={'lazy'}
        />
      )}
    </Backdrop>
  );
};

export default Videos;
