import { BaseDatabase } from "./BaseDatabase";
import { post } from "../../Types/post";
export class PostDatabase extends BaseDatabase {
  private TABLE_NAME = "labook_posts";

  public createPost = async ({
    id,
    photo,
    description,
    type,
    createdAt,
    authorId,
  }: post): Promise<void> => {
    await PostDatabase.connection
      .insert({ id, photo, description, type, createdAt, authorId })
      .into(this.TABLE_NAME);
  };
}
