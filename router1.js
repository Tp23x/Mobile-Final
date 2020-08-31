//Run node of Customer
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
app.get('/tbl_Customer', function (req, res) {
    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM tbl_Customer', function (error, results, fields) {
     
      if (error) throw error;
      res.send(results)
    });
  });
});

app.listen(3001, () => {
 console.log('Go to http://localhost:3001/tbl_Customer so you can see the data.');
});
