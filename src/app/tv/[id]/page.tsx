import HomeTrending from '@/app/home/_components/HomeTrending';
import TmdbImage from '@/components/ui/tmdb-image';
import { getDetailTv } from '@/services/tv';
import TvInformations from './_components/TvInformations';
import TvSeasons from './_components/TvSeasons';

export default async function TvId({ params }: { params: { id: string } }) {
  const { id } = params;
  const detailTv = await getDetailTv(id);
  return (
    <div className="h-[calc(100vh-84px)]">
      <TmdbImage
        src={detailTv.backdrop_path!}
        fill
        alt={detailTv.title}
        className="z-0"
      />
      <TvInformations
        id={id}
        title={detailTv.title}
        describe={detailTv.overview}
        years={detailTv.first_air_date}
        generes={detailTv.genres}
        seasons={detailTv.seasons.length}
      />
      <div className="container">
        <TvSeasons seasons={detailTv.seasons} />
      </div>
    </div>
  );
}
