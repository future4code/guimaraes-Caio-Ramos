import * as express from "express";
import * as cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor está rodando");
});
