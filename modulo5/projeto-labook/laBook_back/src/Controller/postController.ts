import { Request, Response } from "express";
import { PostBusiness } from "../Business/PostBusiness";
import { postInputDTO } from "../model/Post/postInputDTO";

export class PostController {
  constructor(private postBusiness: PostBusiness) {}
  createPost = async (req: Request, res: Response) => {
    try {
      const { photo, description, type, author_id } = req.body;
      const input: postInputDTO = { photo, description, type, author_id };
      await this.postBusiness.createPost(input);
      res.status(201).send({ message: "Post criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
  getAllPosts = async (req: Request, res: Response) => {
    try {
      const allPosts = await this.postBusiness.getAllPosts();
      res.status(200).send(allPosts);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
  getPostById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const post = await this.postBusiness.getPostById(id);
      res.status(200).send(post);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
  showFriendsPosts = async (req: Request, res: Response) => {
    try {
      const { author_id } = req.params;
      const { friend2_id } = req.body;
      const friendsFeed = await this.postBusiness.showFriendsPosts(
        author_id,
        friend2_id
      );
      res.status(200).send(friendsFeed);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
