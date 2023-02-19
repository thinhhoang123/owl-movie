import { AxiosResponse } from 'axios';
import { TrendingResponse } from '../models/TrendingModel';
import { AxiosGet } from '../setup/axios/axiosClient';

const TrendingServices = {
  getTrending(): Promise<AxiosResponse<any, any>> {
    const url = 'trending/movie/week';
    return AxiosGet(url);
  },
};

export default TrendingServices;
