import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axiosClient from '@src/plugins/axios';
import { AxiosResponse } from 'axios';
import { IProduct, Type } from './productInterface';
import { Product } from './productModel';

export interface IPostInterface {
  products: IProduct[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: IPostInterface = {
  products: [] as IProduct[],
  status: 'idle',
};

export const fetchAllProducts = createAsyncThunk(
  Type.GET_PRODUCTS,
  async (): Promise<IProduct[]> => {
    const url = 'products';
    try {
      const response: AxiosResponse<IProduct[], unknown> =
        await axiosClient.get(url);
      const _data: IProduct[] = response.data.map(
        (item: IProduct) => new Product(item),
      );
      return _data;
    } catch (error: unknown) {
      throw new Error(`Error in '(${url})'`);
    }
  },
);

const cartSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchAllProducts.fulfilled,
        (state, action: PayloadAction<IProduct[]>) => {
          state.status = 'succeeded';
          state.products = action.payload as IProduct[];
        },
      );
  },
});

export const { actions: prodyctAction, reducer: productReducer } = cartSlice;
