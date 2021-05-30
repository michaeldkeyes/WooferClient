import { Post } from './post';
import { User } from './user';

export class Comment {
  constructor(body: string, postId: number, userId: number) {
    this.body = body;
    this.post = new Post(postId);
    this.user = new User();
    this.user.id = userId;
  }

  Id: number;
  body: string;
  timestamp: Date;
  post: Post;
  user: User;

  public setUser(userId: number): void {
    this.user = new User();
    this.user.id = userId;
  }
  public setPost(postId: number): void {
    this.post = new Post(postId);
  }
}
