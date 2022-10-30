import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { posts, users } from '@src/mocks/posts';
import { IPost, IReaction, IUser } from './postInterface';

export interface IPostInterface {
  posts: IPost[];
  users: IUser[];
}

const initialState: IPostInterface = {
  posts: posts as IPost[],
  users: users as IUser[],
};

const cartSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action: PayloadAction<IPost>) => {
        state.posts.push(action.payload);
      },
      prepare: (data: Partial<IPost>) => {
        return {
          payload: {
            id: nanoid.toString(),
            title: data.title || '',
            content: data.content || '',
            userId: data.userId || '',
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactToPost: (
      state,
      action: PayloadAction<{ id: string; reaction: keyof IReaction }>,
    ) => {
      const { id, reaction } = action.payload;
      const _post = state.posts.find((p: IPost) => p.id === id) as IPost;
      if (_post) _post.reactions[reaction]++;
    },
  },
});

export const { actions: postAction, reducer: postReducer } = cartSlice;
