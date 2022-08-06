import { BaseDatabase } from "./BaseDatabase";
import { post } from "../../Types/post";
export class PostDatabase extends BaseDatabase {
  private TABLE_NAME = "labook_posts";

  public createPost = async ({
    id,
    photo,
    description,
    type,
    created_at,
    author_id,
  }: post): Promise<void> => {
    await PostDatabase.connection
      .insert({ id, photo, description, type, created_at, author_id })
      .into(this.TABLE_NAME);
  };

  public getAllPosts = async (): Promise<post[]> => {
    try {
      const posts: post[] = [];
      const result = await PostDatabase.connection(this.TABLE_NAME).select("*");
      for (let post of result) {
        posts.push(post);
      }
      return posts;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
