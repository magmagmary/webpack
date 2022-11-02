import { RootState } from '@src/store';

export const getAllProducts = (state: RootState) => {
  return state.product.products;
};
