import express from "express";
import { PostBusiness } from "../../Business/PostBusiness";
import { PostDatabase } from "../../Data/mySQL/PostDatabase";
import { PostController } from "../postController";

export const postRouter = express.Router();

const postDatabase = new PostDatabase();
const postBusiness = new PostBusiness(postDatabase);
const postController = new PostController(postBusiness);

postRouter.post("/create", (req, res) => postController.createPost(req, res));
postRouter.get("/getAll", (req, res) => postController.getAllPosts(req, res));
postRouter.get("/get/:id", (req, res) => postController.getPostById(req, res));
postRouter.get("/friendsPosts/:author_id",(req, res) => postController.showFriendsPosts(req, res) )
