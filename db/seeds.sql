ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '6198HawkS6198!';
USE burgersDB;

INSERT INTO burgers (id, name, devoured) VALUE
(1, "Bacon Burger", FALSE),
(2, "Cheese Burger", FALSE),
(3, "Plain Burger", FALSE);