import { ITodo } from './todoInterfaces';

class BaseModel<T> {
  toObject(): T {
    return { ...(this as unknown as T) };
  }
}

export class Todo extends BaseModel<ITodo> implements ITodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;

  constructor(data: ITodo) {
    super();
    this.id = data.id;
    this.todo = data.todo;
    this.completed = data.completed;
    this.userId = data.userId;
  }
}
