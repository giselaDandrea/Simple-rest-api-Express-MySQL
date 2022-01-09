const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: 'localhost',
    user : "",
    password : "",
    database: "express"
})

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) {
        throw err;
    }  else {
    connection.query('SELECT * FROM USERS', (err, result) => {
        if(err) {
            throw err
        } else {
           if(result[0] == undefined) {
            connection.query(`INSERT INTO USERS VALUES('1', 'Gisela', 'Dandrea')`)
            connection.query(`INSERT INTO USERS VALUES('2', 'Gustavo', 'Dandrea')`)
           }
        }
    });

        
    }
  })

  module.exports = connection; 