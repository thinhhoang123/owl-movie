import { MediaType } from '@/enum/mediaType';
import { ITrendingResponse } from '@/models/ITrendingModel';
import { getTrending } from '@/services/trending';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Title from '@/components/ui/title';
import TmdbImage from '@/components/ui/tmdb-image';

export default async function HomeTrending() {
  const data: ITrendingResponse = await getTrending(MediaType.MOVIE);
  return (
    <article>
      <Title>Trending movie</Title>
      <Carousel
        opts={{
          align: 'center',
        }}
        className="w-full"
      >
        <CarouselContent>
          {data.results.map((item) => (
            <CarouselItem
              key={item.title}
              className="md:basis-1/2 lg:basis-1/6"
            >
              <TmdbImage
                src={item.poster_path}
                width={500}
                height={500}
                alt={item.title}
                type={MediaType.MOVIE}
                id={item.id.toString()}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </article>
  );
}
