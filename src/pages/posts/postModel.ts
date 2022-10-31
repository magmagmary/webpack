import { nanoid } from '@reduxjs/toolkit';
import { IPost, IReaction, IUser } from './postInterface';

class BaseModel<T> {
  toObject(): T {
    return { ...(this as unknown as T) };
  }
}

export class User extends BaseModel<IUser> implements IUser {
  id: string;
  name: string;

  constructor(data: IUser) {
    super();
    this.id = data.id;
    this.name = data.name;
  }
}

export class Reaction extends BaseModel<IReaction> implements IReaction {
  thumbsUp: number;
  wow: number;
  heart: number;
  rocket: number;
  coffee: number;

  constructor(data: IReaction) {
    super();
    this.thumbsUp = data.thumbsUp || 0;
    this.wow = data.wow || 0;
    this.heart = data.heart || 0;
    this.rocket = data.rocket || 0;
    this.coffee = data.coffee || 0;
  }
}

export class Post extends BaseModel<IPost> implements IPost {
  id: string;
  title: string;
  content: string;
  date: string;
  reactions: IReaction;
  userId: string;

  constructor(data: IPost) {
    super();
    this.id = data.id || nanoid();
    this.title = data.title;
    this.content = data.content;
    this.date = data.date || new Date().toISOString();
    this.reactions = data.reactions || new Reaction({} as IReaction);
    this.userId = data.userId;
  }
}
