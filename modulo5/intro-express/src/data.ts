type user = {
  id: string | number | undefined;
  name: string | undefined;
  phone: number | undefined;
  email: string | undefined;
  website: string | undefined;
};
//Ex2 e 3:
export let usersArray: user[] = [
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

//Ex5:
type Posts = {
  id: string | number | undefined;
  title: string | undefined;
  body: string | undefined;
  userId: string | number | undefined;
};

//Ex6:
export let postsArray: Posts[] = [
  {
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    userId: 1,
  },
  {
    id: 2,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    userId: "2",
  },
  {
    id: 3,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    userId: 2,
  },
  {
    id: 4,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    userId: 3,
  },
];
