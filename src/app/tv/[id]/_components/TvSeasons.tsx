'use client';
import Title from '@/components/ui/title';
import { ISeasons } from '@/models/IGetDetails';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter, useSearchParams } from 'next/navigation';
import TvEpisodes from './TvEpisodes';
import { use, useEffect, useState } from 'react';

interface ITvSeasonsProps {
  id: string;
  seasons: ISeasons[];
}

export default function TvSeasons({ seasons, id }: ITvSeasonsProps) {
  const router = useRouter();
  const getParam = useSearchParams();
  const seasonNumber = getParam.get('season')
    ? Number(getParam.get('season'))
    : seasons[0].season_number;

  const handleSelectSeason = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`?season=${e}`);
  };

  return (
    <section className="mt-3">
      <Title>Seasons</Title>
      <div className="mt-3 mb-3">
        <Select onValueChange={handleSelectSeason} defaultValue={seasonNumber}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {seasons.map((season) => {
              return (
                <SelectItem value={season.season_number} key={season.id}>
                  {season.name}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      <TvEpisodes id={id} seasonNumber={seasonNumber.toString()} />
    </section>
  );
}
