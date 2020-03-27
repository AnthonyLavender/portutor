'use strict';

const express = require('express');
const DataStore = require('nedb');
const bodyParser = require('body-Parser')
const app = express();

const profileDb = new DataStore({filename:"database/profile.db",autoload:true});
const bookingDb = new DataStore("database/booking.db");
const transactionDb = new DataStore("database/transaction.db");
const profileBookingDb = new DataStore("database/profileBooking.db");
const reviewsDb = new DataStore("database/reviews.db");

profileDb.loadDatabase();
bookingDb.loadDatabase();
transactionDb.loadDatabase();
profileBookingDb.loadDatabase();
reviewsDb.loadDatabase();

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
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use( bodyParser.json() );

app.get('/getBookingData', (req, res) => {
  bookingDb.find({}, (err, data) => {
    if (err) {
      res.end();
      return;
    }
    res.json(data);
  });
});

app.get('/getProfileData',(req,res)=>{
  profileDb.find({
      }, (err, data) => {
        if (err) {
          res.end();
          return;
        }
        res.json(data);
      });
});

app.post('/LoginUser' , (req, res) => {
  console.log('Got Body: ', req.body);
  res.sendStatus(200);
  console.log(req.body);
})


app.get('/getReviewData',(req,res)=>{
  reviewsDb.find({
      }, (err, data) => {
        if (err) {
          res.end();
          return;
        }
        res.json(data);
      });
});

app.get('/getTransactionData',(req,res)=>{
  transactionDb.find({
      }, (err, data) => {
        if (err) {
          res.end();
          return;
        }
        res.json(data);
      });
});

app.get('/getProfileBookingData',(req,res)=>{
  profileBookingDb.find({
      }, (err, data) => {
        if (err) {
          res.end();
          return;
        }
        res.json(data);
      });
});

app.get('/tutorresults', (req,res)=>{
  res.sendFile(__dirname + '/tutorresults.html');
});

app.get('/logIn', (req,res)=>{
  res.sendFile(__dirname + '/studentprofile.html');
});




// app.post('/SearchForTutor', (req, res) => {
//   console.log('Got body:', req.body);
//   res.sendStatus(200);
//   console.log(req.body);
//   // var obj = JSON.parse(req.body);
//   // console.log(obj);
//   const subject2 = req.body.Subject;
//   var degree = req.body.Degree;
//   var location = req.body.Location;
//   var rating = req.body.RatingValue;
//   var price = req.body.PriceValue;
//   console.log(subject2);
//   const subject = JSON.stringify(subject2);
//   console.log(subject);

//   profileDb.find({
//     profile_Tutor:"True"
//   }, (err, data) => {
//     if (err) {
//       // res.end();
//       console.log("data not recieved")
//       return;
//     }
//     // res.json(data);
//     console.log(data);
//   });
//   console.log("Hi");
// });

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
