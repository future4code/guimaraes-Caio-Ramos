import express from "express";
import { UserController } from "../UserController";

export const userRouter = express.Router();
const userController = new UserController();

userRouter.post("/signup", (req, res) => userController.signUp(req, res));
userRouter.get("/getbyid/:id", (req, res) =>
  userController.getUserById(req, res)
);
