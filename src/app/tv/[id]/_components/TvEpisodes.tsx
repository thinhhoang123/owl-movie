'use client';
import TmdbImage from '@/components/ui/tmdb-image';
import { IGetTvSeasonDetails } from '@/models/IGetTvSeasonDetails';
import { getTvEpisodes } from '@/services/tv';
import { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import moment from 'moment';
import { Skeleton } from '@/components/ui/skeleton';

interface TvEpisodesProps {
  id: string;
  seasonNumber: string;
}

export default function TvEpisodes({ id, seasonNumber }: TvEpisodesProps) {
  const [data, setData] = useState<IGetTvSeasonDetails>();
  useEffect(() => {
    const getEpisodes = async () => {
      const response = await getTvEpisodes(id, seasonNumber);
      setData(response);
    };
    getEpisodes();
  }, [id, seasonNumber]);
  return (
    <div>
      <h1 className="text-xl font-bold mb-3">{data?.name}</h1>
      <p className="text-sm">Release year: {moment(data?.air_date).year()}</p>
      <p className="text-sm mb-3">{data?.overview}</p>
      <ScrollArea className="h-96 w-full">
        <div className="flex flex-row flex-wrap gap-5 justify-between">
          {data?.episodes
            .filter((ep) => ep.name && ep.runtime)
            .map((ep) => {
              return (
                <div
                  key={ep.show_id}
                  className="flex flex-col items-center lg:items-start rounded-lg shadow md:flex-row md:max-w-xl "
                >
                  <TmdbImage
                    src={ep.still_path}
                    width={250}
                    height={250}
                    alt="string"
                  />
                  <div className="flex flex-col justify-between sm:p-0 lg:pl-4  leading-normal">
                    <h1 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                      {ep.episode_number}. {ep.name}
                    </h1>
                    <h1 className="text-xs font-normal text-gray-700 dark:text-gray-400 ">
                      {ep.runtime} minutes
                    </h1>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="text-left">
                          <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400 line-clamp-5">
                            {ep.overview}
                          </p>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-96"> {ep.overview}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              );
            })}
        </div>
      </ScrollArea>
    </div>
  );
}
