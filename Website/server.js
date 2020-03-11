'use strict';

const express = require('express');
const mysql = require('mysql');

const app = express();


app.use(express.static(__dirname));
app.use(express.static("public"))
app.use(express.json());

app.listen(8080, (err) => {
if (err) console.error('error starting server', err);
else console.log('server started');
});


const con = mysql.createConnection({
    host: "localhost",
    user: "myusername",
    password: "mypassword"
  });
  
  con.connect(function(err) {
    if (err) console.log(err);
    console.log("Connected!");
  });
  

function error(res, msg) {
  res.sendStatus(500);
  console.error(msg);
}