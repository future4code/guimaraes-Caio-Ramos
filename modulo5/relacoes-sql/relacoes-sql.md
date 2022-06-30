# Atividade Relações em SQL

### Exercício 1:
CREATE TABLE Rating(
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
movie_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES movie(id)
);

### EX1-A: 
#### Chave estrangeira (Foreing Key) é um recurso do mySQL para vincular a PRIMARY KEY de uma tabela a outra!
### Ex1-B:
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
"001",
"Filme besta do caramba. QUem vê graça em tony ramos mulher bicho",
3.3,
"001");
SELECT * FROM movie;
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
"002",
"Um clássico aí que nunca vi",
4.7,
"003");
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
"003",
"Uma obra prima. 
Que sirva de introdução a todos para a bibliografia de Lourenço Mutarelli, o maior escritor contemporâneio brasileiro.",
10,
"004");
### Ex1-C:
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
"004",
"teste.",
7,
"005");
#### Erro: a chave estrangeira não consegue se conectar ao id primário de outra tabela (ele não existe). 

### Ex1-D:

ALTER TABLE movie DROP COLUMN rating;

#### Ex1-E:
DELETE FROM movie WHERE id = "001";
# Não é possível deletar o filme porque ele está ligado a uma chave estrangeira (a da tabela Rating). 

### Exercício 2:
CREATE TABLE MovieCast(
movie_id VARCHAR(255),
actor_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES movie(id),
FOREIGN KEY (actor_id) REFERENCES actor(id));

### Ex2-A:
#### Trata-se de uma tabela do tipo relacional. Ou seja, ela liga/relaciona elementos distintos através de um caractere único, como um id.

### Ex2-B:


DELETE FROM actor WHERE id = "8";

INSERT INTO movie
VALUES(
"005",
"The Dark Knight",
"2008-07-18",
"Com a ajuda de Jim Gordon e Harvey Dent, Batman tem mantido a ordem na cidade de Gotham. Mas um jovem e anárquico criminoso conhecido como Coringa ganha força e decide instaurar um verdadeiro caos na cidade. O justiceiro será testado psicologicamente e fisicamente como nunca fora antes em um confronto bastante pessoal. Cabe a Batman encontrar uma maneira de deter o sádico vilão antes que mais vidas sejam perdidas.",
"12-09-2008"
);
INSERT INTO movie
VALUES(
"006",
"Thor: Amor e Trovão",
"2022-07-07",
"A sequência de Thor: Ragnarock, e o quarto filme da saga de Thor.",
"12-09-2022"
);

INSERT INTO movie
VALUES(
"007",
"Top Gun: Ases Indomáveis",
"1986-07-07",
"O filme do Tom Cruise Lá.",
"1986-08-22"
);

INSERT INTO movie
VALUES(
"008",
"O Maquinista",
"2004-01-18",
"O filme do Christian Bale magro pra caramba.",
"2007-12-17"
);

INSERT INTO movie
VALUES(
"009",
"Mother!",
"2017-09-5",
"O filme da Jennifer Lawrence que na verdade é sobre a bíblia, mas ninguém entendeu.",
"2017-10-31"
);

INSERT INTO movie
VALUES(
"010",
"The Hunger Games",
"2012-03-12",
"O filme da Jennifer Lawrence que parece Battle Royale e é bom.",
"2017-04-14"
);
INSERT INTO movie
VALUES(
"011",
"Zombieland",
"2009-09-25",
"É aquele filme de zumbi engraçadinho.",
"2009-11-01"
);

INSERT INTO actor
VALUES(
"009",
"Woody Harrelson",
10000000,
"1961-07-23",
"male");

INSERT INTO actor
VALUES(
"010",
"Tom Cruise",
13000000,
"1962-07-03",
"male");

INSERT INTO actor
VALUES(
"011",
"Jennifer Lawrence",
20000000,
"1990-08-15",
"female");
INSERT INTO actor
VALUES(
"012",
"Christian Bale",
15000000,
"1974-01-30",
"male");

SELECT * FROM movie;
SELECT* FROM actor;
SELECT* FROM MovieCast;
#Ex2-B:
INSERT INTO MovieCast VALUES
("009","011" ),
("010","011"),
("010","009"),
("008", "012"),
("005", "012"),
("006", "012"),
("011", "009");

### Ex2-C: 
INSERT INTO MovieCast VALUES
("009","013" );
#### Apresenta-se o erro de que não é possível atualizar uma linha "filha", já que a chave estrangeira não bate com a primária (ela não existe)

### Ex2-D: 
DELETE FROM actor WHERE id = "012";
#Não é possível deletar o elemento porque ele está vinculado a outra tabela através de uma chave estrangeira
#### É necessário primeiro deletar todas as referências na tabela relacional para então deletar da tabela principal. 


### Exercício 3: 

SELECT * FROM movie
INNER JOIN Rating ON movie.id = Rating.movie_id;

SELECT name, movie_id FROM movie
INNER JOIN Rating ON movie_id = Rating.movie_id;