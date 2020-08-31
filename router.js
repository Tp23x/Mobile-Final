//Run node of Staff
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'WU_Tour'
});

const app = express();
app.get('/tbl_Staff', function (req, res) {
    
    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM tbl_Staff', function (error, results, fields) {
      
      if (error) throw error;

      res.send(results)
    });
  });
});

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/tbl_Staff so you can see the data.');
});

