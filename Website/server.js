'use strict';

const express = require('express');
const DataStore = require('nedb');
const app = express();
const moment = require('moment');
  moment().format();

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

const profileDb = new DataStore("database/profile.db");
const bookingDb = new DataStore("database/booking.db");
const transactionDb = new DataStore("database/transaction.db");
const profileBookingDb = new DataStore("database/profileBooking.db");
const reviewsDb = new DataStore("database/reviews.db");

profileDb.loadDatabase();
bookingDb.loadDatabase();
transactionDb.loadDatabase();
profileBookingDb.loadDatabase();
reviewsDb.loadDatabase();

// profileDb.insert({
//   profile_ID:"XXXXXXXX",
//   profile_Name:"John",
//   profile_Email:"Fake@Fmail.com",
//   profile_Password:"*********",
//   profile_Username:"UserName",
//   profile_Picture_File:"picture.png",
//   profile_Bio:"Desc",
//   profile_Tutor_Location:null,
//   profile_Tutor_Price:null,
//   profile_Availabilty:null,
//   profile_Tutor:"False",
//   profile_Subject:"Maths",
//   profile_Stars:"4"
// });
// profileDb.insert({
//   profile_ID:"TTTTTTTT",
//   profile_Name:"Bill",
//   profile_Email:"Fake2@Fmail.com",
//   profile_Password:"**********",
//   profile_Username:"UserName2",
//   profile_Picture_File:"picture2.png",
//   profile_Bio:"Desc",
//   profile_Tutor_Location:"Portsmouth",
//   profile_Tutor_Price:"£3.40",
//   profile_Availabilty:"Yes",
//   profile_Tutor:"True",
//   profile_Subject:"Maths",
//   profile_Stars:"4"
// });
//
// bookingDb.insert({
//   booking_ID:"ZZZZZZZZ",
//   booking_Time_Date:"10:00:00 3/12/2000",
//   profile_ID:"XXXXXXXX",
//   booking_price:"£3.40",
//   booking_location:"Eldon Building Portsmouth"
// })
//
// profileBookingDb.insert({
//   profileBooking_ID: "FFFFFFFF",
//   booking_ID:"ZZZZZZZZ",
//   profileStudent_ID:"XXXXXXXX",
//   profileTutor_ID:"TTTTTTTT"
// })
//
// transactionDb.insert({
//   transaction_ID:"AAAAAAAA",
//   booking_ID:"ZZZZZZZZ",
//   transaction_Date:"3/12/2000",
//   transaction_Price:"£3.40"
// })
//
// reviewsDb.insert({
//   review_ID:"RRRRRRRR",
//   profile_Recievered_ID:"TTTTTTTT",
//   profile_Sender_ID:"XXXXXXXX",
//   review_Body:"He was very nice",
//   review_Stars:"5"
// })
