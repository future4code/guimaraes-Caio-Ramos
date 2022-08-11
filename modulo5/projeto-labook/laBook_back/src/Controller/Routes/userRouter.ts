import express from "express";
import { UserBusiness } from "../../Business/UserBusiness";
import { UserDatabase } from "../../Data/mySQL/UserDatabase";
import { UserController } from "../UserController";

export const userRouter = express.Router();

const userDatabase = new UserDatabase();
const userBusiness = new UserBusiness(userDatabase);
const userController = new UserController(userBusiness);

userRouter.post("/create", (req, res) => userController.createUser(req, res));
userRouter.get("/getAll", (req, res) => userController.getAll(req, res));
userRouter.post("/addFriend", (req, res) => userController.addFriend(req, res));
userRouter.get("/checkFriends", (req, res) =>
  userController.checkFriends(req, res)
);
userRouter.delete("/notFriends/:id", (req, res) =>
  userController.undoFriendship(req, res)
);
