const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "6198HawkS6198!",
        database: "burgersDB"
    });    
};

connection.connect(function(err) {
    if (err) {
        console.error(`error connecting: ${ err.stack }`);
        return;
    }
    console.log(`connected as ${ connection.threadId }`);
});

module.exports = connection;