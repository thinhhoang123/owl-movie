import { Avatar, Container } from '@mui/material';
import * as React from 'react';
import styles from './index.module.scss';
import ImageTMDB from '../ImageTMDB';
import Badges from '../Badges';
import Buttons from '../Buttons';
import { TMDBImageURL } from '@/utils/TMDBImageURL';
import Episodes from '../Episodes';
import { MediaType } from '@/enum/mediaType';
import moment from 'moment';
import { SplideSlide } from '@splidejs/react-splide';
import Carousel from '../Carousel';
import Title from '../Title';
import stringAvatar from '@/utils/stringAvatar';
import MovieCard from '../MovieCard';

export interface IDetailLayoutProps {}

export default function DetailLayout(props: any) {
  const yearRelease = moment(
    props.mediaType == MediaType.TV ? props.first_air_date : props.release_date
  ).year();

  const getCastCrew = [...props.cast, ...props.crew.slice(0, 30)];

  return (
    <Container maxWidth="xl">
      {/* --- Header begin --- */}
      <div className={styles['section-hero']}>
        <ImageTMDB url={props.backdrop_path} />
        <div className={styles['hero-container']}>
          <div className={styles['info-container']}>
            <h2 className={styles['title-info']}>
              {props.logos ? <ImageTMDB url={props.logos} /> : null}
              {props.mediaType == MediaType.TV ? props.name : props.title}{' '}
              {props.original_language !== 'en'
                ? `(${
                    props.mediaType == MediaType.TV
                      ? props.original_name
                      : props.original_title
                  })`
                : null}
            </h2>
            <div className={styles['title-info-metadata-wrapper']}>
              <span className={styles['item-year']}>{yearRelease}</span>
              {props.mediaType == MediaType.TV ? (
                <>
                  <span className={styles['item-space']}>|</span>
                  <span className={styles['item-season']}>
                    {props.number_of_seasons} Seasons
                  </span>
                </>
              ) : null}
              {props.certification ? (
                <>
                  <span className={styles['item-space']}>|</span>
                  <span className={styles['item-certification']}>
                    <Badges label={props.certification} />
                  </span>
                </>
              ) : null}
              <span className={styles['item-space']}>|</span>
              <span className={styles['item-fact']}>
                {props.genres
                  ? props.genres.map((gener: any) => {
                      return <Badges key={gener.id} label={gener.name} />;
                    })
                  : null}
              </span>
            </div>

            <div className={styles['title-info-synopsis-talent']}>
              <p className={styles['title-overview']}>{props.overview}</p>
              <div className={styles['title-watch-trailer']}>
                <Buttons
                  onClick={() => {}}
                  icon={<i className="fad fa-play-circle"></i>}
                >
                  Watch trailer
                </Buttons>
              </div>
              <div className={styles['title-info-talent']}>
                {props.created_by
                  ? props.created_by.map((creater: any, index: any) => {
                      return (
                        <div className={styles['created-by']} key={index}>
                          <Avatar src={TMDBImageURL(creater.profile_path)} />
                          <p>{creater.name}</p>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- Header end --- */}

      {/* --- Episode begin --- */}
      {props.mediaType === MediaType.TV ? (
        <Episodes id={props.id} {...props} />
      ) : null}
      {/* --- Episode end --- */}

      {/* --- Cast & crew begin --- */}
      <Title title="Cast & Crew" />
      <Carousel
        option={{
          perPage: 8,
          gap: 30,
          pagination: false,
          breakpoints: {
            600: {
              perPage: 2,
            },
            900: {
              perPage: 4,
            },
          },
        }}
        render={getCastCrew.map((creater: any, index: any) => {
          return (
            <SplideSlide key={index}>
              <div className={styles['cast__wrapper']} key={index}>
                <Avatar
                  src={TMDBImageURL(creater.profile_path)}
                  {...stringAvatar(creater.name)}
                  sx={{ width: 150, height: 150 }}
                />

                <h4>{creater.name}</h4>
                <p>{creater.character}</p>
              </div>
              {/* {props.crew.map((creater: any, index: any) => {
                return (
                  <div className={styles['cast__wrapper']} key={index}>
                    <Avatar
                      src={TMDBImageURL(creater.profile_path)}
                      sx={{ width: 150, height: 150 }}
                    />
                    <h4>{creater.name}</h4>
                    <p>{creater.character}</p>
                  </div>
                );
              })} */}
            </SplideSlide>
          );
        })}
      />

      {/* --- Cast & crew end --- */}

      {/* --- Recommendations --- */}
      <Title title="Recommendations" />
      <Carousel
        option={{
          perPage: 8,
          gap: 30,
          pagination: false,
          breakpoints: {
            600: {
              perPage: 2,
            },
            900: {
              perPage: 4,
            },
          },
        }}
        render={props.listRecommendations.map((creater: any, index: any) => {
          return (
            <SplideSlide key={index}>
              <MovieCard {...creater} />
            </SplideSlide>
          );
        })}
      />
      {/* --- Recommendations --- */}
    </Container>
  );
}

