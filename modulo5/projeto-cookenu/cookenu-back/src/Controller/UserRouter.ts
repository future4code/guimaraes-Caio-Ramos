import express from "express";

import { UserController } from "./UserCOntroller";

export const userRouter = express.Router();

const userController = new UserController();
userRouter.post("/signup", (req, res) => userController.signUp(req, res));
