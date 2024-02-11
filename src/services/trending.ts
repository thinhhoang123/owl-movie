import { MediaType } from '@/enum/mediaType';
import { FetchServer } from '@/lib/fetcherServer';

export async function getTrending(
  mediaType: MediaType,
  trendingTime: string = 'week'
) {
  const response = await FetchServer.get(
    `trending/${mediaType}/${trendingTime}`
  );
  return await response;
}
