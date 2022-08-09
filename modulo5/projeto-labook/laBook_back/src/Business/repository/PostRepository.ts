import { post } from "../../Types/post";
export interface PostRepository {
  createPost(post: post): Promise<void>;
  getAllPosts(): Promise<post[]>;
  getPostById(id: string): Promise<post[]>;
}
