import { RootState } from '@src/store';
import { IProduct } from '../products/productInterface';

export const cartproductsList = (state: RootState): IProduct[] => {
  return state.cart.cartProducts;
};

export const cartproductsCount = (state: RootState): number => {
  return state.cart.cartProducts.length;
};
