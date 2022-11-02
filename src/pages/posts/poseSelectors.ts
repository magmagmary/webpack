import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@src/store';
import { IPost, IUser } from './postInterface';

export const getAllPosts = (state: RootState): IPost[] => {
  return state.post.posts;
};

export const getPost = (state: RootState, id: string): IPost => {
  return state.post.posts.find((p: IPost) => p.id === id) as IPost;
};

export const getAllUsers = (state: RootState): IUser[] => {
  return state.post.users;
};
