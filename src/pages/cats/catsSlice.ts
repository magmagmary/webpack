import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axiosClient from '@src/plugins/axios';
import { AxiosResponse } from 'axios';
import _ from 'lodash';
import { ICat, Types } from './catsInterfaces';
import { Cat } from './catsModel';

export interface ICatsInterface {
  catsList: ICat[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: unknown;
}

const initialState: ICatsInterface = {
  catsList: [] as ICat[],
  status: 'idle',
  error: null,
};

export const fetchAllcats = createAsyncThunk(
  Types.GET_CATS,
  async (): Promise<ICat[]> => {
    const url = 'cats';
    try {
      const response: AxiosResponse<ICat[], unknown> = await axiosClient.get(
        url,
      );
      const _data: ICat[] = response.data.map((item: ICat) => new Cat(item));
      return _data;
    } catch (error: unknown) {
      throw new Error(`Error in '(${url})'`);
    }
  },
);
export const toggleFavoriteCat = createAsyncThunk(
  Types.FAVORITE,
  async (id: number): Promise<string> => {
    const url = 'cats/favorite?id=' + id;
    try {
      const response: AxiosResponse<string, unknown> = await axiosClient.post(
        url,
      );
      return response.data;
    } catch (error: unknown) {
      throw new Error(`Error in '(${url})'`);
    }
  },
);

const cartSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllcats.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchAllcats.fulfilled,
        (state, action: PayloadAction<ICat[]>) => {
          state.status = 'succeeded';
          state.catsList = action.payload as ICat[];
        },
      )
      .addCase(fetchAllcats.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(
        toggleFavoriteCat.fulfilled,
        (state, action: PayloadAction<string>) => {
          const id = action.payload;
          const index = state.catsList.findIndex((p) => p.id === +id);
          if (index === -1) return;
          const _cats = _.clone(state.catsList);
          _cats[index].favoured = !_cats[index].favoured;
          state.catsList = _cats;
        },
      );
  },
});

export const { actions: catsAction, reducer: catsReducer } = cartSlice;
