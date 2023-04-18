export interface IGetContentRatings {
  results: IResult[];
  id: number;
}

export interface IResult {
  descriptors: string[];
  iso_3166_1: string;
  rating: string;
}
