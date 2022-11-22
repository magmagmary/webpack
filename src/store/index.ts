import { configureStore } from '@reduxjs/toolkit';
import { postApi } from '@src/features/rtkPosts/postApi';
import { todosApi } from '@src/features/todos/todosApi';
import { cartReducer } from '@src/pages/cart/cartSlice';
import { catsReducer } from '@src/pages/cats/catsSlice';
import { postReducer } from '@src/pages/posts/postSlice';
import { productReducer } from '@src/pages/products/productSlice';
import { publicReducer } from './publicSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cats: catsReducer,
    post: postReducer,
    product: productReducer,
    public: publicReducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([todosApi.middleware, postApi.middleware]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
