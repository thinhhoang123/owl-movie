import * as React from 'react';
import { TMDBImage } from '../../setup/ultils/GetImageTmdb';
import styles from './Image.module.scss';

export interface IImageProps {
  imgPath: string;
  alt: string;
}

export default function Image(props: IImageProps) {
  return (
    <img
      src={TMDBImage(props.imgPath)}
      alt={props.alt}
      className={styles['image']}
      loading="lazy"
    />
  );
}
