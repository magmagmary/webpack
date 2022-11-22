import { EnhancedStore } from '@reduxjs/toolkit';
import { publicAction } from '@src/store/publicSlice';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import i18next from 'i18next';

let axiosRequestInterceptorId = -1;
let axiosResponseInterceptorId = -1;

function axiosInterceptors(store: EnhancedStore) {
  const baseUrl = process.env.IDP_BASE_URL;
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = baseUrl;
  store.dispatch(publicAction.setAxiosInstanceState('active'));

  if (axiosRequestInterceptorId === -1) {
    axiosRequestInterceptorId = axios.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        config.headers = {
          ...config.headers,
          'Accept-Language': i18next.language,
        };
        return config;
      },
    );
  }

  if (axiosResponseInterceptorId === -1) {
    axiosResponseInterceptorId = axios.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        if (error.response) {
          return Promise.reject(error);
        }
      },
    );
  }
}

const axiosClient = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setupAxiosInterceptors: axiosInterceptors,
};

export default axiosClient;
