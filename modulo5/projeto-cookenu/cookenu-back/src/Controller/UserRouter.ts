import express from "express";

import { UserController } from "./UserController";

export const userRouter = express.Router();

const userController = new UserController();
userRouter.post("/signup", (req, res) => userController.signUp(req, res));
userRouter.post("/login", (req, res) => userController.login(req, res));
