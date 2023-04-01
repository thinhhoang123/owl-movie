import * as React from 'react';
import { useTrending } from '../../../../services/TrendingService';
import BasicTabs from '../../../../components/BasicTabs/BasicTabs';
import styles from './Trending.module.scss';
import { ITapProps } from '../../../../components/BasicTabs/BasicTabsModel';
import Loading from '../../../../components/Loading/Loading';

const MovieSlider = React.lazy(
  () => import('../../../../components/MovieSlider/MovieSlider')
);

export interface ITrendingProps {}

const trendingMovieTime: ITapProps[] = [
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
    <React.Suspense fallback={<Loading />}>
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
    </React.Suspense>
  );
}
