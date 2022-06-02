import * as express from "express";
import * as cors from "cors";
import { AddressInfo } from "net";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Estamos no Express");
});

type user = {
  id: string;
  name: string;
  phone: number;
  email: string;
  website: string;
};

let usersArray: user[] = [
  {
    id: "a1b2c3",
    name: "Caio",
    phone: 912385647,
    email: "caiomail@mail.com",
    website: "cornodIn.com",
  },
  {
    id: "d4e5f6",
    name: "Camila",
    phone: 978543216,
    email: "mila@mail.com",
    website: "daumafacadanela.com",
  },
  {
    id: "g7h8i9",
    name: "Hening",
    phone: 976483125,
    email: "hening@mail.com",
    website: "ocaraehbom.com",
  },
];

app.get("/users", (req, res) => {
  if (!usersArray.length) {
    res.status(401).send("Vazio");
  }
  res.status(201).send(usersArray);
});
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

type post = {
  id: string | number | undefined;
  title: string | number | undefined;
  body: string | number | undefined;
  userId: string | number | undefined;
};

let arrayDePosts: post[] = [
  {
    id: 1,
    title: "Ele é calvo e posso provar",
    body: "A ausência de cabelos é fato determinate de que a calvíce entrou em fase irreversível.",
    userId: "g7h8i9",
  },
  {
    id: 2,
    title:
      "O cara roubou o curso e tirava as dúvidas com o criador da plataforma",
    body: "E o caso do cara que pagou por um curso de fullstack,pegou os códigos do curso, abriu um curso próprio e começou a vender as aulas,e quando os alunos tinham dúvidas o pilantra ia no discord do curso que ele copiou e ia perguntar ao professor?",
    userId: "a1b2c3",
  },
];

app.listen(3003, () => {
  console.log("Servidor está rodando");
});
