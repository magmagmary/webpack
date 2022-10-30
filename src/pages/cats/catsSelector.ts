import { RootState } from '@src/store';

export const getCatsList = (state: RootState) => {
  return state.cats.catsList;
};

export const getCatsStatus = (state: RootState) => {
  return state.cats.status;
};

export const getCatsErrors = (state: RootState) => {
  return state.cats.error;
};
