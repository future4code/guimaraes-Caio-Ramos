-- Active: 1658925567615@@35.226.146.116@3306@guimaraes-4211155-caio-ramos
CREATE TABLE IF NOT EXISTS labook_users(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS labook_posts(
         id VARCHAR(255) PRIMARY KEY,
         photo VARCHAR(255) NOT NULL,
         description VARCHAR(255) NOT NULL,
         type ENUM("normal","event") DEFAULT "normal",
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         author_id VARCHAR(255),
         FOREIGN KEY (author_id) REFERENCES labook_users (id)
      );

ALTER TABLE labook_users
ADD friends VARCHAR(255);
ALTER TABLE labook_users
DROP COLUMN friends;

CREATE TABLE IF NOT EXISTS relational_friends(
id VARCHAR(255) PRIMARY KEY,
friend1_id VARCHAR(255), 
FOREIGN KEY (friend1_id) REFERENCES labook_users(id), 
friend2_id VARCHAR(255), 
FOREIGN KEY (friend2_id) REFERENCES labook_users(id)
);