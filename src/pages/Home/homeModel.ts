import { Gender, ICat, IImage } from './homeInterfaces';

class BaseModel<T> {
  toObject(): T {
    return { ...(this as unknown as T) };
  }
}

export class Cat extends BaseModel<ICat> implements ICat {
  id: number;
  name: string;
  gender: Gender;
  phone: string;
  email: string;
  favoured: boolean;
  image: IImage;
  color: string;

  constructor(data: ICat) {
    super();
    this.id = data.id;
    this.name = data.name;
    this.gender = data.gender;
    this.phone = data.phone;
    this.email = data.email;
    this.favoured = data.favoured;
    this.image = data.image;
    this.color = data.color;
  }
}
