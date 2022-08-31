import { app } from "./Controller/app";
import { postRouter } from "./Controller/Routes/postRouter";
import { userRouter } from "./Controller/Routes/userRouter";
//importar ROUTERS

app.use("/user", userRouter);
app.use("/post", postRouter);
