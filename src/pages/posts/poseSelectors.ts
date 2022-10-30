import { RootState } from '@src/store';
import { IPost, IUser } from './postInterface';

export const getAllPosts = (state: RootState): IPost[] => {
  return state.post.posts;
};

export const getAllUsers = (state: RootState): IUser[] => {
  return state.post.users;
};
