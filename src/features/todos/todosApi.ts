import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITodo } from './todoInterfaces';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  tagTypes: ['todos'],
  endpoints: (builder) => ({
    getTodos: builder.query<ITodo[], void>({
      query() {
        return 'todos';
      },
      transformResponse: (response: { todos: ITodo[] }) => {
        return response.todos;
      },
      providesTags: ['todos'],
    }),
    getTodo: builder.query<ITodo, number>({
      query(id) {
        return `todos/${id}`;
      },
      providesTags: ['todos'],
    }),
    addTodo: builder.mutation<void, ITodo>({
      query(todo) {
        return { url: 'todo/add', method: 'POST', body: todo };
      },
      invalidatesTags: ['todos'],
    }),
    updateTodo: builder.mutation<void, ITodo>({
      query({ id, ...rest }) {
        return { url: `todos/${id}`, method: 'PUT', body: rest };
      },
      invalidatesTags: ['todos'],
    }),
    deleteTodo: builder.mutation<void, number>({
      query(id) {
        return { url: `todos/${id}`, method: 'Delete' };
      },
      invalidatesTags: ['todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
