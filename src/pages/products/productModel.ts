import { IProduct } from './productInterface';

class BaseModel<T> {
  toObject(): T {
    return { ...(this as unknown as T) };
  }
}

export class Product extends BaseModel<IProduct> implements IProduct {
  id: string;
  name: string;
  detail: string;
  price: number;
  imageUrl: string;

  constructor(data: IProduct) {
    super();
    this.id = data.id;
    this.name = data.name;
    this.detail = data.detail;
    this.price = data.price;
    this.imageUrl = data.imageUrl;
  }
}
