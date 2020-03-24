'use strict';

const express = require('express');
const DataStore = require('nedb');
const app = express();


app.use(express.static(__dirname));
app.use(express.static("public"))
app.use(express.json());

app.listen(8080, (err) => {
if (err) console.error('error starting server', err);
else console.log('server started');
});

function error(res, msg) {
  res.sendStatus(500);
  console.error(msg);
}

profileDb.loadDatabase();
bookingDb.loadDatabase();
transactionDb.loadDatabase();
profileBookingDb.loadDatabase();
reviewsDb.loadDatabase();
