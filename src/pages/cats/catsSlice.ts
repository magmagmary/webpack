import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axiosClient from '@src/plugins/axios';
import { AxiosResponse } from 'axios';
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

const cartSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    updateCats: (state, action: PayloadAction<ICat[]>) => {
      state.catsList = action.payload;
    },
  },
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
      });
  },
});

export const { actions: catsAction, reducer: catsReducer } = cartSlice;
