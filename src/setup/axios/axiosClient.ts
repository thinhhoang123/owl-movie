import axios, { AxiosResponse } from 'axios';
const { VITE_BASE_URL, VITE_API_KEY } = import.meta.env;

const axiosClient = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const AxiosGet = (url: string) => {
  return axiosClient
    .get(url, {
      params: {
        api_key: VITE_API_KEY,
      },
    })
    .then((res) => res.data);
};

export default axiosClient;
