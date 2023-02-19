import axios, { AxiosResponse } from 'axios';
const { VITE_BASE_URL, VITE_API_KEY } = import.meta.env;

const axiosClient = axios.create({
  baseURL: VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const AxiosGet = (url: string) => {
  const urlQuery = url + `?api_key=${VITE_API_KEY}`;
  return axiosClient.get(urlQuery);
};

export default axiosClient;
