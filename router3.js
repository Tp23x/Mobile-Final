//Run node of Package
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
app.get('/Products', function (req, res) {
    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM Products', function (error, results, fields) {
      
     
      if (error) throw error;
      res.send(results)
    });
  });
});

app.listen(3003, () => {
 console.log('Go to http://localhost:3003/Products you can see the data.');
});