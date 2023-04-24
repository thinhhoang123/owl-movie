import { TMDBImageURL } from '@/utils/TMDBImageURL';
import Image from 'next/image';
import * as React from 'react';
import styles from './ImageTMDB.module.scss';

export interface IImageTMDBProps {
  url: string;
  className?: string;
  alt?: string;
}

export default function ImageTMDB(props: IImageTMDBProps) {
  return (
    <div className={styles['image-container']}>
      <Image
        src={TMDBImageURL(props.url)}
        alt={TMDBImageURL(props.url)}
        fill
        className={styles['image']}
        sizes="100vw,
      50vw,
      33vw"
        priority
      />
    </div>
  );
}
