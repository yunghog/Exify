import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {apiConfig} from './';

const DEFAULT_TIMEOUT = 30 * 1000;

const apiClient = axios.create({
  baseURL: apiConfig.baseUrl,
  timeout: DEFAULT_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    access_key: '77532f3fe2d2abeef819aee26f128525',
  },
});

apiClient.interceptors.response.use(
  response => {
    return {...response.data, status: response.status};
  },
  error => Promise.reject(error),
);

export class NetworkManager {
  static MyInstance: NetworkManager;

  static getInstance(): NetworkManager {
    if (!NetworkManager.MyInstance) {
      NetworkManager.MyInstance = new NetworkManager();
    }
    return NetworkManager.MyInstance;
  }

  appRequest = async <Type>(options: AxiosRequestConfig) => {
    return apiClient(options) as Promise<AxiosResponse>;
  };
}
