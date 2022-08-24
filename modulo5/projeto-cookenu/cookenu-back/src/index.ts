import { app } from "./app";
import { userRouter } from "./Controller/UserRouter";
//importar ROUTERS

app.use("/user/", userRouter);
