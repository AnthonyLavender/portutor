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
    host: "127.0.0.1",
    port: "8081",
    user: "Admin",
    password: "password123",
    database: "SoftEngDatabase" 
  });

  con.connect(function(err) {
    if (err) console.log(err);
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function(err,result){
      if(err) throw err;
         console.log(result);
    })
  });


function error(res, msg) {
  res.sendStatus(500);
  console.error(msg);
}

function hash(){
  ///when has function gets made///
}

// function insertProfile(res,msg,fullName,email,password,username,file,desc,location,price,avail,tutor,subject,stars){
//     app.get('/addProfile', (req,res) => {
//         let profile = {
//           profileName:fullName,
//           profileEmail:email,
//           profilePassword:hash(password),
//           profileUsername:username,
//           profilePrictureFile:file,
//           profileBio:desc,
//           profileTutorLocation:location,
//           profileTutorPrice:price,
//           profileAvailabilty:avail,
//           profileTutor:tutor,
//           profileSubjects:subject,
//           profileStars:stars,}
//         let sql = 'INSERT INTO profile SET ?';
//         let query = db.query(sql, profile, (err, result) => {
//           if(err) throw err;
//           console.log(result);
//           res.send('ProfileAdded...')
//         })
//     })
// }
