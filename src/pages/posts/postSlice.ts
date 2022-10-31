import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from '@reduxjs/toolkit';
import axiosClient from '@src/plugins/axios';
import { AxiosResponse } from 'axios';
import { IPost, IReaction, IUser, Types } from './postInterface';
import { Post, User } from './postModel';

export interface IPostInterface {
  posts: IPost[];
  users: IUser[];
  userStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  postSStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: IPostInterface = {
  posts: [] as IPost[],
  users: [] as IUser[],
  userStatus: 'idle',
  postSStatus: 'idle',
};

export const fetchAllUsers = createAsyncThunk(
  Types.GET_USERS,
  async (): Promise<IUser[]> => {
    const url = 'users';
    try {
      const response: AxiosResponse<IUser[], unknown> = await axiosClient.get(
        url,
      );
      const _data: IUser[] = response.data.map((item: IUser) => new User(item));
      return _data;
    } catch (error: unknown) {
      throw new Error(`Error in '(${url})'`);
    }
  },
);

export const fetchAllPosts = createAsyncThunk(
  Types.GET_POSTS,
  async (): Promise<IPost[]> => {
    const url = 'posts';
    try {
      const response: AxiosResponse<IPost[], unknown> = await axiosClient.get(
        url,
      );
      const _data: IPost[] = response.data.map((item: IPost) => new Post(item));
      return _data;
    } catch (error: unknown) {
      throw new Error(`Error in '(${url})'`);
    }
  },
);

export const addNewPost = createAsyncThunk(
  Types.ADD_POST,
  async (data: Partial<IPost>): Promise<IPost> => {
    const url = 'posts';
    try {
      const response: AxiosResponse<IPost, unknown> = await axiosClient.post(
        url,
        data,
      );
      const _data: IPost = new Post(response.data);
      return _data;
    } catch (error: unknown) {
      throw new Error(`Error in '(${url})'`);
    }
  },
);

export const deletePost = createAsyncThunk(
  Types.DELETE_POST,
  async (id: string): Promise<string> => {
    const url = 'posts?id=' + id;
    try {
      const response: AxiosResponse<string, unknown> = await axiosClient.delete(
        url,
      );
      return response.data;
    } catch (error: unknown) {
      throw new Error(`Error in '(${url})'`);
    }
  },
);

const cartSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reactToPost: (
      state,
      action: PayloadAction<{ id: string; reaction: keyof IReaction }>,
    ) => {
      const { id, reaction } = action.payload;
      const indexOfPost = state.posts.findIndex((p: IPost) => p.id === id);
      if (indexOfPost !== -1) {
        const _posts = [...state.posts];
        _posts[indexOfPost].reactions[reaction]++;
        state.posts = _posts;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.userStatus = 'loading';
      })
      .addCase(
        fetchAllUsers.fulfilled,
        (state, action: PayloadAction<IUser[]>) => {
          state.userStatus = 'succeeded';
          state.users = action.payload as IUser[];
        },
      )
      .addCase(fetchAllPosts.pending, (state) => {
        state.postSStatus = 'loading';
      })
      .addCase(
        fetchAllPosts.fulfilled,
        (state, action: PayloadAction<IPost[]>) => {
          state.postSStatus = 'succeeded';
          state.posts = action.payload as IPost[];
        },
      )
      .addCase(addNewPost.fulfilled, (state, action: PayloadAction<IPost>) => {
        state.posts.push(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action: PayloadAction<string>) => {
        const id = action.payload;
        const index = state.posts.findIndex((p) => p.id === id);
        state.posts.splice(index, 1);
      });
  },
});

export const { actions: postAction, reducer: postReducer } = cartSlice;
