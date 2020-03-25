const DataStore = require('nedb');

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

function idCreate(db){
    id=Math.random().toString(36).substr(2, 9);
    if (!!idCheck(id)){idCreate(db);}
    return id
}

function insertProfile(name,email,password,UserName,pictureFileName,desc,
  location,price,tutor,subject,stars){
   profileDb.insert({
     profile_ID: idCreate(profileDb),
     profile_Name: name,
     profile_Email:email,
     profile_Password:passwordHash.generate(password),
     profile_Username:userName,
     profile_Picture_File:pictureFileName,
     profile_Bio:desc,
     profile_Tutor_Location:location,
     profile_Tutor_Price:price,
     profile_Tutor:tutor,
     profile_Subject:subject,
     profile_Stars:stars
   });
};

function insertReviews(profileId1,profileId2,body,starNo){
  reviewDb.insert({
      review_ID: idCreate(reviewDb),
      profile_Recievered_ID:profileId1,
      profile_Sender_ID:profileId2,
      review_Body:body,
      review_Stars:starNo
  })
}

function insertBooking(date,bookingID,price,location){
  bookingDb.insert({
    booking_ID:idCreate(bookingDb),
    booking_Time_Date:date,
    profileBooking_ID:bookingID,
    booking_price:price,
    booking_location:location
  })
}
