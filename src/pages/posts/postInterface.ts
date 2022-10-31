export interface IPost {
  id: string;
  title: string;
  content: string;
  date: string;
  reactions: IReaction;
  userId: string;
}

export interface IReaction {
  thumbsUp: number;
  wow: number;
  heart: number;
  rocket: number;
  coffee: number;
}

export interface IUser {
  id: string;
  name: string;
}

export enum Types {
  GET_USERS = 'get_users',
  GET_POSTS = 'get_posts',
  ADD_POST = 'add_post',
  DELETE_POST = 'delete_post',
}
