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
