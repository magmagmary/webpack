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
