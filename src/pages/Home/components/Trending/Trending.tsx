import * as React from 'react';
import MovieSlider from '../../../../components/MovieSlider/MovieSlider';
import { useTrending } from '../../../../services/TrendingService';
import BasicTabs from '../../../../components/BasicTabs/BasicTabs';
import styles from './Trending.module.scss';

export interface ITrendingProps {}

const trendingMovieTime: { id: number; label: string; value: string }[] = [
  { id: 0, label: 'today', value: 'day' },
  { id: 1, label: 'this week', value: 'week' },
];

export default function Trending(props: ITrendingProps) {
  const [trendingTime, setTrendingTime] = React.useState(
    trendingMovieTime[0].value
  );
  const { trending, isLoading } = useTrending(trendingTime);

  const handleChangeTabs = (value: number) => {
    const trendingTimeSelect: any = trendingMovieTime.find(
      (time) => time.id === value
    );
    setTrendingTime(trendingTimeSelect.value);
  };

  return (
    <MovieSlider
      trending={trending}
      titleRender={() => (
        <span className={styles.title}>
          <p>Trending 🍿</p>
          <BasicTabs
            tabs={trendingMovieTime}
            onChange={handleChangeTabs}
            defaultValue={
              trendingMovieTime.find((time) => time.value === trendingTime)
                ?.id || 0
            }
          />
        </span>
      )}
      isLoading={isLoading}
    />
  );
}
