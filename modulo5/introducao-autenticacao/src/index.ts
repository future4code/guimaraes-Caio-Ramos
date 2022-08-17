import { app } from "./app";
import { userRouter } from './Controller/Routes/UserRouter';
//importar ROUTERS

app.use("/user/", userRouter);
