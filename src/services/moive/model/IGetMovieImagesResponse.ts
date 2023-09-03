import IImages from '@/modal/IImages';

export default interface IGetMovieImagesResponse {
  id: number;
  backdrops: IImages[];
  posters: IImages[];
  logos: IImages[];
}
