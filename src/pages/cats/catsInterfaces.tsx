export interface ICat {
  id: number;
  name: string;
  gender: Gender;
  phone: string;
  email: string;
  favoured: boolean;
  image: IImage;
  color: string;
}

export interface IImage {
  url: string;
  alt: string;
}

export interface IFilter {
  gender: string;
  isFavorite: string;
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}
