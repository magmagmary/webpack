export interface ICat {
  id: number;
  name: string;
  gender: Gender;
  ownerNumber: string;
  ownerEmail: string;
  isFavorite: boolean;
  image: string;
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}
