import TmdbImage from '@/components/ui/tmdb-image';
import { IMovieDetail } from '@/models/IMovieDetail';
import { getDetailMovie } from '@/services/movie';
import MovieInformations from './_components/MovieInformations';
import HomeTrending from '@/app/home/_components/HomeTrending';

export default async function MovieId({ params }: { params: { id: string } }) {
  const { id } = params;
  const detailMovie: IMovieDetail = await getDetailMovie(id);
  return (
    <>
      <div className="h-[calc(100vh-84px)]">
        <TmdbImage
          src={detailMovie.backdrop_path!}
          fill
          alt={detailMovie.title}
          className="z-0"
        />
        <MovieInformations
          id={id}
          title={detailMovie.title}
          describe={detailMovie.overview}
          years={detailMovie.release_date}
          generes={detailMovie.genres}
          duration={detailMovie.runtime}
        />
        <HomeTrending />
      </div>
    </>
  );
}
