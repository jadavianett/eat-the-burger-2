const mysql = require("mysql");

let connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}else{
    console.log("LOCAL CONNECTION")
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        port: "3306",
        password: "jada1998",
        database: "burger_db"
    })
}

connection.connect();

module.exports = connection;