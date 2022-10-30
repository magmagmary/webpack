import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../products/productInterface';

export interface ICartinterface {
  cartProducts: IProduct[];
}

const initialState: ICartinterface = {
  cartProducts: [] as IProduct[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      state.cartProducts = [action.payload, ...state.cartProducts];
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const targetItemIndex = state.cartProducts.findIndex(
        (item: IProduct) => item.id === action.payload,
      );
      if (targetItemIndex === -1) return;
      state.cartProducts.splice(targetItemIndex, 1);
    },
    clearAllitems: (state) => {
      state.cartProducts = [] as IProduct[];
    },
  },
});

export const { actions: cartAction, reducer: cartReducer } = cartSlice;
