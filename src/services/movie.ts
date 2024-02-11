import { FetchServer } from '@/lib/fetcherServer';

export async function getDetailMovie(id: string) {
  const response = await FetchServer.get(`movie/${id}`);
  return await response;
}

export async function getMovieImage(id: string) {
  const response = await FetchServer.get(
    `movie/${id}/images?include_image_language=en&language=en}`
  );
  return await response;
}
