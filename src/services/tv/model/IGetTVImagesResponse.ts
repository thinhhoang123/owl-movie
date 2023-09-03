import IImages from '@/modal/IImages';

export default interface IGetTVImageResponse {
  backdrops: IImages[];
  id: number;
  logos: IImages[];
  posters: IImages[];
}
