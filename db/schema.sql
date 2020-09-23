ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '6198HawkS6198!';
flush privileges;

DROP DATABASE IF EXISTS burgersDB;
CREATE DATABASE burgersDB;
USE burgersDB;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(30),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);
