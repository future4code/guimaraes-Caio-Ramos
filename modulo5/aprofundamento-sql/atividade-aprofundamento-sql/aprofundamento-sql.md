# APROFUNDAMENTO SQL

SET SQL_SAFE_UPDATES = 0;

#### Exercício 1:
#### 1-A: Excluiria a coluna salary da tabela actor;
#### 1-B: Alteraria a coluna gender da tabela actor para receber valores null;
#### 1-C:
ALTER TABLE actor
MODIFY gender VARCHAR(100);

#### Exercício 2:
#### 2-A:
UPDATE actor
SET name = "Julia Dalavia", birth_date = "1998-02-09"
WHERE id = "003";
#### 2-B:
UPDATE actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
#### 2-C:
UPDATE actor
SET name = "Tarcísio Meira", salary = 700000, birth_date = "1935-10-05", gender="male"
WHERE id = "005";
#### 2-D:
UPDATE actor
SET name = "Rugal Apelão"
WHERE id = "009";
#### Não ocorre error por parte do SQL, mas também não é criado nenhuma nova linha com os dados inseridos no update.

#### Exercício 3:
#### 3-A:
DELETE FROM actor WHERE name = "Fernanda Montenegro";

#### 3-B: 
DELETE FROM actor WHERE (gender = "male") AND (salary >1000000);

#### Exercício 4:
#### 4-A: 
SELECT MAX(salary)
FROM actor;
#### 4-B: 
SELECT MIN(salary)
FROM actor
WHERE gender = "female";
#### 4-C:
SELECT COUNT(*) FROM actor
WHERE gender="female";
#### 4-D:
SELECT SUM(salary)
FROM actor;

#### Exercício 5:
#### 5-A: 
SELECT COUNT(*), gender 
FROM actor
GROUP BY gender;
#### A query separou a tabela em 2 grupos: o de atores (homens) e atrizes (mulheres), pois determinamos que era pra separar por gênero;
#### 5-B:
SELECT name, id FROM actor
ORDER BY name DESC;
#### 5-C: 
SELECT * FROM actor
ORDER BY salary;
#### 5-D:
SELECT * FROM actor
ORDER BY salary
LIMIT 3;
#### 5-E:
SELECT AVG(salary), gender
FROM actor
GROUP BY gender;

#### Exercício 6: 
#### 6-A: 
ALTER TABLE movie 
ADD playing_limit_date VARCHAR(8) NOT NULL;
#### 6-B: 
 #Já tinha craido o rating com valor de float no ex passado;
 ALTER TABLE movie
 MODIFY playing_limit_date VARCHAR(10);
 #### 6-C: 
 SELECT * FROM movie;
 UPDATE movie
 SET playing_limit_date = "2018-01-31"
 WHERE id = "003";
 UPDATE movie
 SET playing_limit_date = "2022-06-30"
 WHERE id = "004";
 
 #### 6-D: 
 DELETE FROM movie WHERE id="002";
 UPDATE movie 
 SET sinopsis = "teste para ver no que vai dar"
 WHERE id = "002";
 #### O mySQL não aponta erros, mas a sinopse atualizada não aparece quando realizamos a busca geral.
 SELECT *FROM movie;