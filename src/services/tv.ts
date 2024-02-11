import { FetchServer } from '@/lib/fetcherServer';

export async function getDetailTv(id: string) {
  const response = await FetchServer.get(`tv/${id}`);
  return await response;
}

export async function getTvImage(id: string) {
  const response = await FetchServer.get(
    `tv/${id}/images?include_image_language=en&language=en}`
  );
  return await response;
}
