import { app } from "./app";

import { UserController } from "./controller/UserController";

//users endpoints:
const userController = new UserController();
app.post("/createuser", userController.createUser);

app.get("/all", userController.getAllUsers);

app.delete("/:id", userController.deleteUserById);
