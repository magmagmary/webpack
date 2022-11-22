import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '@src/pages/posts/postInterface';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.IDP_BASE_URL }),
  tagTypes: ['posts'],
  endpoints: (builder) => ({
    getposts: builder.query<IPost[], void>({
      query() {
        return 'posts';
      },
      transformResponse: (response: IPost[]) => {
        return response.sort((a: IPost, b: IPost) =>
          b.date.localeCompare(a.date),
        );
      },
      providesTags: ['posts'],
    }),
    addPost: builder.mutation<void, Partial<IPost>>({
      query(todo) {
        return { url: 'posts', method: 'POST', body: todo };
      },
      invalidatesTags: ['posts'],
    }),
    updatePost: builder.mutation<void, IPost>({
      query(post) {
        return { url: 'posts', method: 'PUT', body: post };
      },
      invalidatesTags: ['posts'],
    }),
    deletePost: builder.mutation<void, string>({
      query(id) {
        return { url: `posts?id=${id}`, method: 'Delete' };
      },
      invalidatesTags: ['posts'],
    }),
  }),
});

export const {
  useAddPostMutation,
  useDeletePostMutation,
  useGetpostsQuery,
  useUpdatePostMutation,
} = postApi;
