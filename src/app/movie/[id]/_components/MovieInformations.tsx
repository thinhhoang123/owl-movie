import TmdbImage from '@/components/ui/tmdb-image';
import IGetMovieImagesResponse from '@/models/IMovieLogo';
import { getMovieImage } from '@/services/movie';
import { Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { IGenre } from '@/models/IGener';
import moment from 'moment';

interface MovieInformationsProps {
  title: string;
  id: string;
  describe?: string;
  years?: string;
  generes?: IGenre[];
  duration?: number;
}

export default async function MovieInformations({
  title,
  id,
  describe,
  years,
  generes,
  duration,
}: MovieInformationsProps) {
  const movieImage: IGetMovieImagesResponse = await getMovieImage(id);
  const logo = movieImage?.logos[0]?.file_path;
  const yearsRelease = moment(years).year();
  return (
    <div className="relative z-10 h-full flex items-end bg-gradient-to-t from-black">
      <div className="flex flex-col container ">
        <div className="sm:w-full xl:w-1/2 flex flex-col gap-4 mb-5">
          <TmdbImage src={logo} height={350} width={300} alt="logo" />
          {!logo && <h1 className="text-3xl font-bold">{title}</h1>}
          <p className="text-gray-300">
            {yearsRelease} ◽ <span>{duration} minutes</span>{' '}
          </p>
          <div className="flex gap-2">
            {generes?.map((genere) => {
              return <Badge key={genere.id}>{genere.name}</Badge>;
            })}
          </div>
          <p className="text-gray-300">{describe}</p>
          <div>
            <Button>
              <Play className="mr-2 h-4 w-4" /> Watch trailer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
