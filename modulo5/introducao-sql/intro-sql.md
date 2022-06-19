CREATE TABLE actor(
id VARCHAR(255) PRIMARY KEY,# id é uma string de até 255 caracteres. Primary Key é o identificador único!
name VARCHAR (255) NOT NULL, # name é uma string de até 255 caracteres. NOT NULL indica se a coluna pode ou não ser nula
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,# Date representa a data (ano/mês/dia)
gender VARCHAR(6) NOT NULL# gender é uma string de até 6 caracteres
);

SHOW DATABASES;

#### mostra os bancos de dados criados, mas não entendi como melhor aproeitar o recurso;

SHOW TABLES;

#### Mostra uma lista com as tabelas criadas.

DESCRIBE actor;

#### exibe os tipos de cada elemento da tabela.

INSERT INTO actor(id, name, salary, birth_date, gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);
INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);
INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);

#### Houve erro porque a quantidade de dados inseridos na linha não bateu com as colunas da tabela.

INSERT INTO actor (id,name, salary, birth_date, gender)
VALUES(
"004",
"FAGUDES",
400000,
"1949-04-18",
"male"
);
#Houve erro porque o campo 'name' não foi repassado e, como não possui um valor default, não pode ser preenchido

INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);
#Houve erro porque a forma como a data foi repassada de forma errada. Faltaram as aspas.

INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
"006",
"Deborah Secco",
819333.33,
"1979-11-26",
"female"
);

INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
"007",
"Alexandre Frota",
119333.33,
"1963-10-14",
"male"
);
#Exercicio 3
SELECT \* FROM actor;
SELECT id, name FROM actor;

#A)
SELECT _ FROM actor WHERE gender = "female";
#B)
SELECT salary FROM actor WHERE name = "Tony Ramos";
#C)
SELECT _ FROM actor WHERE gender = "invalid";
#Não houve retorno de nenhuma linha, eis que todas as linhas estão preenchidas com algum gênero.
#D)
SELECT \* FROM actor WHERE salary > 50000;
#E)
SELECT id, nome from actor WHERE id = "002";
#Aponta que a coluna "nome" não está no campo de pesquisa, pois o elemento correto é "nAme".

#Exercício 4:
#Vou tentar os desafios
#Exercício 5:
SELECT _ FROM actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
#5-B:
SELECT _ FROM actor WHERE(name NOT LIKE "A%") AND salary > 350000;

#5-C:
SELECT \* FROM actor WHERE (name LIKE "%G%" OR name LIKE "%g%");

#5-D:
SELECT \* FROM actor WHERE(name LIKE "%a%" OR "%A%") OR (name LIKE "%g%" OR "%G%");

#Exercício 6:
CREATE TABLE movie(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
release_date DATE NOT NULL,
sinopsis TEXT NOT NULL,
rating FLOAT NOT NULL
);
DESCRIBE movie;

INSERT INTO movie (id, name, release_date, sinopsis, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"2006-01-06",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
7);

INSERT INTO movie (id, name, release_date, sinopsis, rating)
VALUES(
"002",
"Doce Mãe",
"2012-12-27",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
10
);

INSERT INTO movie (id, name, release_date, sinopsis, rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"2017-11-02",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
8
);

INSERT INTO movie (id, name, release_date, sinopsis, rating)
VALUES(
"004",
"O Cheiro do Ralo",
"2007-03-23",
"Lourenço é proprietário de uma loja de penhores e se sustenta desenvolvendo um jogo perverso com seus clientes, geralmente em dificuldades financeiras. Tudo muda quando ele conhece uma garçonete e começa a perder o controle de sua vida.",
9
);

#Exercício 7:
#7-A:
SELECT id, name, rating FROM movie WHERE id = "003";

#7-B:
SELECT name FROM movie WHERE name="Dona flor e seus dois maridos";

#7-C:
SELECT id, name, sinopsis FROM movie WHERE (rating >=7);

#Exercício 8:
#8-A:
SELECT \* FROM movie WHERE name LIKE "%vida$";
#Retorna null em tudo porque não temos um filme cujo título tenha a palavra vida

#8-B:
SELECT _ FROM movie WHERE (name LIKE "%ralo%" OR sinopsis LIKE "%ralo%");
#8-C:
SELECT _ FROM movie;
#8-D:
SELECT \* FROM movie WHERE (name LIKE "%marido%" OR sinopsis LIKE "%marido%") AND (rating >7);
