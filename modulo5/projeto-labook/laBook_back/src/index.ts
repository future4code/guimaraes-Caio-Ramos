import { app } from "./Controller/app";
import { userRouter } from "./Controller/Routes/userRouter";
//importar ROUTERS

app.use("/user", userRouter);
