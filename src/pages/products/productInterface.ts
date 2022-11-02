export interface IProduct {
  id: string;
  name: string;
  detail: string;
  price: number;
  imageUrl: string;
}

export enum Type {
  GET_PRODUCTS = 'get_products',
}
