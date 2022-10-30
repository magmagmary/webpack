import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '@src/pages/cart/cartSlice';
import { catsReducer } from '@src/pages/cats/catsSlice';
import { postReducer } from '@src/pages/posts/postSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cats: catsReducer,
    post: postReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
