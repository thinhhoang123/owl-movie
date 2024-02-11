import Title from '@/components/ui/title';
import TmdbImage from '@/components/ui/tmdb-image';
import { ISeasons } from '@/models/IGetDetails';

interface ITvSeasonsProps {
  seasons: ISeasons[];
}

export default function TvSeasons({ seasons }: ITvSeasonsProps) {
  return (
    <div>
      <Title> Seasons</Title>
      {seasons.map((season) => {
        return (
          <div
            key={season.id}
            className="flex flex-col items-center border border-gray-200 shadow md:flex-row md:max-w-xl"
          >
            <TmdbImage
              src={season.poster_path}
              width={100}
              height={100}
              alt="logo"
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            />

            <div className="flex flex-col justify-between p-4 leading-normal backdrop-blur-xl">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {season.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {season.overview}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
