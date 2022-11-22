export enum TodoTypes {
  GET_TODOS = 'todos',
}

export interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
