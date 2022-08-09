import { postInputDTO } from "../model/postInputDTO";
import { creationMoment } from "../services/creationMoment";
import { generateId } from "../services/generateId";
import { post } from "../Types/post";
import { PostRepository } from "./repository/PostRepository";

export class PostBusiness {
  constructor(private postDB: PostRepository) {}
  public createPost = async (input: postInputDTO): Promise<void> => {
    try {
      const { photo, description, type, author_id } = input;

      const id: string = generateId();
      const created_at: string = creationMoment();
      const post: post = {
        id,
        photo,
        description,
        type,
        created_at,
        author_id,
      };
      await this.postDB.createPost(post);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  public getAllPosts = async (): Promise<post[]> => {
    try {
      const allPosts = await this.postDB.getAllPosts();
      return allPosts;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  public getPostById = async(id:string):Promise<post[]>=>{
    try {
    const post = await this.postDB.getPostById(id)
    return post;
  } catch (error: any) {
    throw new Error(error.message);
  }}
}
