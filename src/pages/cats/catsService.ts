import axiosClient from '@src/plugins/axios';
import { AxiosResponse } from 'axios';
import { ICat } from './catsInterfaces';
import { Cat } from './catsModel';

const uiAccountEndpoint = `${process.env.IDP_BASE_URL}`;

export const getCats = async function (): Promise<ICat[]> {
  const url = `${uiAccountEndpoint}cats`;

  try {
    const response: AxiosResponse<ICat[], unknown> = await axiosClient.get(url);
    const _data: ICat[] = (response.data as ICat[]).map(
      (item: ICat) => new Cat(item),
    );
    return _data;
  } catch (error: unknown) {
    throw new Error(`Error in 'axiosGetJsonData(${url})'`);
  }
};
