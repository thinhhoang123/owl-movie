import * as React from 'react';
import styles from './DetailLayout.module.scss';
import { TMDBImage } from '../../setup/ultils/GetImageTmdb';
import { Avatar, Container, Typography } from '@mui/material';
import moment from 'moment';
import ButtonCP from '../Button/ButtonCP';
import { IHeaderDetailProps } from './Model/IHeaderDetailProps';
import Badge from '../Badges/Badges';
import Image from '../Image/Image';

const HeaderDetail: React.FC<IHeaderDetailProps> = (props) => {
  const yearMovie = moment(props.first_air_date || '').year();
  return (
    <div className={styles['section-hero']}>
      <Image imgPath={props.backdrop_path} alt={props.name} />
      <div className={styles['hero-container']}>
        <div className={styles['info-container']}>
          <Typography variant="h4" className={styles['title-info']}>
            {props.name}{' '}
            {props.original_language !== 'en'
              ? `(${props.original_name})`
              : null}
          </Typography>
          <div className={styles['title-info-metadata-wrapper']}>
            <span className={styles['item-year']}>{yearMovie}</span>
            <span className={styles['item-space']}>|</span>
            <span className={styles['item-season']}>
              {props.number_of_seasons} Seasons
            </span>
            <span className={styles['item-space']}>|</span>
            <span className={styles['item-certification']}>
              <Badge label={props.certification} />
            </span>
            <span className={styles['item-space']}>|</span>
            <span className={styles['item-fact']}>
              {props.genres.map((gener) => {
                return <Badge key={gener.id} label={gener.name} />;
              })}
            </span>
          </div>

          <div className={styles['title-info-synopsis-talent']}>
            <Typography variant="body1">{props.overview}</Typography>
            <div className={styles['title-watch-trailer']}>
              <ButtonCP onClick={() => props.handleWatchTrailer(props.id)}>
                👉 Watch trailer
              </ButtonCP>
            </div>
            <div className={styles['title-info-talent']}>
              {props.created_by.map((creater, index) => {
                return (
                  <div className={styles['created-by']} key={index}>
                    <Avatar src={TMDBImage(creater.profile_path)} />
                    <Typography>{creater.name}</Typography>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetail;
