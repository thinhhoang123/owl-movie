import { Avatar, Container } from '@mui/material';
import * as React from 'react';
import styles from './index.module.scss';
import ImageTMDB from '../ImageTMDB';
import Badges from '../Badges';
import Buttons from '../Buttons';
import { TMDBImageURL } from '@/utils/TMDBImageURL';
import Episodes from '../Episodes';
import { MediaType } from '@/enum/mediaType';

export interface IDetailLayoutProps {}

export default function DetailLayout(props: any) {
  return (
    <Container maxWidth="xl">
      {/* --- Header begin --- */}
      <div className={styles['section-hero']}>
        <ImageTMDB url={props.backdrop_path} className={styles['hero-image']} />
        <div className={styles['hero-container']}>
          <div className={styles['info-container']}>
            <h2 className={styles['title-info']}>
              {props.name}{' '}
              {props.original_language !== 'en'
                ? `(${props.original_name})`
                : null}
            </h2>
            <div className={styles['title-info-metadata-wrapper']}>
              <span className={styles['item-year']}>{2019}</span>
              <span className={styles['item-space']}>|</span>
              <span className={styles['item-season']}>
                {props.number_of_seasons} Seasons
              </span>
              <span className={styles['item-space']}>|</span>
              <span className={styles['item-certification']}>
                <Badges label={props.certification} />
              </span>
              <span className={styles['item-space']}>|</span>
              <span className={styles['item-fact']}>
                {props.genres.map((gener: any) => {
                  return <Badges key={gener.id} label={gener.name} />;
                })}
              </span>
            </div>

            <div className={styles['title-info-synopsis-talent']}>
              <p>{props.overview}</p>
              <div className={styles['title-watch-trailer']}>
                <Buttons onClick={() => props.handleWatchTrailer(props.id)}>
                  👉 Watch trailer
                </Buttons>
              </div>
              <div className={styles['title-info-talent']}>
                {props.created_by.map((creater: any, index: any) => {
                  return (
                    <div className={styles['created-by']} key={index}>
                      <Avatar src={TMDBImageURL(creater.profile_path)} />
                      <p>{creater.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- Header end --- */}
      {props.mediaType === MediaType.TV ? (
        <Episodes id={props.id} {...props} />
      ) : null}
    </Container>
  );
}
