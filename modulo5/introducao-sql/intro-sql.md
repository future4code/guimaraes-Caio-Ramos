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
