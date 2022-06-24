


CREATE TABLE TasksToDoList (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
deadline DATE,
status ENUM ('to do', 'ongoing', 'done') NOT NULL,
pendingUser VARCHAR(255) NOT NULL,
FOREIGN KEY (pendingUser) REFERENCES UserToDoList(id)
);