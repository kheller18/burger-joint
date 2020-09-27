const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "6198HawkS6198!",
    database: "burgersDB"
});

connection.connect(function(err) {
    if (err) {
        console.error(`error connecting: ${ err.stack }`);
        return;
    }
    console.log(`connected as ${ connection.threadId }`);
});

module.exports = connection;