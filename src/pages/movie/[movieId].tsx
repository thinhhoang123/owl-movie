import DetailLayout from '@/components/DetailLayout';
import { MediaType } from '@/enum/mediaType';
import { GetDetailMovie, GetMovieCredits } from '@/services/moive/movieService';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface IMovieDetailsProps {}

export default function MovieDetails(props: IMovieDetailsProps) {
  const router = useRouter();
  const getDetailMovie = GetDetailMovie(router.query.movieId, router.isReady);
  const getCredits = GetMovieCredits(router.query.movieId, router.isReady);

  if (getDetailMovie.isLoading || !router.isReady || getCredits.isLoading)
    return <p>Loading....</p>;
  if (getDetailMovie.isError || getCredits.isError) return <p>Loading....</p>;

  const getRating = getDetailMovie.response?.releases
    ? getDetailMovie.response.releases.countries.find((contruy) => {
        return contruy.iso_3166_1 == 'US';
      })?.certification
    : null;

  return (
    <DetailLayout
      {...getDetailMovie.response}
      {...getCredits.response}
      certification={getRating}
      mediaType={MediaType.MOVIE}
    />
  );
}
