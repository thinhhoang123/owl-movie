import DetailLayout from '@/components/DetailLayout';
import { MediaType } from '@/enum/mediaType';
import {
  GetDetailMovie,
  GetMovieCredits,
  GetMovieImage,
} from '@/services/moive/movieService';
import GetRecommendation from '@/services/recommendationsService.ts';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface IMovieDetailsProps {}

export default function MovieDetails(props: IMovieDetailsProps) {
  const router = useRouter();
  const getDetailMovie = GetDetailMovie(router.query.movieId, router.isReady);
  const getCredits = GetMovieCredits(router.query.movieId, router.isReady);
  const getMovieImages = GetMovieImage(router.query.movieId, router.isReady);
  const getRecommendations = GetRecommendation(
    MediaType.MOVIE,
    router.query.movieId,
    router.isReady
  );
  if (
    getDetailMovie.isLoading ||
    !router.isReady ||
    getCredits.isLoading ||
    getMovieImages.isLoading ||
    getRecommendations.isLoading
  )
    return <p>Loading....</p>;
  if (
    getDetailMovie.isError ||
    getCredits.isError ||
    getMovieImages.isError ||
    getRecommendations.isError
  )
    return <p>Loading....</p>;

  const getRating = getDetailMovie.response?.releases
    ? getDetailMovie.response.releases.countries.find((contruy) => {
        return contruy.iso_3166_1 == 'US';
      })?.certification
    : null;
  const getLogo = getMovieImages.response?.logos[0].file_path;

  return (
    <DetailLayout
      {...getDetailMovie.response}
      {...getCredits.response}
      certification={getRating}
      mediaType={MediaType.MOVIE}
      logos={getLogo}
      listRecommendations={getRecommendations.response?.results}
    />
  );
}
