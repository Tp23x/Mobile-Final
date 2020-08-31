//Run node of Booking
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
app.get('/tbl_Booking', function (req, res) {
    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM tbl_Booking', function (error, results, fields) {
     
      if (error) throw error;
      res.send(results)
    });
  });
});

app.listen(3002, () => {
 console.log('Go to http://localhost:3002/tbl_Booking so you can see the data.');
});