import { TMDBImageURL } from '@/utils/TMDBImageURL';
import Image from 'next/image';
import * as React from 'react';
import styles from './ImageTMDB.module.scss';

export interface IImageTMDBProps {
  url: string;
  className?: string;
}

export default function ImageTMDB(props: IImageTMDBProps) {
  return (
    <div className={styles['image-container']}>
      <Image
        src={TMDBImageURL(props.url)}
        alt="props.url"
        fill
        className={styles['image']}
        loading="lazy"
      />
    </div>
  );
}
