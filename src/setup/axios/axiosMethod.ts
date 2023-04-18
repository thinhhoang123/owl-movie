import axiosClient from './axisosClient';

export function AxiosGet<T>(url: string, query?: object): Promise<T> {
  return axiosClient
    .get<T>(url, {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        ...query,
      },
    })
    .then((res) => res.data)
    .catch((ex) => ex);
}
