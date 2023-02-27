import * as React from 'react';
import styles from './RatingBadge.module.scss';
export interface IRatingProps {
  score: number;
}
enum COLOR_RATING {
  GOOD = 'dark:bg-green-200',
  MEDIUM = 'dark:bg-blue-200',
  BAD = 'dark:bg-amber-200',
  TOO_BAD = 'dark:bg-red-200',
}

const ratingPercentColor = (score: number) => {
  if (score > 70) return COLOR_RATING.GOOD;
  else if (score > 50) return COLOR_RATING.MEDIUM;
  else if (score > 30) return COLOR_RATING.BAD;
  else return COLOR_RATING.TOO_BAD;
};

export default function RatingBadge(props: IRatingProps) {
  const convertToPercent: number = +(Number(props.score) * 10).toFixed();
  let colorPercent: string = ratingPercentColor(convertToPercent);
  return (
    <div
      className={`${styles.ratingCircle} text-blue-800 text-sm font-semibold ${colorPercent} dark:text-neutral-800 `}
    >
      <span>{convertToPercent}%</span>
    </div>
  );
}
