import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axiosClient from '@src/plugins/axios';
import { RootState } from '.';

enum ServerStatus {
  CHECK_SERVER = 'check_server',
}

export interface IPublicInterface {
  axiosInstanceState: 'active' | 'disabled';
  serverStatus: 'on' | 'off';
}

const initialState: IPublicInterface = {
  axiosInstanceState: 'disabled',
  serverStatus: 'off',
};

export const checkServerStatus = createAsyncThunk(
  ServerStatus.CHECK_SERVER,
  async () => {
    await axiosClient.get('/server');
  },
);

const cartSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setAxiosInstanceState: (
      state,
      action: PayloadAction<'active' | 'disabled'>,
    ) => {
      state.axiosInstanceState = action.payload;
    },
  },
  extraReducers: (buidler) => {
    buidler.addCase(checkServerStatus.fulfilled, (state) => {
      state.serverStatus = 'on';
    });
  },
});

export const getAxiosInstanceState = (
  state: RootState,
): 'active' | 'disabled' => state.public.axiosInstanceState;

export const getServerState = (state: RootState): 'on' | 'off' =>
  state.public.serverStatus;

export const { actions: publicAction, reducer: publicReducer } = cartSlice;
